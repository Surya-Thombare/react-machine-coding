import Progressbar from "@/components/Progressbar";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-[12px] ml-4 mt-5 w-4/5">
      <Progressbar value={undefined} />
      <Progressbar value={0} />
      <Progressbar value={25} />
      <Progressbar value={50} />
      <Progressbar value={75} />
      <Progressbar value={100} />
      <Progressbar value={2} />
      <Progressbar value={-10} />
      <Progressbar value={120} />
    </div>
  );
};

export default Page;
