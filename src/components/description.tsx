interface Props {
  title: string
  description: JSX.Element
}

export function Description({ title, description }: Props) {
  return (
    <div className="flex gap-10">
            <h1 className="w-[510px] text-[68px] font-semibold leading-[68px] ">{title}</h1>
            <div className="text-[22px] flex-1">
              {description}
            </div>
          </div>
  )
}