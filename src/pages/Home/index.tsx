import Banner from "../../components/Banner";
import "../../assets/styles/global.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
