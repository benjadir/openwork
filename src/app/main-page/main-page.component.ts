import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  displayedphotos = [700, 800, 807].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  public slides: { src: string; title: string; subtitle: string }[] = [
    {
      src: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'title.1',
      subtitle: 'subtile.1',
    },
    {
      src: 'https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'title.2',
      subtitle: 'subtitle.2',
    },

    {
      src: 'https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'title.3',
      subtitle: 'subtitle.3',
    },
    {
      src: 'https://images.pexels.com/photos/1175135/pexels-photo-1175135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'title.3',
      subtitle: 'subtitle.3',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    let varia = document.getElementById('myCarousel');
    console.log(varia);
  }

  // $(document).ready(function () {
  //   $("#myCarousel").carousel();
  // });
}
