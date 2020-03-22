import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [ CommonModule, LayoutModule, TranslateModule ],
    exports: [ TranslateModule ],
})
export class SharedModule {}
