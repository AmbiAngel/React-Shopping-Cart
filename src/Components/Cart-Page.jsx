import ItemCard from "./Item-Card"
import './Cart-Page.css'

console.log('cartItems');
export default function CartPage({cartItems, setCartItems}){
    function handleClickRemoveItemFromCart(index){
        let newList = [...cartItems]
        newList.splice(index, 1)
        setCartItems(newList)
    }

    function calcTotalPrice(){
        return(
            cartItems.reduce(
                (accumulator, currentValue)=> (currentValue.itemObj.price * currentValue.itemQuantity) + accumulator,
                0
            )
        )
    }

    function calcTotalNumberOfItems(){
        return(
            cartItems.reduce(
                (accumulator, currentValue)=> currentValue.itemQuantity + accumulator,
                0
            )
        )
    }

    function handleChangeItemQuantity(e,index){
        let newList = [...cartItems]
        newList[index].itemQuantity = Number(e.target.value)
        setCartItems(newList)
    }

    function handleCheckoutBtnClick(){
        alert('This is just a Demo!')
    }

    return(
        <div className="cart-section main-content">
            <div className="cart-info-container">
                <h2 className="total-price">${calcTotalPrice()}</h2>
                <h2 className="total-number-of-items">{calcTotalNumberOfItems()} Items</h2>
                <button onClick={handleCheckoutBtnClick} className="checkout-btn">Checkout</button>

            </div>
            <div className="cart-items-container">
                {cartItems.length > 0 
                ?
                cartItems.map((item,index)=>{
                    return(
                        <ItemCard {...item.itemObj}>
                            <>
                                <input 
                                type="number"
                                value={item.itemQuantity}
                                onChange={(e)=>handleChangeItemQuantity(e,index)}
                                min='1'
                                />
                                <p>Quantity: {item.itemQuantity}</p>
                                <button onClick={(e)=>handleClickRemoveItemFromCart(index)} className="remove-item-btn">Remove from Cart</button>
                            </>
                        </ItemCard>
                    )
                }) 
                : 
                <div className="cart-info-container">Cart Empty :(</div>
            }
            </div>
        </div>

    )
}