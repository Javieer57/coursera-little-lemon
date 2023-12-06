import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Specials from "./components/Specials";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Specials />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
