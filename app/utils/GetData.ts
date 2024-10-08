"use client";

import { DataTablesType } from "../types/DataTableTypes";

async function GetData() {
  const response = await fetch("https://b.wallet.ir/coinlist/list");
  const result = await response.json();
  const data: DataTablesType[] = result.items;
  
  return data
}
export default GetData;
