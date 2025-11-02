"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function BookedRoomsPage() {
  interface BookedRoom {
    id: number;
    title: string;
    price: string;
    checkIn: Date;
    checkOut: Date;
    adults: string;
    child: string;
    roomType: string;
  }

  const [bookedRooms, setBookedRooms] = useState<BookedRoom[]>([]);
  const router = useRouter();

  useEffect(() => {
    const rooms = JSON.parse(localStorage.getItem("bookedRooms") || "[]");
    setBookedRooms(rooms);
  }, []);

  if (bookedRooms.length === 0) {
    return (
      <p className="p-10 text-center pt-[200px]">No rooms booked yet.</p>
    );
  }

  return (
    <div className="p-10 pt-[100px]">
      <h1 className="text-3xl font-bold mb-5">Your Booked Rooms</h1>
      <ul className="space-y-4">
        {bookedRooms.map((r, i) => (
          <li
            key={i}
            className="border p-4 rounded-lg flex flex-col gap-2 bg-blue-50">
            <p className="font-semibold">{r.title}</p>
            <p>Room Type: {r.roomType}</p>
            <p>Adult: {r.adults}</p>
            <p>Child: {r.child}</p>
            <p>
              Check-In: {new Date(r.checkIn).toDateString()} | Check-Out:{" "}
              {new Date(r.checkOut).toDateString()}
            </p>
            <p className="font-semibold text-button_brown">{r.price}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          className="bg-button_brown text-white"
          onClick={() => router.push("/payment")}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}
