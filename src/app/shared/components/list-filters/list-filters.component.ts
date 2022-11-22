import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IFilter} from "@interfaces/common.interface";

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListFiltersComponent implements OnInit {

  @Input() filtersList?: IFilter[] = [];
  @Output() onFiltersSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFilters(selectedFilters: any[], filterName: string) {
    this.onFiltersSelection.emit(selectedFilters);
  }
}
