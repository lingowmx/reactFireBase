import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { CartContext } from "./context/cartContext";
import { useState } from "react";

// import { ItemDetail } from "./components/ItemDetail";

function App() {
  const [carrito, setCarrito] = useState([])

  return (
    <main className="bg-blue-200 w-screen h-screen flex flex-col">
      <CartContext.Provider value={{carrito, setCarrito}}>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/inicio" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </main>
  );
}

export default App;
