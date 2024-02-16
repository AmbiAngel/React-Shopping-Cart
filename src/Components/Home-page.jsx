import {Link} from "react-router-dom"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Home-page.css'
import ItemCard from './Item-Card';


export default function HomePage({data, loading, error}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  console.log(data);
    return (
      <>
      <div className="home-info margin-top-navbar">
        <h1 className="home-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quaerat.</h1>
        <Link className="home-link" to={"/shopping"}>Shop Now</Link>
      </div>
      <Carousel responsive={responsive} className='carousel'>
        {loading && <div className="shopping-state-info">Loading...</div>}
        {error && (
          <div className="shopping-state-info">{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && data.map((item) =>{
          return(
            // <ItemCard {...item} >
              
            // </ItemCard>
            <img 
            src={item.image} 
            alt=""
            style={{maxWidth: "240px",}}
            />
          )
        })}
      </Carousel>
      
      </>
    );
  }