export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  contentHtml?: string;
  colorOptions?: string[];
  materialOptions?: string[];
  priceOptions?: { color: string; material: string; price: number }[];
}

export type CartItem = Product & {
  quantity: number;
};
