export default function PaperCard({
  children,
  rotate = 0,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <div
      className="bg-stone-100 border border-stone-200 rounded-2xl p-8
                 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
