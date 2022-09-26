import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-first',
    templateUrl: './hero-first.component.html',
    styleUrls: ['./hero-first.component.scss']
})
export class HeroFirstComponent implements OnInit {
    logoVisible: boolean = false;
    videoVisible: boolean = false;

    scrollY: any = 0;

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
        console.log('Scroll Event', window.pageYOffset);

        if (window.pageYOffset > 900)
            this.scrollY = window.pageYOffset * 1.7 - 1000;
    }

    transform() {
        return {
            transform: `matrix(1, 0, 0, 1, 0, -${this.scrollY})`
        };
    }
}
