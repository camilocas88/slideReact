import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState/";

const App = () => {
  const InitialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
          {InitialState.mylist.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {InitialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {InitialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

//para pasar todos los elementos que contenga item lo destructuramos usando solo item
export default App;
