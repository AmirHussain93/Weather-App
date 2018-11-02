import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { HttpModule } from '@angular/http';

export const RoutingComponents = [
  HomeComponent,
  SettingComponent
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


