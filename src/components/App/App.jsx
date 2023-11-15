import CarList from "../CarList/CarList";
import cars from "../../data/car";
import css from "./App.module.css";

const App = () => (
  <div className={css.appContainer}>
    <CarList cars={cars} />
  </div>
);

export default App;
