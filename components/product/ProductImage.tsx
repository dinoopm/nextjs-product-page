const baseImageURL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

export default function ProductImage({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-full aspect-[4/3] bg-gray-100 rounded flex items-center justify-center overflow-hidden">
        <picture>
          <source
            media="(max-width: 479px)"
            srcSet={`${baseImageURL}/c_lfill,f_auto,q_auto,w_460/${imageUrl}`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${baseImageURL}/c_lfill,f_auto,q_auto,w_640/${imageUrl}`}
          />
          <img
            className="w-full h-full object-contain"
            src={`${baseImageURL}/c_lfill,f_auto,q_auto,w_800/${imageUrl}`}
            alt={alt}
            width="800"
            height="600"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
