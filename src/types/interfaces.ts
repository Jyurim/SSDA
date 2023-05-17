export interface INavItem {
  name: string;
  path: string;
  icon?: string;
  children?: INavItem[];
}
