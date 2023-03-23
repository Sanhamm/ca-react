import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import "./styles/style.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/Product/:id' element={<ProductsPage />} />
        <Route path='/Cart' element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
