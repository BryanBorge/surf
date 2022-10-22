export type Image = {
  img: string;
  location: string;
  date: string;
  rows?: number;
  cols?: number;
};

export type ImageListItem = {
  sectionTitle: string;
  location: string;
  key: string;
  images: Array<Image>;
};

export type ImageList = Array<ImageListItem>;
