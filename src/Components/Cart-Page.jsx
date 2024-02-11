import ItemCard from "./Item-Card"
import './Cart-Page.css'

console.log('cartItems');
export default function CartPage({cartItems, setCartItems}){
    function handleClickRemoveItemFromCart(index){
        let newList = [...cartItems]
        newList.splice(index, 1)
        setCartItems(newList)
    }

    return(
        <div className="cart-section">
            <div className="cart-info-container">

            </div>
            <div className="cart-items-container">
                {cartItems.length > 0 
                ?
                cartItems.map((item,index)=>{
                    return(
                        <ItemCard {...item.itemObj}>
                            <>
                                <p>Quantity: {item.itemQuantity}</p>
                                <button onClick={(e)=>handleClickRemoveItemFromCart(index)} className="remove-item-btn">Remove from Cart</button>
                            </>
                        </ItemCard>
                    )
                }) 
                : 
                <h2>Cart Empty :(</h2>
            }
            </div>
        </div>

    )
}