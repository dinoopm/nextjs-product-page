import ProductDetails from "@/components/product/ProductDetails";
import type { ParamsType, SearchParamsType } from "@/types/product";
import { getTranslations } from "next-intl/server";

async function getProductData(productId: string, locale: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(
    `${baseUrl}/api/products/${productId}?locale=${locale}`
  );
  if (!res.ok) throw new Error("Product fetch failed");
  return res.json();
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<ParamsType>;
  searchParams: Promise<SearchParamsType>;
}) {
  try {
    const { productId, locale } = await params;
    const { variant } = await searchParams;
    const { product, metaData } = await getProductData(productId, locale);

    if (!product || Object.keys(product).length === 0) {
      throw new Error("No product variants");
    }

    const variantId = variant || Object.keys(product)[0];
    const variantData = product[variantId];

    return {
      title: metaData.title,
      description: metaData.description,
      openGraph: {
        images: [variantData.imageUrl],
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<ParamsType>;
  searchParams: Promise<SearchParamsType>;
}) {
  const { productId, locale } = await params;
  const { variant } = await searchParams;
  const t = await getTranslations("Product");

  try {
    const { product, metaData } = await getProductData(productId, locale);

    if (!product || Object.keys(product).length === 0) {
      return <div>{t("notfound")}</div>;
    }

    const variantId = variant || Object.keys(product)[0];
    const { productName } = metaData;

    return (
      <ProductDetails
        productName={productName}
        product={product}
        variantId={variantId}
        productId={productId}
        locale={locale}
      />
    );
  } catch {
    return <div>{t("notfound")}</div>;
  }
}

