"use client"

import React from 'react'
import RolesDataTable from './_components/rolesDataTable'
import ComponentLoader from '@/components/global/ComponentLoader'

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getAllRoles } from "@/redux/actions/rolesAction"
const RolesPage = () => {


    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth) || { token: '' }
    const roles = useSelector((state: RootState) => state.roles)

    React.useEffect(() => {
        if (auth.token)
            dispatch(getAllRoles({ token: auth.token }))
    }, [auth.token, dispatch])
    return (
        <>
            {roles.loading
                ? <ComponentLoader />
                : <RolesDataTable
                    data={roles.data || []}
                    search={'Roles'}
                    searchKey={'label'}
                />}
        </>
    )
}

export default RolesPage