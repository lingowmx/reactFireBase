import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ItemDetail } from "./components/ItemDetail";

function App() {
  return (
    <main className="bg-blue-200 w-screen h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/inicio" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
