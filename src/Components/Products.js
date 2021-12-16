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
    width:500px;
    height:500px;
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
    width: 400px;
    height: 400px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;

`
const Wrapper = styled.section`
    background: yellowgreen;
    padding: 2rem;
    margin-right: 2rem;
    display: grid;
`
const Products = () => {
    const [products,Updateproducts] = useState([])
    useEffect(async ()=>{
        const res = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        console.log(res.data.data.product)
        Updateproducts(res.data.data.product)
    },[])
    return(
        <Wrapper>
        Hey You get The All Product Here From The server
        {products.map(pro=>{
            return(
                <Wrapper>
                <Container key={pro.id}>
                    <Image  height="300px" width="400px" src = {`https://electronic-ecommerce.herokuapp.com/${pro.image}`}></Image>
                    Name:{pro.name}
                    Price:{pro.price}
                    <Button>Add To Cart</Button>
                </Container>
                </Wrapper>
            )
        })}
        </Wrapper>
    )
}
export default Products