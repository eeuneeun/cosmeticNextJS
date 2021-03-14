import React from 'react'
import Link from 'next/Link'
import { Grid, Image } from 'semantic-ui-react'
import styles from './ItemList.module.css';

export default function ItemList({list}){
    return (
        <div>
            <Grid columns='three' divided>
                <Grid.Row>
                    {list.map(item => (
                    <Grid.Column key={item.id}>
                        <Link href={`/view/${item.id}`}>
                            <a>
                                <h6 className={styles.item_name}>{item.name}</h6>
                                <ul>
                                    <li className="text-center">
                                        <span  className={styles.item_type}>
                                            {item.product_type}
                                        </span>
                                        <span className={styles.item_price}>
                                            ${item.price}
                                        </span>
                                    </li>
                                    <li className={styles.item_rate}>
                                        {item.rating}
                                    </li>
                                    <li>
                                        <img src={item.image_link} alt={item.name} className={styles.item_img}/>
                                    </li>
                                </ul>
                            </a>
                        </Link>
                    </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div> 
    ) 
}