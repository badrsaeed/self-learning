import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
})
export class ItemsDetailsComponent implements OnChanges {
  @Input() parentButton!: TemplateRef<any>;
  @Input() itemsFromChild: string = '';
  @Output() toParent: EventEmitter<string> = new EventEmitter<string>();

  public pushEvent() {
    this.toParent.emit('data sent from child to parent successfully');
  }
  public setTitle(value: string) {
    this.itemsFromChild = value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
