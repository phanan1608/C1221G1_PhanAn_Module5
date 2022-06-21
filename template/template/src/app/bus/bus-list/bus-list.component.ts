import {Component, OnInit} from '@angular/core';
import {Bus} from '../../bus';
import {Place} from '../../place';
import {BusService} from '../bus.service';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  busList: Bus[];
  placeList: Place[];
  numberControlToDelete: number;
  idToDelete: number;
  p: number;


  constructor(private busService: BusService, private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getAllBus();
    this.getPlaceList();
  }

  getPlaceList() {
    this.placeService.getAll().subscribe(placeList => {
      this.placeList = placeList;
    });
  }

  getAllBus() {
    this.busService.getAll().subscribe(
      data => {
        console.log(data);
        this.busList = data.content;
      }
    );
  }

  deleteModal(id: any, code: number) {
    this.idToDelete = id;
    this.numberControlToDelete = code;
  }

  deleteEstate() {
    this.busService.deleteBus(this.idToDelete).subscribe(() => {
      }, () => {

      },
      () => {
        this.ngOnInit();
      }
    );
  }

  searchBus(from: HTMLSelectElement, to: HTMLSelectElement) {
      this.busService.getAllAndSearch(from.value,to.value).subscribe(data =>{
        this.busList = data.content;
      })
  }
}
