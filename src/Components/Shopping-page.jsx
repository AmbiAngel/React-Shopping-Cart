import { useEffect, useState } from "react";
import ItemCard from "./Item-Card";

export default function ShoppingPage() {

    const mockItemList = [
        {
            id:1,
            title:'Gaming Keyboard',
            price:'30',
            category:'Gaming',
            description:'Keyboard for gamers',
            image:'...',
            rating:{rate: 3.9, count: 120}
        },
        {
            id:2,
            title:'Hair Brush',
            price:'10',
            category:'Hygiene',
            description:'Brush for hair',
            image:'...',
            rating:{rate: 3.9, count: 120}
        },
    ]

    let [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(actualData=>{
              setData(actualData)
              setError(null)
            })
            .catch((err) => {
              setError(err.message);
              setData(null);
            })
            .finally(() => {
              setLoading(false);
            })
    }, []);

    console.log(data)


    return (
      <div id="shopping-section">
        <h1>ITEMS</h1>
        {loading && <div>Loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && data.map((item, index) =>{
          console.log(item)
          return (
          //TODO: Figure out why the ItemCard Component doesn't render anything. Think it has to do with react router.
          <div className="item-card">
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <h3>{item.category}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt="" />
          </div>
          )
        })}
      </div>
    );
  }