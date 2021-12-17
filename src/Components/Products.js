import react,{useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"
const Button = styled.button`
    width:200px;
    height:50px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    align-items: center;
    background-color: goldenrod;
    border-radius: 3rem;
    border-color: green;
    
`
const Container = styled.div`
    content: icon;
    color: red;
    background-color: skyblue;
    border: solid;
    display:grid;
    

`
const Image = styled.img`
    padding: 0.5rem;

`
const Wrapper = styled.section`
    margin-top: 0.1rem;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: max-content;
    grid-gap: 5px;
    size: inherit;
`
const Text = styled.span`
    font-size: 1rem;
    /* text-size-adjust:auto; */
    color: black;
    text-align-last: center;
`
const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: grid;
  text-align: center;
  /* justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12; */
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
        <Nav><h1>Electronic Shop</h1></Nav>
        <Wrapper>
        {products.map(pro=>{
            return(
                <Container key={pro.id}>
                    <Image  height="300px" width="400px" src = {`https://electronic-ecommerce.herokuapp.com/${pro.image}`}></Image>
                    <Text>Name : {pro.name}</Text>
                    <Text>Price : {pro.price}</Text>
                    <Text>Created Date : {pro.createDate}</Text>
                    <Text>Stock : {pro.stock}</Text>
                    <Button>Add To Cart</Button>
                </Container>
            
            )
        })}
        </Wrapper>
        </>
    )
}
export default Products