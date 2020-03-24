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
            { image: './../../../../assets/Quality.svg', title: 'Quality' },
            { image: './../../../../assets/Technology.svg', title: 'Technology' },
            { image: './../../../../assets/Innovation.svg', title: 'Innovation' },
        ],
        services: [
            {
                image: './../../../../assets/it-services.svg',
                title: 'IT Services',
                id: 'it-services',
                description:
                    'With the dedicated talented team at PATEXS with its vision of quality and innovation has been successful in catering the needs of those who seek our assistance in following areas of IT enabled services:',
                tags: [ 'Software Solutions', 'Web Solutions' ],
                list: [],
            },
            {
                image: './../../../../assets/consultancy.svg',
                title: 'Consultancy',
                id: 'consultancy',
                description:
                    'Consulting is the integrated part of our services with expertise in custom programming, IT Auditing, clientserver database design and implementation, and web development. We specialize in designing and implementing cost-effective, creative information solutions to complex business problems. We have provided services to fin...',
                tags: [],
                list: [],
            },
            {
                image: './../../../../assets/outsourcing.svg',
                title: 'Outsourcing',
                id: 'outsourcing',
                description:
                    "When your business is running twenty-four seven to come up with innovative means to maximize its potential, outsourcing isn't just an option it is a necessity. Today, efficient business process outsourcing has become the lever to unload your organization of resource-consuming procedures and controllable costs. Every...",
                tags: [],
                list: [],
            },
            {
                image: './../../../../assets/training.svg',
                title: 'Training',
                id: 'training',
                description:
                    'In our corporate training programs, we emphasis on a course schedule that achieves following objective for the corporate:',
                list: [
                    'Training should align with the business plan and address the core competencies of your business.',
                    'It is necessary that training outcomes strengthen the job environment and organizational pract...',
                ],
                tags: [],
            },
        ],
        stacks: [
            {
                title: 'Professional Services',
                image: './../../../../assets/Professional-Services.svg',
                tags: [ 'E-services', 'Portals', 'Intranet', 'CRM', 'Web applications', 'ERP' ],
            },
            {
                title: 'Mobile Applications',
                image: './../../../../assets/Mobile-Applications.svg',
                tags: [ 'Native', 'Hyprid', 'Flutter', 'iOS/Android' ],
            },
            {
                title: 'CMS',
                image: './../../../../assets/CMS.svg',
                tags: [ 'SharePoint', 'Drupal', 'Joomla!', 'WordPress' ],
            },
            {
                title: 'WorkFlow Platform',
                image: './../../../../assets/WorkFlow-Platform.svg',
                tags: [ 'K2 Platform', 'Nintex Platform', 'Microsoft Flow' ],
            },
        ],
        techStack: [
            '.Net',
            'PHP',
            'ReactJS',
            'Node JS',
            'SAP',
            'ORACLE',
            'SQL Server',
            'My SQL',
            'Mongo DB',
            'Hyper SQl',
            'SharePoint',
            'Drupal',
            'WordPress',
            'Microsoft Dynamics CRM',
            'Joomla!',
            'Python',
            'Swift',
            'JavaScript',
            'Rust',
            'Scala',
            'Ruby',
            'GoLang/Go',
            'Java',
        ],
    };
    constructor(private viewportScroller: ViewportScroller) {}

    ngOnInit(): void {}
    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
