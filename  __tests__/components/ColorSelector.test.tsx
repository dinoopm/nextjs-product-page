import { render, fireEvent } from "@testing-library/react";
import ColorSelector from "@/components/product/ProductVariants";

describe("ColorSelector", () => {
  const mockVariants = {
    "001": {
      productVariant: "Night Black",
      productColour: "#333",
      productPrice: 12550,
      inStock: true,
      imageUrl:
        "/v1/products/BOOMSTER_GO/boomster-go-main-black-1300x1300x72.jpg",
    },
    "002": {
      productVariant: "Sand White",
      productColour: "#d5ccb8",
      productPrice: 9900,
      inStock: false,
      imageUrl:
        "/v1/products/BOOMSTER_GO/boomster-go-main-sand-1300x1300x72.jpg",
    },
  };

  it("renders all color options", () => {
    const { getAllByRole } = render(
      <ColorSelector
        product={mockVariants}
        selectedVariantId="001"
        onChange={() => {}}
      />
    );

    expect(getAllByRole("button")).toHaveLength(2);
  });

  it("calls onChange when a color is selected", () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <ColorSelector
        product={mockVariants}
        selectedVariantId="001"
        onChange={mockOnChange}
      />
    );

    fireEvent.click(getAllByRole("button")[1]);
    expect(mockOnChange).toHaveBeenCalledWith("002");
  });
});
