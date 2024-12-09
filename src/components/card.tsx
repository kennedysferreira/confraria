interface cardProps {
  title: string;
  subTitle: string;
  content: string;
}

const colors = [
  "bg-[#B7D0FF]",
  "bg-[#F7C7B4]",
  "bg-[#89D299]",
  "bg-[#9ABEB1]",
  "bg-[#CFA4D5]",
  "bg-[#90F9A3]",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function Card({ title, subTitle, content }: cardProps) {
  const bgColor = getRandomColor();
  return (
    <div>
      <div className={`p-10 text-neutral-900 ${bgColor} rounded min-w-[560px]`}>
        <h1>{title}</h1>
        <span>{subTitle}</span>
        <p>{content}</p>
      </div>
    </div>
  );
}
