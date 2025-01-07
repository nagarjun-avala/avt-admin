"use client";

import React, { useEffect } from 'react'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getAllProducts } from '@/redux/actions/productsAction';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)
    const products = useSelector((state: RootState) => state.products)

    useEffect(() => {
        if (auth && auth.token && auth.token !== "")
            dispatch(getAllProducts({ token: auth.token }))
    }, [auth, dispatch])
    return (
        <>
            <Button onClick={() => window.location.href = "products/new"} className='mb-2'>Add Product</Button>
            {products.loading ? "Loading" : (
                <DataTable data={products?.data || []} columns={columns} />
            )}
        </>
    )
}

export default ProductsPage