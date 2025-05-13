import Link from "next/link";
import Heading from "@/components/ui/Heading";

const productVariants = [
  { name: "Night Black", variant: "001" },
  { name: "Sand White", variant: "002" },
  { name: "Space Blue", variant: "003" },
  { name: "Coral Red", variant: "005" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <Heading className="font-bold text-center mb-1">BOOMSTER Go Variants</Heading>
      <ul className="w-full max-w-md bg-white rounded-lg shadow p-4 space-y-2">
        {productVariants.map(({ name, variant }) => (
          <li key={variant}>
            <Link
              href={`/product/BOOMSTER_GO?variant=${variant}`}
              className="block px-4 py-3 rounded hover:bg-green-100 text-gray-800 font-medium transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
