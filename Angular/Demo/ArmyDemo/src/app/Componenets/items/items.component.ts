import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit, AfterViewInit {
  public msg: string = 'title';
  public msg2: string = '';
  @ViewChild(ItemDetailsComponent, { static: true, read: ElementRef })
  ChildComp: any;
  @ViewChildren('child') child!: QueryList<ItemsComponent>;

  @ViewChild('child') itemsDetails: any;

  constructor() {
    setTimeout(() => {
      console.log(this.itemsDetails?.setTitle('print from parent'));
    }, 3000);
  }
  ngOnInit(): void {
    console.log('in OnInit');
    console.log(this.itemsDetails);

    console.log(this.ChildComp.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('int Afrer View Init');

    console.log(this.child.toArray());

    // console.log(this.ChildComp);
  }
}
