import { Role } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { formatDateTime } from "@/lib/utils"


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
        accessorKey: "code",
        header: "Code",
        cell: ({ row }) => (
            <div className="capitalize" >{row.getValue("code")} / {row.original.short}</div>
        ),
    },
    {
        accessorKey: "label",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Label
                    < ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="" > {row.getValue("label")} </div>,
    },
    {
        accessorKey: "createdAt",
        header: "Created On",
        cell: ({ row }) => (
            <div className="capitalize" >
                {formatDateTime(row.getValue("createdAt"))}
            </div>
        ),
    },
    {
        accessorKey: "updatedAt",
        header: "Updated On",
        cell: ({ row }) => (
            <div className="capitalize" >
                {formatDateTime(row.getValue("updatedAt"))}
            </div>
        ),
    },
]