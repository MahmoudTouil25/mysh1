type ContentHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ContentHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: ContentHeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-[#1B263B] px-4 pb-16 pt-36 text-white">
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            aria-hidden={imageAlt ? undefined : true}
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-20 bg-[#062D31]/65" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#062D31]/35 via-[#062D31]/45 to-[#062D31]/85" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4D03F]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
