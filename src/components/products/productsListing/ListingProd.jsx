import React from 'react'
import { Link } from 'react-router-dom';
import Prosent from '../../../utils/prosent';
import Button from '../../Button';
import { CardStyle, Img, ProsentOff } from './style';
import "../products.modules.css";
import { NewPrice } from '../../singelProduct/style';



const ListingProd = ({product}) => {
    const prosent = Prosent(product.price, product.discountedPrice);

  return (
        <CardStyle cover={<Img alt='example' src={product.imageUrl} />}>
          {prosent.prosent === 0 ? (
            ""
          ) : (
            <ProsentOff>-{prosent.prosent}%</ProsentOff>
          )}
          <h1 >{product.title}</h1>
          <p >{product.description}</p>
          {product.price === product.discountedPrice ? (
            <h3>{product.discountedPrice},-</h3>
          ) : (
            <>
              <NewPrice>{product.discountedPrice},-</NewPrice>
              <p>Full price: {product.price},-</p>
            </>
          )}
          <Link to={`/Product/${product.id}`}>
            <Button children='Show More'></Button>
          </Link>
        </CardStyle>

  )
}

export default ListingProd
