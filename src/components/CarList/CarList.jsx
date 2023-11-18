import React, { useState, useMemo, useEffect } from "react";
import s from "./CarList.module.css";

const CarList = ({ cars }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredCars = useMemo(() => {
    if (searchInput.trim() === "") {
      return cars;
    } else {
      return cars.filter((car) =>
        car.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }, [cars, searchInput]);

  useEffect(() => {
    const goBackButton = document.getElementById("goBackButton");

    const handleClick = () => {
      window.location.href = "https://nenorvalls-portfolio.netlify.app/";
    };

    if (goBackButton) {
      goBackButton.addEventListener("click", handleClick);

      return () => {
        goBackButton.removeEventListener("click", handleClick);
      };
    }
  }, []); 

  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by name"
      />
      <ul className={s.list}>
        {filteredCars.map(({ id, image, name }) => (
          <li key={id} className={s.item}>
            <img srcSet={image} alt={name} width={380} className={s.image} />
            <p className={s.name}>{name}</p>
          </li>
        ))}
      </ul>
      <button id="goBackButton" className={s.button}>
        Go back to portfolio!
      </button>
    </div>
  );
};

export default CarList;
