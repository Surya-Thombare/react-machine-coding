"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleChange = () => {
      if (document.visibilityState !== "visible") {
        setCount((c) => c + 1);
      }
    };

    document.addEventListener("visibilitychange", handleChange);

    return () => {
      document.removeEventListener("visibilitychange", handleChange);
    };
  }, []);

  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <p>
      You've tabbed away <strong>{count}</strong> time{count !== 1 && "s"}
    </p>
  );
};

export default Page;
