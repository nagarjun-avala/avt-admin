"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Role } from "@/lib/types"

const data: Partial<Role>[] = [
    {
        "id": "134b6aa7-9531-432a-8fa5-7fb93ed830d1",
        "code": "5729",
        "label": "Chief Executive Officer",
        "short": "CEO",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:35.692Z",
        "updatedAt": "2024-12-23T07:25:35.692Z"
    },
    {
        "id": "9333e329-b998-4309-876f-f140f11cd032",
        "code": "8146",
        "label": "Chief Operating Officer",
        "short": "COO",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:35.843Z",
        "updatedAt": "2024-12-23T07:25:35.843Z"
    },
    {
        "id": "caf78717-fcd8-44fb-83fe-b8bb7fd8ad3f",
        "code": "4397",
        "label": "Chief Financial Officer",
        "short": "CFO",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:35.944Z",
        "updatedAt": "2024-12-23T07:25:35.944Z"
    },
    {
        "id": "e3a12c84-cc79-4df5-89dc-b1760c55818e",
        "code": "9632",
        "label": "Chief Technology Officer",
        "short": "CTO",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.020Z",
        "updatedAt": "2024-12-23T07:25:36.020Z"
    },
    {
        "id": "f5e22f8e-7550-4c8e-b269-eea5e091dffc",
        "code": "2784",
        "label": "Human Resources Manager",
        "short": "HRM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.089Z",
        "updatedAt": "2024-12-23T07:25:36.089Z"
    },
    {
        "id": "edf12818-99e8-4f60-8148-1980d3279022",
        "code": "6815",
        "label": "Marketing Manager",
        "short": "MM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.171Z",
        "updatedAt": "2024-12-23T07:25:36.171Z"
    },
    {
        "id": "a7fbef07-86d1-4281-953a-ae4bb5164927",
        "code": "7428",
        "label": "Sales Manager",
        "short": "SM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.253Z",
        "updatedAt": "2024-12-23T07:25:36.253Z"
    },
    {
        "id": "c5ae0b45-1932-4da0-b2ef-16cdf3af13fc",
        "code": "3956",
        "label": "Software Engineer",
        "short": "SE",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.343Z",
        "updatedAt": "2024-12-23T07:25:36.343Z"
    },
    {
        "id": "78f442c0-348c-4bb9-931e-4c8d87d33fd2",
        "code": "2473",
        "label": "Data Analyst",
        "short": "DA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.429Z",
        "updatedAt": "2024-12-23T07:25:36.429Z"
    },
    {
        "id": "e2160831-f9ae-4f6e-b8ef-40b678117178",
        "code": "5862",
        "label": "Customer Support Agent",
        "short": "CSA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.507Z",
        "updatedAt": "2024-12-23T07:25:36.507Z"
    },
    {
        "id": "27a9b395-54e9-49e3-8819-dd844b354b11",
        "code": "8947",
        "label": "Product Manager",
        "short": "PM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.584Z",
        "updatedAt": "2024-12-23T07:25:36.584Z"
    },
    {
        "id": "5053d783-57a5-4fc0-be8b-3d631d739ad7",
        "code": "7395",
        "label": "Project Manager",
        "short": "PjM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.657Z",
        "updatedAt": "2024-12-23T07:25:36.657Z"
    },
    {
        "id": "9aa1d78a-deb6-4ca3-9f16-474f9c5c88e9",
        "code": "3821",
        "label": "Business Analyst",
        "short": "BA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.724Z",
        "updatedAt": "2024-12-23T07:25:36.724Z"
    },
    {
        "id": "5394e5e3-3263-4546-aa39-2af9580ced07",
        "code": "4618",
        "label": "Quality Assurance Tester",
        "short": "QA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.806Z",
        "updatedAt": "2024-12-23T07:25:36.806Z"
    },
    {
        "id": "5245e4e9-8f47-45c7-ac30-498cb3c9913a",
        "code": "4321",
        "label": "Managing Partner",
        "short": "MP",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.875Z",
        "updatedAt": "2024-12-23T07:25:36.875Z"
    },
    {
        "id": "c74b84c3-5264-4aed-a426-84334617e2dd",
        "code": "9876",
        "label": "Partner",
        "short": "PT",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:36.963Z",
        "updatedAt": "2024-12-23T07:25:36.963Z"
    },
    {
        "id": "e906d68b-3de6-4c74-aa41-3aac0daca47e",
        "code": "2468",
        "label": "Junior Partner",
        "short": "JP",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.043Z",
        "updatedAt": "2024-12-23T07:25:37.043Z"
    },
    {
        "id": "6d973ff9-68d1-4821-85ab-93109e9a7ec1",
        "code": "1357",
        "label": "Accountant",
        "short": "ACC",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.108Z",
        "updatedAt": "2024-12-23T07:25:37.108Z"
    },
    {
        "id": "f2e54d4d-857a-40ee-9f0f-39d2a3d069e1",
        "code": "8642",
        "label": "Legal Advisor",
        "short": "LA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.179Z",
        "updatedAt": "2024-12-23T07:25:37.179Z"
    },
    {
        "id": "7528a1fb-058d-404b-b6d7-11050adb141c",
        "code": "3142",
        "label": "Marketing Consultant",
        "short": "MC",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.264Z",
        "updatedAt": "2024-12-23T07:25:37.264Z"
    },
    {
        "id": "16075866-875e-4a3f-99c0-1c4f4e9f1116",
        "code": "6789",
        "label": "Business Development Manager",
        "short": "BDM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.344Z",
        "updatedAt": "2024-12-23T07:25:37.344Z"
    },
    {
        "id": "30d8cad5-ce3a-4142-88b4-f6758a0b6157",
        "code": "5432",
        "label": "Operations Manager",
        "short": "OM",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.434Z",
        "updatedAt": "2024-12-23T07:25:37.434Z"
    },
    {
        "id": "65b603c7-8c17-445c-b4c9-9d3531e1536f",
        "code": "7568",
        "label": "Office Administrator",
        "short": "OA",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.536Z",
        "updatedAt": "2024-12-23T07:25:37.536Z"
    },
    {
        "id": "c5560c30-1a12-4a1d-97a6-915f2a1e352c",
        "code": "9821",
        "label": "Associate",
        "short": "ASO",
        "description": null,
        "isActive": true,
        "priority": 0,
        "activatedAt": null,
        "canDelete": true,
        "canUpdate": true,
        "createdById": null,
        "updatedById": null,
        "createdAt": "2024-12-23T07:25:37.633Z",
        "updatedAt": "2024-12-23T07:25:37.633Z"
    }
]

export const columns: ColumnDef<Partial<Role>>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "isActive",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("isActive") ? "Active" : "Inactive"}</div>
        ),
    },
    {
        accessorKey: "label",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Role
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div>{row.getValue("label")} - ({row.original.short})</div>,
    },
    {
        accessorKey: "code",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Code
                    <ArrowUpDown />
                </Button>
            )
        },
    },
    {
        accessorKey: "canDelete",
        header: "Can Delete",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("canDelete") ? "Yes" : "No"}</div>
        ),
    }, {
        accessorKey: "canUpdate",
        header: "Can Update",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("canUpdate") ? "Yes" : "No"}</div>
        ),
    }, {
        accessorKey: "canCreateProduct",
        header: "Can Create Product",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("canCreateProduct") ? "Yes" : "No"}</div>
        ),
    }, {
        accessorKey: "canViewReports",
        header: "Can View Reports",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("canViewReports") ? "Yes" : "No"}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => payment.id && navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function AllAdmins() {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter Roles..."
                    value={(table.getColumn("label")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("label")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
