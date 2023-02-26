import React from 'react'

function ItemCard({ name, price, inventory, img, id, addItemsToArray }) {
  

  function handleOutOfStock() {
    if(inventory > 0) {
        return "Order"
    } else {
        return "Sold Out"
    }
  }

  return (
    <div className="itemCardsContainer">
       <img src={img} style={{width: "150px", height: "150px"}} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <button onClick={() => addItemsToArray(name, price, id)} >{handleOutOfStock()}</button>
    </div>
  )
}

export default ItemCard