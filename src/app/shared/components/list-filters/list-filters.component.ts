import {Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewEncapsulation} from '@angular/core';
import {IFilter, IFilterOption} from "@interfaces/common.interface";

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListFiltersComponent implements OnInit {

  @Input() filterItems: IFilter[] = [];
  @Output() onFiltersSelection: EventEmitter<{[key: string]: IFilterOption[]}> = new EventEmitter<{[key: string]: IFilterOption[]}>();
  selectedFilters: {[key: string]: IFilterOption[]} = {
    'categories': [],
    'prices': [],
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFilters(selectedValues: IFilterOption[], filterId: string) {
    this.selectedFilters[filterId] = selectedValues;
    this.onFiltersSelection.emit(this.selectedFilters);
  }

}
