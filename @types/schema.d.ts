export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type PortfolioPost = {
  id: string;
  cover: string;
  title: string;
  date: string;
  description: string;
  // tags: Tag[];
};
