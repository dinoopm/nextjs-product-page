import { formatCurrency } from "@/utils/number";

type ProductPriceProps = {
  price: number;
  locale: string;
};
export default function ProductPrice({ price, locale }: ProductPriceProps) {
  return (
    <p className="text-lg font-semibold mb-3 text-center">
      {formatCurrency(price)}
    </p>
  );
}
