import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-first',
    templateUrl: './hero-first.component.html',
    styleUrls: ['./hero-first.component.scss']
})
export class HeroFirstComponent implements OnInit {
    logoVisible: boolean = false;
    videoVisible: boolean = false;
    scrollPositionY: number = 0;

    isOverLogo: boolean = false;
    scrollFirst: Number = 0;

    constructor() {}

    ngOnInit(): void {
        this.activateLogo();
    }

    activateLogo() {
        setTimeout(() => {
            this.logoVisible = true;

            setTimeout(() => {
                this.logoVisible = false;
                this.videoVisible = true;
            }, 500);
        }, 1000);
    }

    @HostListener('window:scroll', ['$event'])
    scrollMovement(event: Event) {
        if (window.pageYOffset > 900)
            this.scrollFirst = window.pageYOffset * 1.8 - 1000;
        else {
            this.scrollFirst = 0;
        }

        if (window.pageYOffset > 7040) this.isOverLogo = true;

        this.scrollPositionY = window.pageYOffset;
    }

    transformFirst() {
        return {
            transform: `matrix(1, 0, 0, 1, 0, -${this.scrollFirst})`
        };
    }
}
