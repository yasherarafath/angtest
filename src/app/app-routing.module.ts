import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "landing", component: TestComponent },
  { path: "home", component: HomeComponent },
  { path: "contactus", component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ContactusComponent, HomeComponent,TestComponent];