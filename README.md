This project is a modern, internationalized e-commerce product page built with Next.js 15, leveraging the latest features of the framework for optimal performance, scalability, and maintainability.

## Getting Started

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

To run the test

```bash
npm run test
```


Open [http://localhost:3000] Choose a variant.
Or Open [http://localhost:3000/en/product/BOOMSTER_GO](http://localhost:3000/en-US/product/BOOMSTER_GO) with your browser to see the result.

### Project Setup And Dependencies
1. Uses `tailwind` for styling
2. Uses `typescript` for type checking
3. Uses `eslint` for linting
4. Uses `@testing-library/react` for unit/integration tests
5. uses `next-intl` for Internationalization

### Application Flow

1. User visits the homepage
2. User selects a product variant.
3. App navigates to the product page (URL: /[locale]/product/[productId]?variant=[variantId])
4. Server fetches product data and translations: Retrieves product details and localized content based on the selected locale and variant
5. Server renders the product page: Displays product image, name, price, and available variants
6. User interacts with the product page:
    - Can switch between variants without a full page reload
    - The app updates product info and URL accordingly
7. SEO and metadata are generated dynamically: Ensures optimal search engine visibility for each variant and locale

### Out of scope
1. e2e testing
2. a11y
3. Unit/Integration tests are not exhaustive of all possible cases

