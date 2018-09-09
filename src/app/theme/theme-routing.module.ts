import {NgModule} from '@angular/core';
import { ThemeComponent } from './theme.component';
import {Routes, RouterModule} from '@angular/router';

// import { UserListingComponent } from "./pages/default/user-listing/user-listing.component";

const routes: Routes = [
    { path: '', component: ThemeComponent,children : [
        { path: 'user/dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
        { path: 'user/createnewcustomer', loadChildren: '../Investment/customersetup/newcustomer/newcustomer.module#NewcustomerModule'},

        { path: '', redirectTo: 'user/dashboard', pathMatch: 'full'}
    ]},
    {
        "path": "**",
        "redirectTo": "missing\/page",
        "pathMatch": "full"
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ThemeRoutingModule {}