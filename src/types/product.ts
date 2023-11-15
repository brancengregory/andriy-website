export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  contentHtml?: string;
}

export type CartItem = Product & {
  quantity: number;
};
