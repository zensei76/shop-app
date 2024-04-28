import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from './../redux/actions/productActions';

function ProductListing(props) {
  const data = useSelector((state) => state.allProducts);
  const dispatch = useDispatch()


  // const loadProducts = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   // console.log(response);
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // loadProducts();
    dispatch(fetchProducts());
  }, []);
  console.log(data);

  return (
    <div className='ui grid container'>
      {/* <h3>Product Listing</h3> */}
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
