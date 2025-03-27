import  React, { useState } from "react";

export default function StuffForm({ onClick }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);

  const handleClick = (event) => {
    event.preventDefault()

    onClick({ name, price: parseFloat(price) })
  }




  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(event) => setName(event.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={price} onChange={(event) => setPrice(event.target.value)}/>

      <button onClick={handleClick}>Add Stuff</button>
    </form>
  );
}
