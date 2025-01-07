import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SelectLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 mb-1 w-[80px]" />
      <Skeleton className="h-10" />
    </div>
  );
};

export default SelectLoader;
