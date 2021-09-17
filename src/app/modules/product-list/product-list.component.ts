import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageNumber: number = 6;
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
  ];
  numberOfItemspage = 8;
  firstpage = 0;

  usedItems: { src: string; title?: string; prix?: string; details?: any }[] =
    [];
  constructor() {}

  ngOnInit(): void {
    this.showpage('');
  }
  nextpage(nextname: string) {
    if (this.firstpage >= 0 && this.firstpage < this.items.length) {
      this.showpage('');
    }
    if (this.firstpage > this.items.length) {
      this.firstpage = this.firstpage;
    } else {
      console.log('next xlicked');
      this.firstpage = this.firstpage + this.numberOfItemspage;
      console.log('firstpage=', this.firstpage);
    }
  }
  prevpage(prevname: string) {
    console.log('prev xlicked');
    if (this.firstpage >= 0 && this.firstpage < this.items.length) {
      this.showpage('');
    }
    if (this.firstpage <= 0 && this.firstpage <= 8) {
      this.firstpage = this.firstpage;
    } else {
      this.firstpage = this.firstpage - this.numberOfItemspage;
      console.log('firstpage=', this.firstpage);
    }
  }
  showpage(methodname: string) {
    this.usedItems = [];
    for (
      let i = this.firstpage;
      i < this.firstpage + this.numberOfItemspage;
      i++
    ) {
      if (i < this.items.length) {
        this.usedItems.push(this.items[i]);
      }
    }
    console.log('that the new items', this.usedItems);
    console.log('length of items', this.items.length);
  }
}
