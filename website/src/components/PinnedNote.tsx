type Props = {
  children: React.ReactNode;
  rotation?: number;
};

export default function PinnedNote({ children, rotation = -1 }: Props) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Pin */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
        <div className="w-3 h-3 rounded-full bg-stone-400 shadow-sm" />
      </div>

      {/* Note */}
      <div
        className="bg-stone-100 border border-stone-200 rounded-2xl px-10 py-12
                   shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {children}
      </div>
    </div>
  );
}
