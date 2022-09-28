import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-bottom-header',
    templateUrl: './bottom-header.component.html',
    styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {
    isScrolled: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    @HostListener('window:scroll', ['$event'])
    scrollMovement(event: Event) {
        if (window.pageYOffset > 10) this.isScrolled = true;
        else {
            this.isScrolled = false;
        }
    }
}
