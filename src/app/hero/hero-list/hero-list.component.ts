import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Image {
    name: string;
    url: string;
}

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
    selectedImage: Image | undefined;
    prevImage: Image | undefined;

    videoVisible: boolean = true;
    imageIsActive: boolean = false;

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

        setTimeout(() => {
            this.imageIsActive = true;
        }, 100);
    }

    isSelected(image?: Image): boolean {
        return this.selectedImage === image;
    }

    ngOnInit(): void {
        this.selectedImage = this.images[0];
    }
}
