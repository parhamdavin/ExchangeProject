import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Table />
        {/* Other content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
