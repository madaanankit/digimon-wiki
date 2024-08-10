import React from 'react'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"

const CardComponent = ({item}:any) => {
  return (
    <Card>
    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
      <div className="flex flex-col  items-center justify-center">
        <Image
          src={item.img}
          height={0}
          width={0}
          sizes="100vw"
          className="shadow rounded-lg overflow-hidden border flex-1 w-fit inline-block" alt="card-image" />
      </div>
      <span className="text-2xl font-semibold">{item.name}</span>
      <span className="text-xl font-semibold">{item.level}</span>
    </CardContent>
  </Card>
  )
}

export default CardComponent
