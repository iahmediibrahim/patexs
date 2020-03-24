import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
    homeData = {
        about: {
            description: `PATEXS, is an Egyptian company,
            specialized in information technology services, consulting, and business process outsourcing.
             <br/>
             It envisioned and instigated the adoption of the flexible business practices, to operate efficiently and produce more value.
             <br/>
             PATEXS strength lies in perceiving the client’s business processes, culture,
              vision and goals across the industry segments an...

             `,
            image: './../../../../assets/about-home.png',
        },
        services: {
            description: `PATEXS,
            delivers quality and timely solutions and services at a price that make our clients smile.
           PATEXS focuses on offshore development at our excellence center in Cairo, Egypt.
            <br/>
            An in-depth knowledge of various technology areas enables us to provide end-to-end solutions and services.
            We maximize the benefits of our dep...
           `,
            sections: [
                { image: './../../../../assets/it-services.svg', title: 'IT Services', id: 'it-services' },
                { image: './../../../../assets/consultancy.svg', title: 'Consultancy', id: 'consultancy' },
                { image: './../../../../assets/outsourcing.svg', title: 'Outsourcing', id: 'outsourcing' },
                { image: './../../../../assets/training.svg', title: 'Training', id: 'training' },
            ],
        },
        partners: {
            title: 'Partners',
            images: [],
        },
    };
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit(): void {
        for (let i = 1; i <= 4; i++) {
            this.homeData.partners.images.push(`./../../../../assets/logos/${i}.png`);
        }
    }
}
