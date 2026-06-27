type ContentHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ContentHero({
  eyebrow,
  title,
  description,
}: ContentHeroProps) {
  return (
    <header className="bg-[#1B263B] px-4 pb-16 pt-36 text-white">
      <div className="mx-auto max-w-7xl">
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
