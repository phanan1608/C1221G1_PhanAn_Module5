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
  currentPage: number;
  totalPages: number;
  from: string = '-1';
  to: string = '-1';
  numberControl: string = '';

  constructor(private busService: BusService, private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getAllBus({page: 0, size: 5});
    this.getPlaceList();
  }

  getPlaceList() {
    this.placeService.getAll().subscribe(placeList => {
      this.placeList = placeList;
    });
  }

  getAllBus(request) {
    this.busService.getAll(request).subscribe(
      data => {
        console.log(data);
        this.busList = data.content;
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
        console.log(this.currentPage);
        console.log(this.totalPages);
      }
    );
  }

  searchBus(from: HTMLSelectElement, to: HTMLSelectElement, numberControl: HTMLInputElement) {
    this.from = from.value;
    this.to = to.value;
    this.numberControl = numberControl.value;
    this.getAllBus({page: 0, size: 5, from: this.from, to: this.to, numberControl: this.numberControl});
  }

  previousPage() {
    const request = {};
    if ((this.currentPage) > 0) {
      console.log(request);
      request['page'] = this.currentPage - 1;
      request['size'] = 5;
      request['from'] = this.from;
      request['to'] = this.to;
      request['numberControl'] = this.numberControl;
      this.getAllBus(request);
    }
  }

  nextPage() {
    const request = {};
    if ((this.currentPage + 1) < this.totalPages) {
      console.log(request);
      request['page'] = this.currentPage + 1;
      request['size'] = 5;
      request['from'] = this.from;
      request['to'] = this.to;
      request['numberControl'] = this.numberControl;
      this.getAllBus(request);
    }
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
}
