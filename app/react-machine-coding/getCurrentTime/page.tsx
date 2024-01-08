"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [time, setTime] = useState<DateConstructor | any>(null);

  useEffect(() => {
    const TimerId = window.setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.clearInterval(TimerId);
    };
  }, []);

  if (time === null) return null;

  return (
    <section className="m-auto text-7xl  text-orange-300">
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}
