"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { DataTablesType } from "@/app/types/DataTableTypes";
import Discussion from "@/app/components/Discussion";

const TradePage = () => {
  const [item, setItem] = useState<DataTablesType | null>(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Discussion props={item}/>
    </>
  );
};

export default TradePage;
