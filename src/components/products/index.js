import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { URL } from "../../utils/urls";
import { DivGrid, DivTitle, H1, SearchBar } from "./productsListing/style";
import "./products.modules.css";
import ListingProd from "./productsListing/ListingProd";

const ProductsListing = () => {
  const { data, isLoading, isError } = useApi(URL);
  const [products, setProducts] = useState(data);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputText.toLowerCase());
  });

  if (isLoading) {
    return "Loadin...";
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <>
      <DivTitle>
        <H1>Welcome to Shoppit</H1>
        <SearchBar
          placeholder='Search'
          enterButton
          onChange={(prod) => {
            setInputText(prod.target.value);
          }}
        />
      </DivTitle>
      <DivGrid>
        {" "}
        {filteredProducts
          ? filteredProducts.map((product, idx) => {
              return <ListingProd key={idx} product={product} />;
            })
          : "no data"}
      </DivGrid>
    </>
  );
};

export default ProductsListing;
