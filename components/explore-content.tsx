"use client";

import Image from "next/image";
import Link from "next/link";
import { explores } from "@/data/rooms";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const CardGrid = () => {
  return (
    <div className="mt-3 mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left mx-auto px-4 md:px-[100px] bg-[url('/assets/bg-1.png')] bg-left-top bg-[length:200px_200px] bg-no-repeat">
      {explores.map((explore, idx) => (
        <Card
          key={idx}
          className="relative rounded-[6px] overflow-hidden hover:scale-105 transition-all duration-300">
          <div
            className="absolute inset-0 bg-right-top bg-[length:100px_100px] bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${explore.bg})` }}
          />

          <div className="relative z-10">
            <CardContent>
              <div className="relative w-[50px] h-[50px] mb-4">
                <Image
                  src={explore.bg}
                  alt={explore.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardHeader className="pl-0">
                <CardTitle>{explore.title}</CardTitle>
              </CardHeader>
              <p className="text-sm text-muted-foreground truncate">
                {explore.text}
              </p>
            </CardContent>

            <CardFooter>
              <Link
                href={`/single-facility/${explore.slug}`}
                className="text-primary font-medium hover:underline mt-2">
                Learn more →
              </Link>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
