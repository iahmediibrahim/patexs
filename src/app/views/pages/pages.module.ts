import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CareersComponent } from './careers/careers.component';
import { JobComponent } from './careers/job/job.component';
import { ApplyComponent } from './careers/apply/apply.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    declarations: [ HomeComponent, AboutComponent, ContactComponent, CareersComponent, JobComponent, ApplyComponent, ServicesComponent ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModule,
        NgxTypedJsModule,
        FormsModule,
        TranslateModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyDYzeDWbKJNNj15nrgMPVPt4kWyPN-3bH8',
        }),
    ],
    exports: [ TranslateModule ],
})
export class PagesModule {}
