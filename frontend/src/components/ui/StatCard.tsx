import Card from './Card';

type StatCardProps = {
  number: string;
  label: string;
  description: string;
};

export default function StatCard({ number, label, description }: StatCardProps) {
  return (
    <Card
      variant="dark"
      interactive
      className="border-t-2 border-t-brand-yellow p-6"
    >
      <p className="font-heading text-h1 tabular-nums tracking-[-0.01em] text-brand-yellow">
        {number}
      </p>
      <h3 className="mt-5 text-h3 text-white">
        {label}
      </h3>
      <p className="mt-4 text-body-sm text-white/66">{description}</p>
    </Card>
  );
}
