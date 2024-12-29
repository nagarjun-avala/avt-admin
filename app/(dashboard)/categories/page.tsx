"use client"

import React from 'react'
import CategoriesDataTable from './_components/categoriesDataTable'
import ComponentLoader from '@/components/global/ComponentLoader'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getAllCategories } from "@/redux/actions/categoriesAction"

const CategoriesPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth) || { token: '' }
    const categories = useSelector((state: RootState) => state.categories)

    React.useEffect(() => {
        if (auth.token)
            dispatch(getAllCategories({ token: auth.token }))
    }, [auth.token, dispatch])
    return (
        <>{categories.loading
            ? <ComponentLoader />
            : <CategoriesDataTable
                data={categories.data || []}
                search={'Categories'}
                searchKey={'name'}
            />}</>
    )
}

export default CategoriesPage