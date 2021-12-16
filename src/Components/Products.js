import react,{useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"
const Button = styled.button`
    width:200px;
    height:50px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
    background-color: yellow;
`
const Container = styled.div`
    width:320px;
    height:320px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    content: icon;
    color: skyblue;
    border: solid;
    display:grid;
    

`
const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;

`
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: max-content;
    grid-gap: 5px;
`
const Products = () => {
    const [products,Updateproducts] = useState([])
    useEffect(async ()=>{
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        console.log(res.data.data.product)
        Updateproducts(res.data.data.product)
    },[])
    return(
        <>
        Welcome To The Electroic Shop
        
        <Wrapper>
        {products.map(pro=>{
            return(
                <Container key={pro.id}>
                    <Image  height="300px" width="400px" src = {`https://electronic-ecommerce.herokuapp.com/${pro.image}`}></Image>
                    Name:{pro.name}
                    Price:{pro.price}
                    <Button>Add To Cart</Button>
                </Container>
            
            )
        })}
        </Wrapper>
        </>
    )
}
export default Products