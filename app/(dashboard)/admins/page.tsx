"use client"

import React from 'react'
import AdminsDataTable from './_components/adminsDataTable'
import ComponentLoader from '@/components/global/ComponentLoader'

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { getAllAdmins } from "@/redux/actions/adminsAction"
import { Button } from '@/components/ui/button'
import CreateAdminDialog from './_components/CreateAdminDialog'
const AdminsPage = () => {


    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth) || { token: '' }
    const admins = useSelector((state: RootState) => state.admins)

    React.useEffect(() => {
        if (auth.token)
            dispatch(getAllAdmins({ token: auth.token }))
    }, [auth.token, dispatch])
    return (
        <>
            <CreateAdminDialog trigger={<Button>Add Admin</Button>} />

            {admins.loading
                ? <ComponentLoader />
                : <AdminsDataTable
                    data={admins.data || []}
                    search={'AdminAs'}
                    searchKey={'username'}
                />}
        </>
    )
}

export default AdminsPage