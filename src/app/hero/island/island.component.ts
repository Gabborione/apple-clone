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
    tempScrollPos: number = 0;

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
        let scaleFactor: number = 1;

        // scaleFactor = this.distance / 300;
        // console.log(scaleFactor);

        // if (scaleFactor <= 1) {
        //     scaleFactor = 1;
        // }
        if (this.tempScrollPos !== 0) {
            return {
                transform: `matrix(1,0,0,1,0,0)`
            };
        } else {
            return {
                transform: `matrix(2,0,0,2,245,255)`
            };
        }

        // return {
        //     transform: `scale(${scaleFactor})`
        // };
    }

    transformIsland() {
        this.distance = this.island?.nativeElement.getBoundingClientRect().top!;

        if (this.tempScrollPos === 0 && this.distance <= this.innerHeight / 2) {
            this.tempScrollPos =
                this.scrollY - this.innerHeight / 2 + this.distance;
        }

        if (this.tempScrollPos !== 0) {
            return {
                width: (this.scrollY - this.tempScrollPos) * 0.8 + 'px'
            };
        } else {
            return {
                width: 50 + 'px'
            };
        }
    }
}
