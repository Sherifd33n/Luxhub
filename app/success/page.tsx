"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const paid = localStorage.getItem("paymentStatus");
    if (!paid) router.push("/booked");
  }, [router]);

  return (
    <div className="min-h-screen pt-[100px] flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white rounded-lg shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="mt-3 text-gray-700">
          Thank you for your booking. Your room has been confirmed.
        </p>
        <Button
          className="mt-6 bg-button_brown text-white"
          onClick={() => router.push("/")}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}
