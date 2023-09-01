import { Token } from "graphql";
import React from "react";
import "../CSS/sell.css";

export default function Sell() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [AddItemData, setAddItemData] = React.useState({
    ProductName: "",
    description: "",
    productImage: [],
    price: "",
  });
  function closeModal() {
    setIsOpen(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}sell`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(Token)}`,
      },
      body: JSON.stringify(AddItemData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Item Added!");
          closeModal();
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setAddItemData({ ...AddItemData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="page-header">
        Sell Your Own Antiques or Strange Trinkets!
      </h1>
      <div className="Add-Item-Form">
        <input
          className="form-boxes"
          type="Item-name"
          placeholder="Item Name or Title"
        ></input>
        <input
          className="form-boxes"
          type="Item-des"
          placeholder="Item Description"
        ></input>
        <input
          className="form-boxes"
          type="Item-img"
          placeholder="Item Images"
        ></input>
        <input
          className="form-boxes"
          type="Item-price"
          placeholder="Item Price"
        ></input>
        <p type="button" className="pointer" onClick={openModal}>
          Add Item!
        </p>
      </div>
    </>
  );
}
