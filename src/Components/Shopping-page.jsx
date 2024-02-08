import { useEffect, useState } from "react";
import ItemCard from "./Item-Card";
import './Shopping-page.css'

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

    async function removeImageBackground(image) {
      const backgroundColor = { red: 255, green: 255, blue: 255 };
      const threshold = 10;
    
      const imageElement = new Image();
      imageElement.src = image;
      await new Promise(function(resolve) { imageElement.addEventListener('load', resolve); });
    
      var canvas = document.createElement('canvas');
      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;
    
      var ctx = canvas.getContext('2d');
      ctx.drawImage(imageElement, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imageData.data.length; i += 4) {
        const red = imageData.data[i];
        const green = imageData.data[i + 1];
        const blue = imageData.data[i + 2];
        if (Math.abs(red - backgroundColor.red) < threshold &&
          Math.abs(green - backgroundColor.green) < threshold &&
          Math.abs(blue - backgroundColor.blue) < threshold) {
          imageData.data[i + 3] = 0;
        }
      }
    
      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL(`image/png`);
    }

    
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
      <div>
        <h1>ITEMS</h1>
        {loading && <div>Loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <div className="shopping-section">
          {data && data.map((item, index) =>{
            return (
            //TODO: Figure out why the ItemCard Component doesn't render anything. Think it has to do with react router.
            <div className="item-card">
              <img className="item-img" src={item.image} alt="" />
              <h1 className="item-title">{item.title}</h1>
              <h2 className="item-price">${item.price}</h2>
              {/* <h3 className="item-category">{item.category}</h3> */}
              {/* <p>{item.description}</p> */}
            </div>
            // <ItemCard {...item} />
            )
          })}
        </div>
      </div>
    );
  }