import {
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
    selector: 'app-island',
    templateUrl: './island.component.html',
    styleUrls: ['./island.component.scss']
})
export class IslandComponent implements OnInit {
    @ViewChild('island') island: ElementRef<HTMLSpanElement> | undefined;
    innerHeight: number = 0;
    distance: number = 0;
    scrollY: number = 0;
    startScrollPos: number = 0;
    finalScrollPos: number = 0;
    qWidth: number = 0;
    mWidth: number = 0;
    qZoom: number = 0;
    mZoom: number = 0;
    qPosition: number = 0;
    mPosition: number = 0;
    scaleFactor: number = 1;
    positionFactor: number = 0;

    constructor() {}

    ngOnInit(): void {
        this.innerHeight = window.innerHeight;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.innerHeight = window.innerHeight;
    }

    @HostListener('window:scroll', ['$event'])
    scrollMovement(event: Event) {
        this.scrollY = window.pageYOffset;
    }

    transformText() {
        this.scaleFactor = (this.scrollY - this.qZoom) / this.mZoom;
        this.positionFactor = (this.scrollY - this.qPosition) / this.mPosition;
        console.log('Scale: ' + this.scaleFactor);

        if (
            this.startScrollPos !== 0 &&
            this.distance <= this.innerHeight / 1.5
        ) {
            return {
                transform: `matrix(${this.scaleFactor},0,0,${
                    this.scaleFactor
                },${this.positionFactor / 2},${this.positionFactor})`
            };
        } else {
            return {
                transform: `matrix(1,0,0,1,0,0)`
            };
        }

        // return {
        //     transform: `scale(${scaleFactor})`
        // };
    }

    transformIsland() {
        this.distance = this.island?.nativeElement.getBoundingClientRect().top!;

        if (
            this.startScrollPos === 0 &&
            this.distance <= this.innerHeight / 1.5
        ) {
            this.startScrollPos =
                this.scrollY - this.innerHeight / 1.5 + this.distance;

            this.finalScrollPos = this.startScrollPos + this.innerHeight / 1.5;
            this.mWidth =
                (this.finalScrollPos - this.startScrollPos) / (136 - 50);
            this.qWidth = this.startScrollPos - this.mWidth * 50;

            this.mZoom = (this.finalScrollPos - this.startScrollPos) / (2 - 1);
            this.qZoom = this.startScrollPos - this.mZoom * 1;

            this.mPosition =
                (this.finalScrollPos - this.startScrollPos) / (650 - 1);
            this.qPosition = this.startScrollPos - this.mPosition * 1;
        }

        if (
            this.startScrollPos !== 0 &&
            this.distance <= this.innerHeight / 1.5
        ) {
            console.log('Final: ' + this.finalScrollPos);
            console.log('Start: ' + this.startScrollPos);
            console.log('Actual: ' + this.scrollY);
            console.log('q: ' + this.qWidth);

            return {
                width: (this.scrollY - this.qWidth) / this.mWidth + 'px'
            };
        } else {
            return {
                width: 50 + 'px'
            };
        }
    }
}
