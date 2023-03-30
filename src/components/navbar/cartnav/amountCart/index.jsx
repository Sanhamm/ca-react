import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase } from '../../../state/CartSlice'
import { AmountCounter, CounterDiv } from './style'



const AmountCart = ({products}) => {
    const dispatch = useDispatch()
    const handleIncrease = () => {
        dispatch(
          increase({
            id: products.id,
            price: products.price,
          })
        );
      };
      const handleDecrease = () => {
        dispatch(
          decrease({
            id: products.id,
            price: products.price,
          })
        );
      };
    
    
  return (
    <CounterDiv>
    <UpOutlined onClick={handleIncrease}/>
    <AmountCounter>{products.amount}</AmountCounter>
    <DownOutlined onClick={handleDecrease}/>
    </CounterDiv>
  )
}

export default AmountCart
