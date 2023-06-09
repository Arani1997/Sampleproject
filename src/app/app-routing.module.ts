import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OSAComponent } from './osa/osa.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'about-us',component: AboutusComponent},
  {path:'photo-gallery',component: PhotogalleryComponent},
  {path:'osa',component: OSAComponent},
  {path:'latestnews',component: LatestNewsComponent },
  {path:'home',component: HomeComponent },
  {path:'login',component: LoginComponent },
  {path:'success',component: SuccessComponent },
  {path:'register',component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
