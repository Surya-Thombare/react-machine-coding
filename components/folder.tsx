import React from "react";
type Prop = {
  explorer: {
    id: string;
    name: string;
    isFolder: boolean;
    items: never[];
  };
};

const Folder = ({ explorer }: Prop) => {
  console.log(explorer);

  return (
    <div className="mt-5">
      <div>
        <span>📁 {explorer.name}</span>
      </div>
    </div>
  );
};

export default Folder;
