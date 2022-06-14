import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';


const routes: Routes = [{
  path: 'timelines',
  component: TimelinesComponent,
  children: [{
    path: ':id',
    component: YoutubePlayerComponent
  }],

}, {
  path: 'youtube',
  component: YoutubePlaylistComponent
}, {
  path: 'product/list',
  component: ProductListComponent
},{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
},{
  path: 'product/edit/:id',
  component: ProductUpdateComponent
}, {
  path: 'dictionary/page',
  component: DictionaryPageComponent
}, {
  path: 'dictionary/detail/:word',
  component: DictionaryDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
