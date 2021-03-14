import { Button } from "semantic-ui-react";

function Item({item}){
    const { image_link, name, price, description } = item;

    return(
        <>
        <div className="item-info">
            <div className="flex-center">
                <img src={image_link} alt={name}/>
                <ul>   
                    <li className="prod-name">{name}</li>
                    <li className="prod-price">${price}</li>
                    <li><Button color="orange">구매하기</Button></li>
                </ul>
            </div>
            <div className="prod-desc">
                <p>{description}</p>
            </div>
        </div>
        </>
    )
}

export default Item;