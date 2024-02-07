export default function ItemCard({id, title, price, category, description, image}){
    <div className="item-card">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <img src={image} alt="" />
    </div>

}