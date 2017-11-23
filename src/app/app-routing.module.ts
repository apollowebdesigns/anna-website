import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {NewWorkComponent} from './new-work/new-work.component';
import {InspirationComponent} from './inspiration/inspiration.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ShopComponent} from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'new-work', component: NewWorkComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
