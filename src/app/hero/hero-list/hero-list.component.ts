import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
    images: Map<string, string> = new Map<string, string>([
        [
            '0Viola scuro',
            'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_deep_purple__eog5f5067tw2_large_2x.jpg'
        ],
        [
            '1Oro',
            'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_gold__gctbxs1dpb6m_large_2x.jpg'
        ],
        [
            '2Argento',
            'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_silver__e5nps2bqzt26_large_2x.jpg'
        ],
        [
            '3Nero siderale',
            'https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/colors/gallery_space_black__dnuzmbh1d7ki_large_2x.jpg'
        ]
    ]);

    selectedImage: Map<string, string> = new Map([['0Viola scuro', '']]);

    constructor() {}

    selectImage(image: string) {
        this.selectedImage = new Map(
            [...this.images].filter(([k, v]) => k === image)
        );

        console.log(this.selectedImage.values().next().value);
    }

    ngOnInit(): void {
        console.log(this.selectedImage.values().next().value);
    }
}
