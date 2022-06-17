import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';



const routes: Routes = [
 {path :'' , component :HomeComponent} , 
  {path : 'products' ,component :ProductsComponent} , 
 {path : 'myproducts' , component :MyProductsComponent},
 {path : 'profil' , component : ProfileComponent} , 
 {path : 'register' , component : RegisterComponent},
 {path : 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
