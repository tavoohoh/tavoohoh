export enum PortfolioLayout {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface Link {
  text: string;
  url: string;
  isApp?: boolean;
}

export interface Image {
  url: string;
  alt?: string;
  layout?: PortfolioLayout;
}
