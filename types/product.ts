export type ParamsType = {
    productId: string;
    locale: string;
    variant?: string;
  };

  export type SearchParamsType = {
    variant?: string;
  };

export type ProductVariant = {
    productVariant: string;
    productColour: string;
    productPrice: number;
    inStock: boolean;
    imageUrl: string;
  };

export type ProductType = {
    [variantId: string]: ProductVariant;
  };

export type ProductDetailsProps = {
    product: ProductType;
    variantId: string;
    productId: string;
    locale: string;
    productName: string;
  };

export type ProductVariantsProps = {
    product: ProductType;
    selectedVariantId: string;
    onChange: (variantId: string) => void;
  };
