import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() image!: string;
  @Input() title?: string;
  @Input() details?: string;
  @Input() prix?: string;

  constructor() {}

  ngOnInit(): void {}
}
