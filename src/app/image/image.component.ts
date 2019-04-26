import { Component } from '@angular/core';

@Component({
  selector: 'image',
  styleUrls: ['./image.component.scss'],
  templateUrl: './image.component.html',
})
export class ImageComponent {
}

export const IMAGES: ImageComponent[] = [
  { id: 1, name: 'img1' },
  { id: 2, name: 'img2' },
  { id: 3, name: 'img3' },
  { id: 4, name: 'img4' },
  { id: 5, name: 'img5' },
  { id: 6, name: 'img6' },
  { id: 7, name: 'img7' },
  { id: 8, name: 'img8' },
  { id: 9, name: 'img9' },
];
