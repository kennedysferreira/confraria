export function MainTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-16">
      <h1 className="text-7xl font-semibold">{title}</h1>
      <p className="text-2xl">Unir, fortalecer na fé e compartilhar Cristo.</p>
    </div>
  );
}
