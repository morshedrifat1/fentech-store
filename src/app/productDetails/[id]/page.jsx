"use client";
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);
  console.log(product);

  if (!product) return <p>Loading...</p>;
    return (
        <div className='flex justify-center md:h-screen items-center p-5'>
            <div className='md:max-w-250 bg-background shadow p-5 rounded-lg flex flex-col md:flex-row gap-5 items-stretch'>
                <div>
                  <img className='sm:max-w-100' src={product.productImg} alt="" />
                </div>
                <div className='bg-gray-50 p-5 flex flex-col justify-center rounded-lg'>
                  <p className='bg-black text-white text-base font-semibold px-2 rounded-full inline-block w-fit'>{product.productCategory}</p>
                  <h1 className='text-2xl font-bold mt-2 leading-9'>{product.productName}</h1>
                  <p className='text-base text-gray-700 mt-2 leading-6'>{product.productDescription}</p>
                  <h3 className='text-2xl font-bold mt-3'>৳ {product.productPrice} </h3>
                  <div>
                    <Button className='mt-4'>Add To Cart</Button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;