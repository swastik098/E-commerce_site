import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Funstore is an exciting online shopping destination that offers a wide
          range of products to suit every taste and budget. From trendy fashion
          items and accessories to the latest gadgets and electronics, Funstore
          has something for everyone. With a user-friendly interface and easy
          navigation, shopping on Funstore is a breeze. Customers can enjoy a
          hassle-free shopping experience, secure payment options, and fast
          delivery right to their doorstep. So why wait? Visit Funstore today
          and discover the fun of shopping online!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
