import { DataTablesType } from '../types/DataTableTypes';

// در فایل fetchData
export const fetchData = async (): Promise<DataTablesType[]> => {
    const response = await fetch('https://b.wallet.ir/coinlist/list');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Log the data to inspect
    return data as DataTablesType[];
  };
  