import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageNumber: any;
  items: { src: string; title?: string; prix?: string; details?: any }[] = [
    {
      src: '../../../../assets/images/adv.jpg',
      title: 'motocycle 1200cv',
      prix: '20000.5',
    },
    {
      src: '../../../../assets/images/img5.jpg',
      title: 'motocycle 1000cv',
      prix: '21000',
    },
    {
      src: '../../../../assets/images/img6.jpg',
      title: 'motocycle 400cv',
      prix: '2500',
    },
    {
      src: '../../../../assets/images/ho3.png',
      title: 'motocycle 1200cv',
      prix: '25000.99',
    },
    {
      src: '../../../../assets/images/clho.jpg',
      title: 'motocycle 1000cv',
      prix: '15000',
    },
    {
      src: '../../../../assets/images/ho5.png',
      title: 'motocycle 400cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/yama.jpg',
      title: 'motocycle 1200cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/ninja.jpg',
      title: 'motocycle 1000cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/beni.jpg',
      title: 'motocycle 400cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/beni2.jpg',
      title: 'motocycle 1000cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/cross.jpg',
      title: 'motocycle 400cv',
      prix: '25000',
    },
    {
      src: '../../../../assets/images/honda.png',
      title: 'motocycle 1000cv',
      prix: '8000',
    },
    {
      src: '../../../../assets/images/hond2.png',
      title: 'motocycle 400cv',
      prix: '2200.5',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
