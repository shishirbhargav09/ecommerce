import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get("http://localhost:3001/api/products");
        setProducts([...data]);
        console.log(data);
      }
      fetchProducts()
    }, [])
    
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
padding: 2rem 0;
justify-content: center;
align-items: center;

`