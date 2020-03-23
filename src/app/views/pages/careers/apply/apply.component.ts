import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrls: [ './apply.component.scss' ],
})
export class ApplyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    onApply(form: NgForm) {
        if (form.invalid) {
            return;
        }
        console.log(form.value);
    }
}
