import { KeyValue } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs';

interface Image {
    name: string;
    url: string;
}

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {
    selectedImage: Image | undefined;
    prevImage: Image | undefined;

    videoVisible: boolean = true;
    imageIsActive: boolean = false;

    interval: any;

    images: Image[] = [
        {
            name: 'Viola scuro',
            url: 'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_deep_purple__eog5f5067tw2_large_2x.jpg'
        },
        {
            name: 'Oro',
            url: 'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_gold__gctbxs1dpb6m_large_2x.jpg'
        },
        {
            name: 'Argento',
            url: 'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_silver__e5nps2bqzt26_large_2x.jpg'
        },
        {
            name: 'Nero siderale',
            url: 'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_space_black__dnuzmbh1d7ki_large_2x.jpg'
        }
    ];

    constructor() {}

    selectImage(image: Image) {
        this.prevImage = this.selectedImage;
        this.selectedImage = image;
        this.videoVisible = false;
        this.imageIsActive = false;

        this.resetTimer();

        setTimeout(() => {
            this.imageIsActive = true;
        }, 100);
    }

    vidEnded() {
        this.startTimer();
    }

    isSelected(image?: Image): boolean {
        return this.selectedImage === image;
    }

    autoImage(): number {
        let current = this.images.indexOf(this.selectedImage!);
        return current + 1 < this.images.length ? current + 1 : 0;
    }

    startTimer() {
        this.interval = setInterval(() => {
            this.selectImage(this.images[this.autoImage()]);
        }, 3000);
    }

    resetTimer() {
        clearInterval(this.interval);
        this.startTimer();
    }

    ngOnInit(): void {
        this.selectedImage = this.images[0];
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}
