import React from 'react';
import {  Table } from 'react-bootstrap';

const Cart = ({ product, clearCart, increaseQuantity, decreaseQuantity, deleteProduct }) => { 

  console.log(product.length)

    const getTotal = () => {
      return product.reduce((sum, {price, quantity})=> 
      sum + price*quantity, 0).toFixed(2)
    }    

    if(product.length>0){
      return (    
        <div>
            <h2>This is my Cart component</h2>
            <Table striped bordered hover size="sm">
                     
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
          
                      <tbody>
           {
             product.map( (oneProduct, index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td >{oneProduct.name}</td>
                    <td className='d-flex justify-content-around'>
                      <button className='btn btn-secondary' onClick={()=>{decreaseQuantity(oneProduct)}}>-</button>
                      {oneProduct.quantity}
                      <button className='btn btn-secondary'  onClick={()=>{increaseQuantity(oneProduct)}}>+</button>
                    </td>
                    <td >{oneProduct.price}</td>
                    <td ><button className='btn btn-danger' onClick={()=>{deleteProduct(oneProduct)}}>Delete</button></td>
                </tr>
             ))   }
            
                <tr>
                  <td colSpan={3}>Bendra suma: { getTotal()}</td>
                  <td><button className='btn btn-success' >Pay</button></td>             
                  <td><button className='btn btn-danger' onClick={clearCart}>Reset</button></td>             
                </tr>
           
              </tbody>
             </Table>
           
        </div>
      ) 
    }
          else{
            return <div>Prekių krepšelis tuščias</div>
          }   
}

export default Cart;
