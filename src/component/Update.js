import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const params = useParams();
    const navigate=useNavigate();
    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:8000/delete/${params.id}`)
        result = await result.json()
        setProductName(result.productName)
        setProductPrice(result.productPrice)
        setProductCategory(result.productCategory)
        setProductCompany(result.productCompany)
        console.log(result.productCategory);
    }

    const updatedata = async (id) => {
        let newdata= await fetch(`http://localhost:8000/Update/${params.id}`,
            {
                method:"put",
                body: JSON.stringify({ productName,productPrice,productCategory,productCompany }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        newdata=await newdata.json();
        console.log(newdata);
        if(newdata.acknowledged=true){
            alert("Porduct Updated")
            navigate("/")
        }
    }
    return (
        <div className="add-product">
            <h1>Update product page </h1>
            <input className="inputbox" type="text" placeholder="Enter product name"
                onChange={(e) => { setProductName(e.target.value) }} value={productName} />

            <input className="inputbox" type="text" placeholder="Enter product price"
                onChange={(e) => { setProductPrice(e.target.value) }} value={productPrice} />

            <input className="inputbox" type="text" placeholder="Enter product catagory"
                onChange={(e) => { setProductCategory(e.target.value) }} value={productCategory} />

            <input className="inputbox" type="text" placeholder="Enter product company"
                onChange={(e) => { setProductCompany(e.target.value) }} value={productCompany} />

            <button className="Update-product-btn" onClick={updatedata} >Update Product</button>
        </div>
    )
}

export default UpdateProduct