// import { render } from "@testing-library/react";
import React from "react";
// import ReactDOM from "react-dom";// Before V18
import ReactDOM from "react-dom/client";
// pizzData
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Menu />
      <Footer />
    </React.StrictMode>
  );
}

// pizza Component
function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Margherita" />
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
    </div>
  );
}
// Header
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

// Menu
function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()} We are currently open!</footer>
  );
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React before V18
// React.render(<App/>)
