import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'about', component:AboutPageComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'landing', component:LandingPageComponent},
    {path: '', redirectTo:'/landing', pathMatch: 'full'},
    { path: '**', redirectTo: '/landing' }
];