"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";

import ProductImage from "./ProductImage";
import ProductVariants from "./ProductVariants";
import ProductPrice from "./ProductPrice";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

import type { ProductDetailsProps } from "@/types/product";

export default function ProductDetails({
  productName,
  product,
  variantId,
  productId,
  locale,
}: ProductDetailsProps) {
  const t = useTranslations("Product");
  const router = useRouter();
  const [selectedVariantId, setSelectedVariantId] = useState(variantId);
  const { productPrice, imageUrl, inStock, productVariant } =
    product[selectedVariantId];

  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    router.push(`/${locale}/product/${productId}?variant=${variantId}`, {
      scroll: false,
    });
  };

  const handleAddToCart = () => {
    // add to cart handler code here
  };

  return (
    <div className="w-full md:max-w-md mx-auto bg-white rounded-lg shadow p-4 border border-gray-200">
      <ProductImage imageUrl={imageUrl} alt={productVariant} />
      <Heading className="font-bold text-center mb-1">{productName}</Heading>
      <ProductPrice price={productPrice} locale={locale} />
      <ProductVariants
        product={product}
        selectedVariantId={selectedVariantId}
        onChange={handleVariantChange}
      />
      <Button
        className="bg-green-700 text-white py-3 text-lg hover:bg-green-700 disabled:bg-gray-400"
        aria-label={`${t("buyButton")} - ${productVariant}`}
        disabled={!inStock}
        onClick={handleAddToCart}
      >
        {t("buyButton")}
      </Button>
    </div>
  );
}
