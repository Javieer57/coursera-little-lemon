import "./Specials.css";
import MealCard from "./MealCard";
import Meals from "../mock/meals.json";

const Specials = () => {
  return (
    <section className="section-specials">
      <div className="section__header">
        <h2>This week specials!</h2>
        <a href="" className="btn btn-primary">
          Online Menu
        </a>
      </div>

      {Meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default Specials;
