import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

function Products() {
  const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get("http://localhost:3001/api/products");
        setProducts([...data]);
        console.log(data);
      }
      fetchProducts()
    }, [])

    const addToCartHandler = (options) => {
      dispatch({ type: "addToCart", payload: options });
      dispatch({ type: "calculatePrice" });
      toast.success("Added To Cart");
    };
    
  return (
    <Container>
        {
            products.map((item) => {
                return <ItemCard key={item._id} 
                title={item.title}
                brand={item.brand}
                price={item.price}
                description={item.description}
                image={item.image}
                handler={addToCartHandler}
                id={item._id}
                
                
                />
            })
        }
        
    </Container>
  )
}

export default Products

const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 0.2rem;
padding: 5rem 0;
justify-content: center;
align-items: center;

`