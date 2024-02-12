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
            //TODO: Figure out why the ItemCard Component doesn't render anything. Think it has to do with react router.
            // <div className="item-card" key={item.id}>
            //   <img className="item-img" src={item.image} alt="" />
            //   <h1 className="item-title">{item.title}</h1>
            //   <h2 className="item-price">${item.price}</h2>
            //   {/* <h3 className="item-category">{item.category}</h3> */}
            //   {/* <p>{item.description}</p> */}
            //   <form action="">
            //     <input type="number" />
            //     <button type="submit" onClick={
            //       (e) =>{
            //         e.preventDefault()
            //         handleAddToCartBtn(item)
            //       }
            //       }>Add</button>
            //   </form>
            // </div>
            <ItemCard {...item} >
              <InputForm item={item} handleAddToCartBtn={handleAddToCartBtn}/>
            </ItemCard>
            )
          })}
        </div>
      </div>
    );
  }