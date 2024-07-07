import React, { useState } from "react";


const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [error,setError]=useState(false)
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const addData = async () => {
        if (!productName || !productPrice || !productCategory || !productCompany) {
            setError(true);
            return false;
        }
        console.log(productName, " ", productPrice, " ", productCategory, " ", productCompany)
        let result= await fetch("http://localhost:8000/add-product",{
            method:"post",
            body:JSON.stringify({productName,productPrice,productCategory,productCompany,userId}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result=await result.json()
        alert("Product added succesfully")
    }
    return (
        <div className="add-product">
            <h1>Add product page </h1>
            <input className="inputbox" type="text" placeholder="Enter product name"
                onChange={(e) => { setProductName(e.target.value) }} value={productName} />
                {error && !productName && <span className="invalid-input">Enter valid name</span>}
            <input className="inputbox" type="text" placeholder="Enter product price"
                onChange={(e) => { setProductPrice(e.target.value) }} value={productPrice} />
                {error && !productPrice && <span className="invalid-input">Enter valid price</span>}
            <input className="inputbox" type="text" placeholder="Enter product catagory"
                onChange={(e) => { setProductCategory(e.target.value) }} value={productCategory} />
                {error && !productCategory && <span className="invalid-input">Enter valid Catagory</span>}
            <input className="inputbox" type="text" placeholder="Enter product company"
                onChange={(e) => { setProductCompany(e.target.value) }} value={productCompany} />
                {error && !productCompany && <span className="invalid-input">Enter valid company</span>}
            <button className="add-product-btn" onClick={addData} >Add Product</button>
        </div>
    )
}

export default AddProduct