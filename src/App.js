import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Specials from "./components/Specials";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
