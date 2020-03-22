import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.scss' ],
})
export class AboutComponent implements OnInit {
    constructor(private viewportScroller: ViewportScroller) {}

    aboutData = {
        description: `PATEXS, is an Egyptian company,
          specialized in information technology services, consulting, and business process outsourcing.
           <br/>
           It envisioned and instigated the adoption of the flexible business practices, to operate efficiently and produce more value.
           <br/>
           PATEXS strength lies in perceiving the client’s business processes, culture,
            vision and goals across the industry segments an...

           `,
        image: './../../../../assets/about.png',
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
    ngOnInit(): void {}
    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
