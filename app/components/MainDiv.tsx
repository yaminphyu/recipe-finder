import React from 'react'

export default function MainDiv({
  children,
  customClass
}: Readonly<{
  children: React.ReactNode;
  customClass?: string
}>) {
  return (
    <div className={`bg-[#ededed] flex flex-col items-start lg:items-center justify-center w-full lg:w-[80vw] xl:w-[65vw] h-full gap-4 px-4 lg:px-0 ${customClass}`}>
      {children}
    </div>
  )
}
