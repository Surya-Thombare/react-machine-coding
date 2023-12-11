"use client";
import React, { useState } from "react";
import explorer from "@/data/folderData";
import Folder from "@/components/folder";

const Page = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
};

export default Page;
