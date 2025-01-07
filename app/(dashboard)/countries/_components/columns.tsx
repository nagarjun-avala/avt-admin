import { Checkbox } from "@/components/ui/checkbox";
import { Country } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<Country>[] = [
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
                className="translate-y-0.5"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-0.5"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => (
            <div className="w-[150px] capitalize">{row.getValue("name")} ({row.original.native})</div>
        ),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "capital",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Capital" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium capitalize">
                        {row.getValue("capital")}
                    </span>
                </div>
            );
        },
        enableSorting: false,
    },
    {
        accessorKey: "subregion",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sub Region/Region" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium capitalize">
                        {row.getValue("subregion")} / {row.original.region}
                    </span>
                </div>
            );
        },
        enableSorting: false,
    },
    {
        accessorKey: "currency",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Currency" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium capitalize">
                        { }
                        {row.getValue("currency") != "" ? row.getValue("currency") + " / " : ""}{row.original.currencySymbol}
                    </span>
                </div>
            );
        },
        enableSorting: false,
    },
    {
        accessorKey: "phoneCode",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone Code" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium capitalize">
                        {row.getValue("phoneCode")}
                    </span>
                </div>
            );
        },
        enableSorting: false,
    },
    {
        accessorKey: "latitude",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Location" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium capitalize">
                        {row.getValue("latitude")},{row.original.longitude}
                    </span>
                </div>
            );
        },
        enableSorting: false,
    },
];