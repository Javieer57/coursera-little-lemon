import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Specials />
      </main>
    </div>
  );
}

export default App;
