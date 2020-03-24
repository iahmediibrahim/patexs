import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: [ './service.component.scss' ],
})
export class ServiceComponent implements OnInit {
    serviceData = {
        itServices: {
            description: `With the dedicated talented team at PATEXS with its vision of quality and innovation has been successful in catering the needs of those who seek our assistance in following areas of IT enabled services:`,
            tags: [
                'Software Solutions',
                'Web Solutions',
                'Quality Assurance & Testing',
                'Application Maintenance & Support',
                'Turnkey Solutions',
                'Offshore development',
            ],
            sections: [
                {
                    title: 'Software Solutions',
                    description: `We provide web solutions & services to help customer reach to a wider customer base, You need web consulting to get more return on your investment in your web site. We can help you get the most effective solution through:`,
                    tags: [
                        'Interactive Application Development',
                        'Custom Application Development/ Maintenance',
                        'MIS and ERP Solutions & Support',
                    ],
                },
                {
                    title: 'Web Solutions',
                    description: `We provide web solutions & services to help customer reach to a wider customer base, You need web consulting to get more return on your investment in your web site. We can help you get the most effective solution through:`,
                    tags: [ 'Website Development', 'Intranet Development', 'E-commerce' ],
                },
                {
                    title: 'Quality Assurance & Testing',
                    description: `PATEXS believes in quality to the max. and quality is one of the most success factors with our customers and partners. You just need to know that one of PATEXS co-founders one of the co-founders is a quality expert with +18 years experience in the software quality field, we offer:`,
                    tags: [
                        'Functional Testing services',
                        'Test Automation consultation and implementation',
                        'Performance Testing services',
                        'Security Testing/ Valunarbility scanning',
                    ],
                },
                {
                    title: 'Application Maintenance & Support',
                    description: `PATEXS has a dedicated team with many years of experience in executing maintenance projects. Our team of experienced consultants has been successfully managing maintenance projects of local clients as well as offshore ones.`,
                    tags: [],
                },
                {
                    title: 'Turnkey Solutions',
                    description: `PATEXS takes up projects under this service for a fixed price and takes all responsibility of execution and project management. These solutions are ideally suited for projects that are fairly well specified and require well-defined interfacing with the client. Our mature software development processes, combined with excellent infrastructure have significantly increased the “on-time and onbudget” delivery of software in the offshore mode.`,
                    tags: [],
                },
                {
                    title: 'Offshore development',
                    description: `To get the best IT solutions, you don't need to be geographically near us. That's because we offer quality offshore development center. Our offshore software solutions in application development and web site development guarantee cost savings without the need to compromise on either speed or quality. Our 100% customer retention rates speaks for our quality, swift response and cost effectiveness. These all feathers to our work make us a preferred offshore development house..`,
                    tags: [],
                },
            ],
        },
        training: {
            title:
                'In our corporate training programs, we emphasis on a course schedule that achieves following objective for the corporate:',
            list: [
                'Training should align with the business plan and address the core competencies of your business.',
                'It is necessary that training outcomes strengthen the job environment and organizational practices but vice-versa is obligatory as well.',
                'Knowledge management and self-directed learning should be integral part of the training/learning processes.',
                'We ensure that Training process is effective, efficient and is properly staffed, organized, and managed.',
                'We have feedback systems to monitor business plans, performance problems and training results.',
            ],
        },
        consultancy: [
            'is the integrated part of our services with expertise in custom programming, IT Auditing, clientserver database design and implementation, and web development. We specialize in designing and implementing cost-effective, creative information solutions to complex business problems. We have provided services to finance institutions, government sectors, private sectors and Software houses.',
            'We pay full attention to customers, doesn’t matter theirs is Five page web site or fully fledged ERP to be designed. And we take proud in the fact that customers right from the inception have continuously added to our friends list. Most of our customers are brought to us through our satisfied users.',
            'Our vast pool of technically qualified and managerial manpower is well supported by excellent infrastructure and knowledge management facilities to deliver the client time bound, qualitative and cost effective solution meeting the global standards.',
        ],
        outsourcing: [
            `When your business is running twenty-four seven to come up with innovative means to maximize its potential, outsourcing isn't just an option it is a necessity. Today, efficient business process outsourcing has become the lever to unload your organization of resource-consuming procedures and controllable costs. Everyone works towards allowing your organization a stronger focus on core business areas.`,
            `PATEXS not only provides industry-specific solutions but also deputes personnel to organizations with technical skills to manage back office transaction processing. Viewing it from clients’ perspective this cuts off cost on acquiring and maintaining technical staff and enables them focus on their core competencies. The key element of services delivery is an integrated approach towards providing increasing value over the entire course of our client relationships.`,
        ],
    };
    constructor(private route: ActivatedRoute) {}
    serviceId;

    ngOnInit(): void {
        this.route.params.subscribe((param) => (this.serviceId = param.id));
    }
}
