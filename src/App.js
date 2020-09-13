import React from "react";
import "./include/bootstrap";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Header title="Comparação dos Jogos de PS4" />

      <Main />

      <Footer title="Feito por Dama e Eduardo e Felipe" />
    </>
  );
}

export default App;
