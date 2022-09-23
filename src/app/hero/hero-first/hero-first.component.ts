import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-first',
    templateUrl: './hero-first.component.html',
    styleUrls: ['./hero-first.component.scss']
})
export class HeroFirstComponent implements OnInit {
    logoVisible: boolean = false;
    videoVisible: boolean = false;

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
            }, 1000);
        }, 1000);
    }
}
