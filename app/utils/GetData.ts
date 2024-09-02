"use client";

import { DataTablesType } from "../types/DataTableTypes";

async function GetData() {
  const response = await fetch("https://b.wallet.ir/coinlist/list");
  const result = await response.json();
  
  // اگر نتیجه یک شیء است و آرایه داده‌ها در `items` قرار دارد:
  const data: DataTablesType[] = result.items; // این خط را با توجه به فرمت واقعی API تغییر دهید.
  
  return data
}
export default GetData;
