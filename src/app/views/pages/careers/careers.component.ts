import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: [ './careers.component.scss' ],
})
export class CareersComponent implements OnInit {
    silder = [
        {
            image: './../../../../assets/about-bg.png',
            title: 'Lorem Ipsum is simply dummy',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s.`,
        },
        {
            image: './../../../../assets/about-bg.png',
            title: 'Lorem Ipsum is simply dummy',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s.`,
        },
        {
            image: './../../../../assets/about-bg.png',
            title: 'Lorem Ipsum is simply dummy',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s.`,
        },
    ];
    jobs = [
        {
            image: './../../../../assets/ui.png',
            title: 'Sr. UI/UX Designer',
            id: 'ui-ux-Designer',
        },
        {
            image: './../../../../assets/android.png',
            title: 'Sr. Android Developer',
            id: 'android-developer',
        },
        {
            image: './../../../../assets/ios.png',
            title: 'Sr. IOS Developer',
            id: 'ios-developer',
        },
        {
            image: './../../../../assets/social.png',
            title: 'Social Media',
            id: 'social-media',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
