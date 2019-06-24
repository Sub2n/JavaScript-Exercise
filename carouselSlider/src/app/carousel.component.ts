import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <label for="overflow">carousel <b>overflow: hidden</b></label>
    <input type="checkbox" id="overflow" checked />
    <label for="infinite">
      <b>intinite: {{ isIntinite }}</b></label
    >
    <input type="checkbox" id="infinite" (change)="isIntinite = $event.target.checked" />

    <div
      class="carousel"
      [ngStyle]="{
        width: carouselWidth + 'px',
        height: carouselHeight + 'px',
        opacity: activeCarousel ? '1' : '0'
      }"
    >
      <div class="carousel-item-container">
        <div class="carousel-item" *ngFor="let item of items">
          <a href="#">
            <img
              src="{{ item }}"
              (load)="
                carouselWidth = $event.target.offsetWidth;
                carouselHeight = $event.target.offsetheight
              "
            />
          </a>
        </div>
        <button class="carousel-control prev">&laquo;</button>
        <button class="carousel-control next">&raquo;</button>
      </div>
    </div>
  `,
  styles: [
  `
      .carousel {
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        /* carousel 요소의 width/height의 셋팅이 완료될 때까지 감춘다. */
        opacity: 0;
        border: 1px dotted red; /* for test */
      }

      .carousel-item-container {
        /* 수평 정렬 */
        display: flex;
      }

      .carousel-item {
        padding: 5px;
      }

      .carousel-item img {
        /* image 요소 아래에 패딩된 여분의 공간 제거하기 */
        vertical-align: bottom;
      }

      /* carousel의 prev, next 버튼 */
      .carousel-control {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2em;
        color: #fff;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
        z-index: 99;
      }

      .carousel-control:focus {
        outline: none;
      }

      /* carousel의 prev 버튼 */
      .carousel-control.prev {
        left: 0;
      }

      /* carousel의 next 버튼 */
      .carousel-control.next {
        right: 0;
      }

      .carousel-control.disabled {
        opacity: 0.5;
      }

      /* For Test */
      .carousel {
        overflow: visible;
      }

      /* For Test */
      #overflow:checked + .carousel {
        overflow: hidden;
      }
    `
  ]
  })
export class CarouselComponent implements OnInit {
  items = [
    'http://via.placeholder.com/400x150/3498db/fff&text=1',
    'http://via.placeholder.com/400x150/3498db/fff&text=2',
    'http://via.placeholder.com/400x150/3498db/fff&text=3',
    'http://via.placeholder.com/400x150/3498db/fff&text=4'
  ];

  carouselWidth: number;

  carouselHeight: number;

  isIntinite: boolean;

  activeCarousel: boolean;

  private offset: number;

  private currentItem: number;

  private isTransiting: boolean;

  constructor() {}

  ngOnInit() {
    this.offset = 0;
    this.currentItem = 0;
    this.isTransiting = false;
    this.isIntinite = false;
    this.activeCarousel = true;
  }
}
