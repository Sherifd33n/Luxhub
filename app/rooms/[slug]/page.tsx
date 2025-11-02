"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { DropDown } from "@/components/drop-down";
import { Baby, BedDouble, CircleCheck, CircleUser, CheckCircle2 } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function RoomPage({ params }: { params: { slug: string } }) {

    const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adult, setAdult] = useState<string | null>(null);
  const [child, setChild] = useState<string | null>(null);
  const [roomType, setRoomType] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const room = rooms.find((r) => r.slug === params.slug);
  const router = useRouter();
  if (!room) return notFound();


  const allSelected = checkIn && checkOut && adult && child && roomType;

  const handleBookNow = () => {
    if (!allSelected) return;

    const bookedRooms = JSON.parse(localStorage.getItem("bookedRooms") || "[]");
    bookedRooms.push({
      title: room.title,
      checkIn,
      checkOut,
      adult,
      child,
      roomType,
      price: room.price,
    });
    localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms));

    // Show popup modal
    setShowModal(true);
  };

  const handleGoToBookings = () => {
    setShowModal(false);
    router.push("/booked-rooms");
  };

  return (
    <>
      <Container className="p-10 pt-[100px] gap-[10px] flex flex-col lg:flex-row">
        {/* Room Details Section */}
        <div>
          <img
            src={room.img}
            alt={room.title}
            className="mt-6 rounded-lg w-full object-cover lg:w-[450px] lg:h-[420px]"
          />
          <div className="mt-[40px]">
            <h1 className="text-2xl font-bold">{room.title}</h1>
            <p className="text-lg font-semibold text-gray-700">{room.price}</p>
            <p className="mt-3 text-gray-600">{room.description}</p>
          </div>

          <div>
            <p className="text-2xl font-bold mt-3">Room Feature(s)</p>
            <ul className="flex flex-wrap gap-[25px] mt-[15px]">
              {room.features.map((feature, i) => (
                <li
                  key={i}
                  className="list-none border py-[7px] rounded-[3px] px-[20px]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Form Section */}
        <div>
          <div className="bg-blue-50 rounded-[10px] md:w-[500px] mx-auto p-[30px] w-full mt-[20px] text-center lg:text-left">
            <p className="text-[14px] text-button_brown font-semibold">
              Book A Room
            </p>
            <p className="text-3xl md:text-4xl font-semibold text-base my-2">
              Book A Room
            </p>

            <div className="space-y-4">
              {/* Date Selection */}
              <div className="flex flex-col md:flex-row gap-[10px] items-center justify-between">
                <div>
                  <p className="flex items-center gap-1.5 text-[12px]">
                    <CircleCheck size={14} /> Check In Date
                  </p>
                  <div className="mt-1.5 md:mt-2.5">
                    <DatePicker onSelectDate={setCheckIn} />
                  </div>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-[12px]">
                    <CircleCheck size={14} /> Check Out Date
                  </p>
                  <div className="mt-1.5 md:mt-2.5">
                    <DatePicker onSelectDate={setCheckOut} />
                  </div>
                </div>
              </div>

              {/* Adult Dropdown */}
              <div className="flex justify-center">
                <div>
                  <p className="flex items-center gap-1.5 text-[12px] mb-2.5">
                    <CircleUser size={14} /> Adults
                  </p>
                  <DropDown
                    options={["Man", "Woman"]}
                    placeholder="Select Adult"
                    onSelect={setAdult}
                    buttonClassName="w-[300px] md:w-[350px]"
                  />
                </div>
              </div>

              {/* Child and Room Type Dropdown */}
              <div className="flex flex-col md:flex-row gap-[10px] items-center justify-between">
                <div>
                  <p className="flex items-center gap-1.5 text-[12px] mb-2.5">
                    <Baby size={14} /> Child
                  </p>
                  <DropDown
                    options={["Boy", "Girl"]}
                    placeholder="Select Child"
                    onSelect={setChild}
                    buttonClassName="w-[300px] md:w-[200px]"
                  />
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-[12px] mb-2.5">
                    <BedDouble size={14} /> Rooms
                  </p>
                  <DropDown
                    options={["Single Room", "Double Room", "Suite"]}
                    placeholder="Select Room Type"
                    onSelect={setRoomType}
                    buttonClassName="w-[300px] md:w-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-[30px] flex w-full justify-center">
              <Button
                onClick={handleBookNow}
                size="lg"
                disabled={!allSelected}
                className={`w-[300px] md:w-[200px] text-white ${
                  allSelected
                    ? "bg-button_brown hover:bg-button_brown/90"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                BOOK TABLE NOW
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Confirmation Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center justify-center space-y-2">
              <CheckCircle2 size={48} className="text-green-500" />
              <span className="text-2xl font-semibold">Booking Confirmed!</span>
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 mt-2">
            Your room has been successfully booked. You can view all your booked rooms.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleGoToBookings}
              className="bg-button_brown text-white px-6"
            >
              Go to My Bookings
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
