export interface Item {
  id: number;
  title: string;
  content?: string;
}

export interface BaseAction {
  type: string;
}

export interface Action extends BaseAction {
  [key: string]: any;
}
