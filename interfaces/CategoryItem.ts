export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImage;
  category: string;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesAccessories[];
  gallery: {
    first: ResponsiveImage;
    second: ResponsiveImage;
    third: ResponsiveImage;
  };
  others: RelatedProduct[];
}

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

export interface IncludesAccessories {
  quantity: number;
  item: string;
}
