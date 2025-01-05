interface CardProps {
  title: string;
  data: string;
  location: string;
  content: string;
}

export function UpcommingEvents({title, data, location, content}: CardProps) {
  return (
    <>
      <div className="flex justify-between gap-20 py-10">
        <div className="flex flex-col justify-between flex-1">
          <h2 className="text-[40px] font-semibold">
            {title}
          </h2>
          <div className="flex gap-12 text-[22px]">
            <p>{data}, <span>{location}</span></p>
            <button className="underline">Inscreva-se</button>
          </div>
        </div>
        <p className="text-2xl flex-1">
          {content}
        </p>
      </div>
      <div className="h-px bg-white w-full" />
    </>
  );
}
