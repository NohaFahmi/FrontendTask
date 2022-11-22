import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-list-sort',
  templateUrl: './list-sort.component.html',
  styleUrls: ['./list-sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListSortComponent implements OnInit {
  sortOptions: FormControl;
  @Input() sortOptionsList: any[] = [];
  @Output() onSortOptionsSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.sortOptions = new FormControl('lucy');
  }

  ngOnInit(): void {
  }


  onSelectOptions(option: any) {
    this.onSortOptionsSelection.emit(option);
  }
}
