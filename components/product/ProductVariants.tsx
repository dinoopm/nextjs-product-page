import type { ProductVariantsProps } from "@/types/product";

export default function ProductVariants({
  product,
  onChange,
  selectedVariantId,
}: ProductVariantsProps) {
  return (
    <div className="flex justify-center gap-2 mb-5">
      {Object.entries(product).map(([id, variant]) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`p-1 border border-black flex items-center justify-center cursor-pointer ${
            selectedVariantId === id ? "border border-black" : "border-gray-300"
          } `}
          aria-label={variant.productVariant}
        >
          <span
            className="w-6 h-6 p-1 bg-black"
            style={{ backgroundColor: variant.productColour }}
          ></span>
        </button>
      ))}
    </div>
  );
}
