import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let product = await fetch("http://localhost:8000/products",{
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        product = await product.json();
        setProduct(product)
    }

    const Delete = async (id) => {
        let result = await fetch(`http://localhost:8000/delete/${id}`, {
            method: "Delete"
        })
        result = await result.json();
        console.log(result);
        if (result) {
            alert("Item deleted sucessfully")
            getProducts();
        }
    }
    const SearchHandler=async(e)=>{
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:8000/search/${key}`)
            result = await result.json();
            if (result) {
                setProduct(result)
            }
        }else{
            getProducts();
        }

    }

    return (
        <div className="product-list">
            <h3>products-List</h3>
            <input type="search" className="SearchBox" placeholder="Search product"
             onChange={SearchHandler} />
            <ul >

                <li><b>S.NO</b></li>
                <li><b>Product-name</b></li>
                <li><b>Product-price</b></li>
                <li><b>Product catagory</b></li>
                <li><b>Product company</b></li>
                <li><b>Operation</b></li>
            </ul>
            {
               product.length>0? product.map((item, index) =>
                    <ul key={item._id}>

                        <li>{index + 1}</li>
                        <li>{item.productName}</li>
                        <li>{item.productPrice}</li>
                        <li>{item.productCategory}</li>
                        <li>{item.productCompany}</li>
                        <li>
                            <button className="delete-btn" onClick={() => Delete(item._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <button className="update-btn">
                                <Link to={`/update/${item._id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </button>
                        </li>
                    </ul>
                ):<h1  >No result found</h1>
            }
        </div>
    )
}

export default Product;