import { useQuery } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import { DataTablesType } from "../types/DataTableTypes";
import CryptoDiscription from "../components/CryptoDiscription";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Table />
        <div className="mt-12">
          <CryptoDiscription />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
