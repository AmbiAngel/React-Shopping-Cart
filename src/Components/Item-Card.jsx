import { useState } from "react"

export default function ItemCard({id, title, price, category, description, image, handleAddToCartBtn, item}){
    let [itemAmount, setItemAmount] = useState(1)
    return(
        <div className="item-card" key={id}>
            <img className="item-img" src={image} alt="" />
            <h1 className="item-title">{title}</h1>
            <h2 className="item-price">${price}</h2>
            {/* <h3 className="item-category">{item.category}</h3> */}
            {/* <p>{item.description}</p> */}
            <form action="">
                <input 
                type="number"
                value={itemAmount}
                onChange={(e)=>setItemAmount(e.target.value)}
                />
                <button type="submit" onClick={
                    (e) =>{
                    e.preventDefault()
                    handleAddToCartBtn(item, Number(itemAmount))
                    }
                    }>Add</button>
            </form>
        </div>

    )

}