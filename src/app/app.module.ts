import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './shared/layout/error/error.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavComponent } from './shared/layout/nav/nav.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [ AppComponent, NavComponent, FooterComponent, ErrorComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ],
            },
        }),
    ],
    providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
