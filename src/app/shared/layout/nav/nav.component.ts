import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.scss' ],
})
export class NavComponent implements OnInit {
    isMenuCollapsed = true;
    lang = '';
    servicesActive = 'our-services';
    constructor(
        private router: Router,
        private viewportScroller: ViewportScroller,
        private translate: TranslateService,
    ) {
        this.router.events.pipe(filter((e) => e instanceof Scroll)).subscribe((e: any) => {
            if (e.position) {
                console.log(e.position);
                this.viewportScroller.scrollToPosition(e.position);
            } else if (e.anchor) {
                console.log(e.anchor);
                this.viewportScroller.scrollToAnchor(e.anchor);
            } else {
                this.viewportScroller.scrollToPosition([ 0, 0 ]);
            }
        });
    }

    ngOnInit(): void {
        this.lang = this.translate.getDefaultLang();
    }
    onServicesClick(router) {
        this.servicesActive = router;
    }
    switchLanguage(language: string) {
        this.translate.use(language);
        this.lang = language;
    }
}
