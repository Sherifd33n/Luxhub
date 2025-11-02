"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  interface BookedRoom {
  id: number;
  title: string;
  price: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  child: string;
  roomType: string;
}

  useEffect(() => {

    const rooms = JSON.parse(localStorage.getItem("bookedRooms") || "[]");
     const total = rooms.reduce((sum: number, r: BookedRoom) => {
      const numeric = parseFloat(r.price.replace(/[^0-9.-]+/g, ""));
      return sum + (isNaN(numeric) ? 0 : numeric);
    }, 0);
    setAmount(total);
  }, []);

const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!cardName || !cardNumber || !expiry || !cvv) {
    toast.error("Please fill all payment fields.");
    return;
  }

  // Simulate payment
  toast.success("Payment successful!");

  // Save payment status
  localStorage.setItem("paymentStatus", "paid");

  // 🧹 Clear booked rooms after payment success
  localStorage.removeItem("bookedRooms");

  // Optional: You can also clear other temporary data if needed
  // localStorage.removeItem("selectedRoom");

  setTimeout(() => router.push("/success"), 1500);
};

  return (
    <div className="min-h-screen pt-[100px] flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handlePayment}
        className="bg-white shadow-lg rounded-lg p-8 w-[90%] md:w-[400px]"
      >
        <h1 className="text-2xl font-bold mb-5 text-center">Payment Details</h1>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Cardholder Name</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={16}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium">Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                className="w-full border rounded-md p-2 mt-1"
                placeholder="123"
              />
            </div>
          </div>

          <p className="text-lg font-semibold text-center mt-4">
            Total: <span className="text-button_brown">${amount}</span>
          </p>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-6 bg-button_brown text-white"
          >
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
}
