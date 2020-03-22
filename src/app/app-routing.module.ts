import { BlankLayoutComponent } from './shared/layout/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: BlankLayoutComponent,
        children: [ { path: '', loadChildren: () => import('./views/pages/pages.module').then((m) => m.PagesModule) } ],
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
