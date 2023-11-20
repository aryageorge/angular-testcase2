import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';



 const routes: Routes = [
  {
      component:HomeComponent,
      path:''
  },
  {
      component:AboutComponent,
      path:'About'
  },
  {
      component:ContactComponent,
      path:'Contact'
  },
  {
      component:ProductComponent,
      path:'Product'
  },
  {
    component:StudentComponent,
    path:'student/:studentname/:studentplace'
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
