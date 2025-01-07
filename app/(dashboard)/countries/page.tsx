"use client"
import { Button } from '@/components/ui/button'
import { getAllCountries } from '@/redux/actions/countrieesAction'
import { AppDispatch, RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { ColumnDef } from '@tanstack/react-table'
import { Country } from '@/lib/types'
import TableLoader from '@/components/loaders/TableLoader';

const CountriesPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth) || { token: '' }
    const countries = useSelector((state: RootState) => state.countries)
    console.log(countries.loading)

    React.useEffect(() => {
        if (auth.token)
            dispatch(getAllCountries({ token: auth.token }))
    }, [auth.token, dispatch])

    return (
        <>
            <Button onClick={() => window.location.href = "countries/new"} className='mb-2'>Add Country</Button>
            {countries.loading || !Array.isArray(countries.data) || countries.data.length === 0
                ? <TableLoader />
                : (
                    <DataTable data={countries?.data || []} columns={columns as ColumnDef<void | Country, unknown>[]} />
                )}
        </>
    )
}

export default CountriesPage