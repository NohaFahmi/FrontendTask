export interface IFilter {
  filterTitle: string;
  filterItems: IFilterItem[];
}
export interface IFilterItem {
  name: string;
  value: string;
}
