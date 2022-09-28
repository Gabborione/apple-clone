import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-section-divider',
    templateUrl: './section-divider.component.html',
    styleUrls: ['./section-divider.component.scss']
})
export class SectionDividerComponent implements OnInit {
    isOverLogo: boolean = false;

    @ViewChild('lockedLogo') div: ElementRef<HTMLDivElement> | undefined;

    constructor() {}

    ngOnInit(): void {}

    @HostListener('window:scroll', ['$event'])
    scrollMovement(event: Event) {
        this.isLogoVisible();
    }

    isLogoVisible() {
        if (this.div?.nativeElement.getBoundingClientRect().top! <= 990) {
            this.isOverLogo = true;
        }
    }
}
