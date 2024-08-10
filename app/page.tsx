'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"

export default function Home() {

  const [digimon, setDigimon] = useState([]);
  const [digimonCopy, setDigimonCopy] = useState([]);

  useEffect(() => {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
      .then((res) => res.json())
      .then((data) => {
        setDigimon(data);
        setDigimonCopy(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event:any) => {
    console.log({value: event.target.value});
    if(event.target.value === ""){
      setDigimonCopy(digimon);
    } else{
      const filteredData = digimon.filter((item:any)=>{
        return item.name.toLowerCase().includes(event.target.value.toLowerCase())
      });
      console.log({filtered: filteredData});
      setDigimonCopy(filteredData);
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      {digimonCopy.length ? 
      <>
            <div className="w-full max-w-xs">
            <Input type="text" placeholder="Search here..." onChange={handleChange} />
            </div>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {digimonCopy.map((item: any, index) => {
                  return (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                            <div className="flex flex-col  items-center justify-center h-64 w-96">
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
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </>
      : <div className="text-white">Loading...</div>
      }
    </main>
  );
}
