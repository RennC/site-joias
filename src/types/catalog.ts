export interface ProductImage {
  alt: string;
  src: string;
}

export interface Product {
  available: boolean;
  description: string;
  id: string;
  image: ProductImage;
  name: string;
  slug: string;
}
