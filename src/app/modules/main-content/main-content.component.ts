import {
  Component,
  OnInit,
  VERSION,
  Renderer2,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, AfterViewInit {
  slides: { src: string; title: string; subtitle: string }[] = [
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
  name = 'Angular ' + VERSION.major;
  @ViewChildren('accordeon') accordeons!: QueryList<ElementRef<HTMLElement>>;
  selected!: string | null;
  constructor(private _renderer: Renderer2) {}

  ngAfterViewInit() {
    console.log('all accordeons', this.accordeons);
  }

  toggle($event: any) {
    // close all open items using renderer
    this.accordeons.forEach((acc) => {
      this._renderer.addClass(acc.nativeElement, 'hidden');
    });
    // get current target
    const currentTarget = $event.target;
    // using html content to save selecte open accordeon
    // and stop script if click on same item
    if (currentTarget.innerHTML === this.selected) {
      this.selected = null;
      return;
    }
    this.selected = currentTarget.innerHTML;
    // get next html element using renderer
    const currentAccordeon = this._renderer.nextSibling(currentTarget);
    // remove class using renderer
    this._renderer.removeClass(currentAccordeon, 'hidden');
  }

  ngOnInit(): void {}
}
