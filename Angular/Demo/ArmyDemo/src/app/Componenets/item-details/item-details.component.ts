import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  @Input() public commingMsg: string = '';
  @Output() public sentMsg: EventEmitter<string> = new EventEmitter<string>();

  setTitle(title: string) {
    console.log(`my Title is ${title}`);
  }

  doEvent() {
    this.sentMsg.emit('hello from Child to parent');
  }
}
