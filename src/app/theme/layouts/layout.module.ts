import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashfooterComponent} from './dashfooter/dashfooter.component';
import { DefaultComponent } from '../pages/default/default.component';

import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {HrefPreventDefaultDirective} from '../../_directives/href-prevent-default.directive';
import {UnwrapTagDirective} from '../../_directives/unwrap-tag.directive';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TabsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
        suppressScrollX: true
      };

@NgModule({
	declarations: [
        DashfooterComponent,
        SidebarComponent,
        TopbarComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        DefaultComponent
	],
	exports: [
        DashfooterComponent,
        SidebarComponent,
        TopbarComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        DefaultComponent
	],
	imports: [
		CommonModule,
                RouterModule,
                PerfectScrollbarModule,
                TabsModule.forRoot(),
                CollapseModule.forRoot(),
        ],
        providers:[{provide: PERFECT_SCROLLBAR_CONFIG,useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}]
})
export class LayoutModule {
}