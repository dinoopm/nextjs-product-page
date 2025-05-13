import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ProductPage from "@/app/[locale]/product/[productId]/page";

// Complete mock data with variants
const mockProductData = {
  product: {
    "001": {
      productVariant: "Night Black",
      productPrice: 12550,
      inStock: true,
      imageUrl: "/test-image.jpg",
    },
    "002": {
      productVariant: "Sand White",
      productPrice: 9900,
      inStock: false,
      imageUrl: "/test-image.jpg",
    },
  },
  metaData: {
    productName: "BOOMSTER Go",
  },
};

// Mock fetch implementation
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockProductData),
  })
) as jest.Mock;

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams({ variant: "001" }),
  useParams: () => ({ productId: "BOOMSTER_GO", locale: "en-us" }),
}));

describe("Product Page Integration", () => {
  it("handles missing product data", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({}),
    });

    const Page = await ProductPage({
      params: Promise.resolve({ productId: "INVALID_ID", locale: "en-us" }),
      searchParams: Promise.resolve({}),
    });

    render(Page);

    await waitFor(() => {
      expect(screen.getByText("Product not found")).toBeInTheDocument();
    });
  });

  it("renders product data correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProductData),
    });

    const Page = await ProductPage({
      params: Promise.resolve({ productId: "BOOMSTER_GO", locale: "en-us" }),
      searchParams: Promise.resolve({ variant: "001" }),
    });

    render(Page);

    await waitFor(() => {
      expect(screen.getByText("BOOMSTER Go")).toBeInTheDocument();
      expect(screen.getByText("125,50 €")).toBeInTheDocument();
    });
  });

  it("updates URL when selecting variant", async () => {
    const Page = await ProductPage({
      params: Promise.resolve({ productId: "BOOMSTER_GO", locale: "en-us" }),
      searchParams: Promise.resolve({ variant: "001" }),
    });
    render(Page);

    fireEvent.click(screen.getByRole("button", { name: /Sand White/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        "/en-us/product/BOOMSTER_GO?variant=002",
        { scroll: false }
      );
    });
  });
});
