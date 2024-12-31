import React from 'react'
import data from './data.json'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'

const ProductsPage = () => {
    // ! Make Changes to the table: Change the appearence table size
    return (
        <div>ProductsPage
            <DataTable data={data} columns={columns} />
        </div>
    )
}

export default ProductsPage