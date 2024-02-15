import { useEffect, useState } from "react";
import ItemCard from "./Item-Card";
import './Shopping-page.css'
import InputForm from "./Input-Form";

export default function ShoppingPage({data, loading, error, setCartItems, cartItems}) {

    
    function handleAddToCartBtn(itemObj, quantity){
      let cartObj = {
        itemObj: itemObj,
        itemQuantity: quantity
      }
      let newArr = [...cartItems, cartObj]
      setCartItems(newArr)
    }

    return (
      <div className="shopping-container">
        <h1>ITEMS</h1>
        {loading && <div className="shopping-state-info">Loading...</div>}
        {error && (
          <div className="shopping-state-info">{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <div className="shopping-section">
          {data && data.map((item, index) =>{
            return (
            <ItemCard {...item} >
              <InputForm item={item} handleAddToCartBtn={handleAddToCartBtn}/>
            </ItemCard>
            )
          })}
        </div>
      </div>
    );
  }