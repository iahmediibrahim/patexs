import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [ CommonModule, PagesRoutingModule, NgbModule, NgxTypedJsModule ],
})
export class PagesModule {}
