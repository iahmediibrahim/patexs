import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: [ './services.component.scss' ],
})
export class ServicesComponent implements OnInit {
    servicesData = {
        description: `PATEXS, delivers quality and timely solutions and services at a price that make our clients smile.
         PATEXS focuses on offshore development at our excellence center in Cairo, Egypt.
       <span class="mt-3 d-block"></span>
       An in-depth knowledge of various technology areas enables us to provide end-to-end solutions and services.
       We maximize the benefits of our depth, diversity and delivery capability, ensuring adaptability to client needs,
        and thus bringing out the most innovative solutions in every business and technology domain.


       `,
        image: './../../../../assets/services.png',
        sections: [
            { image: './../../../../assets/Mission.svg', title: 'Mission', quote: 'Customer’s choice for partnership' },
            {
                image: './../../../../assets/Vision.svg',
                title: 'Vision',
                quote: 'To be the company that best understands and satisfies all stakeholders',
            },
            {
                image: './../../../../assets/Values.svg',
                title: 'Values',
                list: [ '- Customer Commitment.', '- A Will to Win.', '- Integrity.', '- Agility.' ],
            },
        ],
        team: [
            { image: './../../../../assets/team-member.png', title: 'CEO', name: 'Kamal Elhdad' },
            { image: './../../../../assets/team-member.png', title: 'UI / UX Designer', name: 'Ahmed Samir' },
            { image: './../../../../assets/team-member.png', title: 'Android Developer', name: 'Mohamed Ali' },
            { image: './../../../../assets/team-member.png', title: 'HR Specialist', name: 'Ranya Sayed' },
        ],
    };
    constructor(private viewportScroller: ViewportScroller) {}

    ngOnInit(): void {}
    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
