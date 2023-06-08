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
  const [sortType, setSortType] = useState(""); // Legg til en state for sortering

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputText.toLowerCase());
  });

  // Sorterer produktene basert på valgt sorteringstype
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "low") {
      return a.discountedPrice - b.discountedPrice;
    } else if (sortType === "high") {
      return b.discountedPrice - a.discountedPrice;
    } else {
      return 0;
    }
  });

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  if (isLoading) {
    return "Loading...";
  }
  if (isError) {
    console.log(isError);
  }
  console.log(data);
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
        <div>
          <select value={sortType} onChange={handleSortChange} className='sort'>
            <option value=''>Sort By</option>
            <option value='low'>Low to High</option>
            <option value='high'>High to Low</option>
          </select>
        </div>
      </DivTitle>
      <DivGrid>
        {sortedProducts
          ? sortedProducts.map((product, idx) => {
              return <ListingProd key={idx} product={product} />;
            })
          : "No data"}
      </DivGrid>
    </>
  );
};

export default ProductsListing;
