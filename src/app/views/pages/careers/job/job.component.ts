import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: [ './job.component.scss' ],
})
export class JobComponent implements OnInit {
    jobs = [
        {
            title: 'Sr. UI/UX Designer',
            id: 'ui-ux-Designer',
            about: [
                `We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.`,
                `UI/UX Designer responsibilities include gathering user requirements,
                 designing graphics elements and building navigation components.
                To be successful in this role, you should have experience with design software and wireframe tools.
                 If you also have a portfolio of professional design projects that includes work with web/mobile applications,
                 we’d like to meet you.`,
                `Ultimately, you’ll create both functional and appealing features that address our clients’
                 needs and help us grow our customer base.`,
            ],
            requirements: [
                `Proven work experience as a UI/UX Designer or similar role`,
                `Portfolio of design projects`,
                `Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)`,
                `Up-to-date knowledge of design software like Adobe Illustrator and Photoshop`,
                `Team spirit; strong communication skills to collaborate with various stakeholders`,
                `Good time-management skills`,
                `BSc in Design, Computer Science or relevant field`,
            ],
        },
        {
            title: 'Sr. Android Developer',
            id: 'android-developer',
            about: [
                `We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.`,
                `UI/UX Designer responsibilities include gathering user requirements,
               designing graphics elements and building navigation components.
              To be successful in this role, you should have experience with design software and wireframe tools.
               If you also have a portfolio of professional design projects that includes work with web/mobile applications,
               we’d like to meet you.`,
                `Ultimately, you’ll create both functional and appealing features that address our clients’
               needs and help us grow our customer base.`,
            ],
            requirements: [
                `Proven work experience as a UI/UX Designer or similar role`,
                `Portfolio of design projects`,
                `Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)`,
                `Up-to-date knowledge of design software like Adobe Illustrator and Photoshop`,
                `Team spirit; strong communication skills to collaborate with various stakeholders`,
                `Good time-management skills`,
                `BSc in Design, Computer Science or relevant field`,
            ],
        },
        {
            title: 'Sr. IOS Developer',
            id: 'ios-developer',
            about: [
                `We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.`,
                `UI/UX Designer responsibilities include gathering user requirements,
               designing graphics elements and building navigation components.
              To be successful in this role, you should have experience with design software and wireframe tools.
               If you also have a portfolio of professional design projects that includes work with web/mobile applications,
               we’d like to meet you.`,
                `Ultimately, you’ll create both functional and appealing features that address our clients’
               needs and help us grow our customer base.`,
            ],
            requirements: [
                `Proven work experience as a UI/UX Designer or similar role`,
                `Portfolio of design projects`,
                `Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)`,
                `Up-to-date knowledge of design software like Adobe Illustrator and Photoshop`,
                `Team spirit; strong communication skills to collaborate with various stakeholders`,
                `Good time-management skills`,
                `BSc in Design, Computer Science or relevant field`,
            ],
        },
        {
            title: 'Social Media',
            id: 'social-media',
            about: [
                `We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.`,
                `UI/UX Designer responsibilities include gathering user requirements,
               designing graphics elements and building navigation components.
              To be successful in this role, you should have experience with design software and wireframe tools.
               If you also have a portfolio of professional design projects that includes work with web/mobile applications,
               we’d like to meet you.`,
                `Ultimately, you’ll create both functional and appealing features that address our clients’
               needs and help us grow our customer base.`,
            ],
            requirements: [
                `Proven work experience as a UI/UX Designer or similar role`,
                `Portfolio of design projects`,
                `Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)`,
                `Up-to-date knowledge of design software like Adobe Illustrator and Photoshop`,
                `Team spirit; strong communication skills to collaborate with various stakeholders`,
                `Good time-management skills`,
                `BSc in Design, Computer Science or relevant field`,
            ],
        },
    ];
    jobId;
    selectedJob = {
        title: '',
        id: '',
        about: [],
        requirements: [],
    };
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.jobId = this.route.snapshot.params.id;
        this.selectedJob = this.jobs.find((job) => job.id === this.jobId);
    }
}
