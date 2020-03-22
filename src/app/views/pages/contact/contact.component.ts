import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { NgForm } from '@angular/forms';

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: [ './contact.component.scss' ],
})
export class ContactComponent implements OnInit {
    constructor() {}

    // google maps zoom level
    zoom = 8;

    // initial center position for the map
    lat = 51.673858;
    lng = 7.815982;
    contact = [
        {
            image: './../../../../assets/location.svg',
            content: 'Lorem Ipsum is simply dummy text of',
        },
        {
            image: './../../../../assets/phone.svg',
            content: '0123456789, 0123456798, 012345679',
        },
        {
            image: './../../../../assets/email.svg',
            content: 'info@arabdt.com',
        },
    ];
    onContact(form: NgForm) {
        if (form.invalid) {
            return;
        }
        console.log(form.value);
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
        });
    }
    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true,
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false,
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true,
        },
    ];
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    ngOnInit(): void {}
}
