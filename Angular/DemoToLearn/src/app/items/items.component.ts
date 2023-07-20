import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ItemsDetailsComponent } from '../items-details/items-details.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements AfterViewInit {
  color: string = 'red';
  title: string = '';
  @ViewChild('mychild') myChild!: ItemsDetailsComponent;
  @ViewChildren('mychild') cheldren!: QueryList<ItemsDetailsComponent>;
  public receiveDataFromChild!: string;
  constructor() {
    setTimeout(() => {
      console.log(this.myChild);
    }, 3000);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.myChild.setTitle('heellooooooo');
    }, 3000);

    for (const child of this.cheldren.toArray()) {
      console.log(child);
    }
  }
  applyFilter(event: Event): string {
    let filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
    // ... etc...
  }
}
function HostListner(
  target: ItemsComponent,
  propertyKey: 'ClickMe',
  descriptor: TypedPropertyDescriptor<() => void>
): void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}
