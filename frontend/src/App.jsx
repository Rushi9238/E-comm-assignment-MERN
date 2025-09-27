import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";
// import ProductList from "./page/ProductList";
// import CartList from "./page/CartList";
function App() {
  const ProductList= lazy(()=>import('./page/ProductList'))
  const CartList = lazy(()=>import('./page/CartList'))
  return (
    <>
      <div className="app">
       <Suspense fallback={<Loading/>}>
         <Header/>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/cart" element={<CartList/>} />
        </Routes>
       </Suspense>
      </div>
    </>
  );
}

export default App;
