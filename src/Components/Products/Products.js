import React from 'react';
import './Products.css'

const Products = (props) => {
    const title = props.title;
    const productsData = props.productsData;

    return (
        <div className='bg-brand'>
            <div className="container py-3">
                <h2 className="card-heading">{title}</h2>
                <div className="d-flex flex-wrap breakfast-container py-3">

                    {
                        productsData.map(productsData=> <div key={productsData.id} className="col-lg-2 col-md-4 col-sm-6">
                            <img src={productsData.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{productsData.name}</h4>
                                <p className="card-price">৳{productsData.price}</p>
                                <button className='btn btn-danger ms-4 '>Add To Cart</button>
                            </div>
                   
                        </div>)
                    }

                    {/* <div className="col-lg-2 col-md-4 col-sm-6">
                                <img src={food1} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Smoky red rice bowl</h4>
                                <p className="card-price">৳199</p>
                                <button className='btn btn-danger ms-4 '>Add To Cart</button>
                            </div>
                           
                    </div> */}
                    {/* <div className="col-lg-2 col-md-4 col-sm-6 ">
                                <img src={food2} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Hot Wings Rice Bowl</h4>
                                <p className="card-price">৳199</p>  
                                <button className='btn btn-danger ms-4'>Add To Cart</button> 
                            </div>
                    
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                                <img src={food3} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Rice Box</h4>
                                <p className="card-price">৳299</p>
                                <button className='btn btn-danger ms-4 '>Add To Cart</button>   
                            </div>
                            
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6">
                                <img src={food4} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Classic Zinger</h4>
                                <p className="card-price">৳329</p> 
                                <button className='btn btn-danger ms-4'>Add To Cart</button> 
                            </div>
                           
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                                <img src={food5} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Tower Zinger</h4>
                                <p className="card-price">৳399</p>  
                                <button className='btn btn-danger ms-4'>Add To Cart</button> 
                            </div>
                         
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 ">
                                <img src={food6} alt="" /> 
                            <div className="card-body">
                                <h4 className="card-title">Super Charger Burger</h4>
                                <p className="card-price">৳299</p> 
                                <button className='btn btn-danger ms-4 '>Add To Cart</button> 
                            </div>
                           */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Products;