'use client'
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import CardComponent from "@/components/CardComponent";

const HomeComponent = () => {

  const [digimon, setDigimon] = useState([]);
  const [digimonCopy, setDigimonCopy] = useState([]);

  useEffect(() => {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
      .then((res) => res.json())
      .then((data) => {
        setDigimon(data);
        setDigimonCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event: any) => {
    if (event.target.value === "") {
      setDigimonCopy(digimon);
    } else {
      const filteredData = digimon.filter((item: any) => {
        return item.name.toLowerCase().includes(event.target.value.toLowerCase())
      });
      setDigimonCopy(filteredData);
    }

  }

  return (
    <div>
      {digimonCopy.length ?
        <>
          <div className="w-full max-w-xs">
            <Input type="text" placeholder="Search here..." onChange={handleChange} />
          </div>
          <Carousel className="w-full max-w-xs mt-10">
            <CarouselContent>
              {digimonCopy.map((item: any, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <CardComponent
                        item={item} />
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
    </div>
  )
}

export default HomeComponent
