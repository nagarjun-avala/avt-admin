import { Admin } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { formatDateTime } from "@/lib/utils"


export const columns: ColumnDef<Partial<Admin>>[] = [
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
        accessorKey: "username",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Username
                    < ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase" > {row.getValue("username")} </div>,
    },
    {
        accessorKey: "fullname",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Full Name
                    < ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div> {row.getValue("fullname")} </div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email
                    < ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase" > {row.getValue("email")} </div>,
    },
    {
        accessorKey: "lastLoginAt",
        header: "Last Login",
        cell: ({ row }) => <div className="lowercase" > {formatDateTime(row.getValue("lastLoginAt"))} </div>,
    },
    {
        accessorKey: "createdByAdminId",
        header: "Created By",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("createdByAdminId") || "N/A"}</div>
        ),
    },
    {
        accessorKey: "updatedByAdminId",
        header: "Updated By",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("updatedByAdminId") || "N/A"}</div>
        ),
    },
]