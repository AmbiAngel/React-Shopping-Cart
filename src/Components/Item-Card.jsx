import { useState } from "react"

export default function ItemCard({id, title, price, category, description, image, handleAddToCartBtn, children}){
    return(
        <div className="item-card" key={id}>
            <img className="item-img" src={image} alt="" />
            <h1 className="item-title">{title}</h1>
            <h2 className="item-price">${price}</h2>
            {children}
        </div>
    )

}