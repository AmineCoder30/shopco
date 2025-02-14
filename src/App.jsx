import { Home, Cart, Categories, ProductDetails } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import "./App.css";

function App() {
  return (
    <main className="pt-16">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories/:category" element={<Categories />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
