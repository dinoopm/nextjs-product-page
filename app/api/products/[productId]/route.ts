import { NextRequest, NextResponse } from 'next/server';
import { ProductVariant } from '@/types/product';

interface LocalizedProductData {
  product: Record<string, ProductVariant>;
  metaData: {
    title: string;
    description: string;
    productName: string;
  };
}

/*
  Please note:
  Given this hardcorded data to mimic the server side api implemenation.
  In my opinion, ideally this data should come from an api, based on product id and locale

*/

const productData: Record<
  string,
  Record<string, LocalizedProductData>
> = {
  "BOOMSTER_GO": {
    "en-us": {
      product: {
        '001': {
          productVariant: 'Night Black',
          productColour: '#333',
          productPrice: 12550,
          inStock: true,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-black-1300x1300x72.jpg',
        },
        '002': {
          productVariant: 'Sand White',
          productColour: '#d5ccb8',
          productPrice: 9900,
          inStock: false,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-sand-1300x1300x72.jpg',
        },
        '003': {
          productVariant: 'Space Blue',
          productColour: '#4b5c7d',
          productPrice: 11550,
          inStock: false,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-blue-1300x1300x72.jpg',
        },
        '005': {
          productVariant: 'Coral red',
          productColour: '#ff4040',
          productPrice: 11550,
          inStock: true,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-orange-1300x1300x72.jpg',
        },
      },
      metaData: {
        productName: 'BOOMSTER Go',
        title: 'Boomster go',
        description: 'Boomster go high-quality portable speaker',
      },
    },
    "de-de": {
      product: {
        '001': {
          productVariant: 'Nacht Schwarz',
          productColour: '#333',
          productPrice: 12550,
          inStock: true,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-black-1300x1300x72.jpg',
        },
        '002': {
          productVariant: 'Sand Weiß',
          productColour: '#d5ccb8',
          productPrice: 9900,
          inStock: false,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-sand-1300x1300x72.jpg',
        },
        '003': {
          productVariant: 'Weltraum Blau',
          productColour: '#4b5c7d',
          productPrice: 11550,
          inStock: false,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-blue-1300x1300x72.jpg',
        },
        '005': {
          productVariant: 'Korallenrot',
          productColour: '#ff4040',
          productPrice: 11550,
          inStock: true,
          imageUrl: '/v1/products/BOOMSTER_GO/boomster-go-main-orange-1300x1300x72.jpg',
        },
      },
      metaData: {
        productName: 'BOOMSTER Go',
        title: 'Boomster go',
        description: 'Boomster go tragbarer Lautsprecher von hoher Qualität',
      },
    },
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }>  }
) {
  const { productId } = await params;
  const locale = request.nextUrl.searchParams.get('locale') ?? 'en-us';

  const localizedMap = productData[productId];
  if (!localizedMap) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const localized = localizedMap[locale] ?? localizedMap['en-us'];

  return NextResponse.json({
    product: localized.product,
    metaData: localized.metaData,
  });
}
