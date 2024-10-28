import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { petShopById } from '../../features/shop/ShopSlice';


const ShopPetDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {selectedPetShop} = useSelector((state)=>state.petShop)

    useEffect(()=>{
        if(id){
            dispatch(petShopById(id));
        }
    },[dispatch,id])

  return (
    <div>ShopPetDetails</div>   
  )
}

export default ShopPetDetails