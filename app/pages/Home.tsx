import { useQuery } from "react-query";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Table from "../components/Table";
import { DataTablesType } from "../types/DataTableTypes";
import CryptoDiscription from "../components/CryptoDiscription";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <div className="flex-grow">
        <Table />
        <div className="mt-12">
          <CryptoDiscription />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
