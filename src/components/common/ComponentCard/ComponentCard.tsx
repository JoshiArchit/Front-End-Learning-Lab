type ComponentCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function ComponentCard({ title, children }: ComponentCardProps) {
  return (
    <div className="component-card p-4 flex grow flex-col items-center gap-2 border-solid border-gray-500 border-2 rounded-lg">
      <span className="component-name">{title}</span>
      {children}
    </div>
  );
}
