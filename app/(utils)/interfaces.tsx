export interface ProductProps {
  id: number;
  productName: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
  favorite: boolean;
  brand: {
    id: number;
    name: string;
    country: string;
  };
  onFavoriteToggle?: () => void;
  loading?: boolean;
}

export interface ProductListProps {
  products: ProductProps[];
  // onFavoriteToggle: (index: number) => void;
}
