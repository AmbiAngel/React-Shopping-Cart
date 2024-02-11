import ItemCard from "./Item-Card"
import './Cart-Page.css'

console.log('cartItems');
export default function CartPage({cartItems}){
    return(
        <div className="cart-section">
            <div className="cart-info-container">
                
            </div>
            <div className="cart-items-container">
                {cartItems && cartItems.map(item=>{
                    return(
                        <ItemCard {...item.itemObj}>
                            <p>Quantity: {item.itemQuantity}</p>
                        </ItemCard>
                    )
                })}
            </div>
        </div>

    )
}