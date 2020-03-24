import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: [ './partners.component.scss' ],
})
export class PartnersComponent implements OnInit {
    partners = {
        title: 'Our Partners',
        images: [],
    };
    constructor() {}

    ngOnInit(): void {
        for (let i = 1; i <= 4; i++) {
            this.partners.images.push(`./../../../../assets/logos/${i}.png`);
        }
    }
}
