import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TableLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-10 mb-1 w-[180px]" />
      <Skeleton className="h-96" />
    </div>
  );
};

export default TableLoader;
