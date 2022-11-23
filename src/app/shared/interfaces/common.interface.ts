
export interface IFilter {
  id: string;
  title: string;
  values: IFilterOption[];
}

export interface IFilterOption {
  id: number;
  name: string;
  selected: boolean;
}
