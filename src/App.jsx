import { useEffect, useState } from "react";
import { Navbar, Hero, Categoryone, Categorytwo, Service, Redbanner, Greenbanner, News, Companies, Products, Footer, PopCartpage } from "./Components";
import Aos from "aos";

const App = () => {

  const [order, setOrder] = useState(false);

  const handleOrder = () => {
    setOrder(!order);
  }

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    })
    Aos.refresh();
  }, []);


  return (
    <>
      <div className="dark:bg-gray-900">
        <Navbar handleOrder={handleOrder} />
        <Hero handleOrder={handleOrder} />
        <Categoryone />
        <Categorytwo />
        <Service />
        <Redbanner />
        <Products />
        <Greenbanner />
        <News />
        <Companies />
        <Footer />
        <PopCartpage order={order} handleOrder={handleOrder} />
      </div>
    </>
  )
}

export default App;