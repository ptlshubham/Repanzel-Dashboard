import { Routes } from '@angular/router';
import { ServicesComponent } from './services.component';


export const ServicesRoutes: Routes = [{
    path: '',
    children: [{
        path: 'services',
        component: ServicesComponent
    }]
}];
