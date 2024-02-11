import { useState } from "react"

export default function InputForm({handleAddToCartBtn, item}){
    let [itemAmount, setItemAmount] = useState(1)
    return(
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
    )
}