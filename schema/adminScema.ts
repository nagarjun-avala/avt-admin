import { z } from "zod";

export const CreateAdminSchema = z.object({
    avatar: z.string().optional(),
    username: z.string(),
    password: z.string(),
    fullname: z.string(),
    email: z.string().optional(),
    mobile: z.string().optional(),
    roleId: z.string(),
    isActive: z.boolean().default(false),
    theme: z.union([
        z.literal("light"),
        z.literal("dark"),
        z.literal("system")
    ]).default("system"),
    currency: z.string().default("INR"),
})

export type CreateAdminSchemaType = z.infer<typeof CreateAdminSchema>


export const CreateProductSchema = z.object({
    barcode: z.string(),
    name: z.string({
        required_error: "Product name is required"
    }),
    description: z.string().optional(),
    categoryId: z.string({
        required_error: "Product category is required"
    }),
    price: z.number().multipleOf(0.01).min(0.01, {
        "message": "Minimum cost of a product should be 0.01"
    }).nonnegative({
        "message": "Product cost must be positive"
    }),
    stockQty: z.number().min(1, {
        "message": "Minimum quantity of a product should be 1"
    }).nonnegative({
        "message": "Product quantity must be positive"
    }),
    supplierId: z.string({
        required_error: "Product supplier is required"
    }),
})

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>

export const CreateSupplierSchema = z.object({
    name: z.string({
        required_error: "Supplier name is required"
    }),
    mobile: z.string(),
    email: z.string().email(),
    website: z.string().url(),
    address: z.object({
        pincode: z.string().optional()
    }),
    isActive: z.boolean(),
})

export type CreateSupplierSchemaType = z.infer<typeof CreateSupplierSchema>

export const CreateCountrySchema = z.object({
    name: z.string().min(1, {
        "message": "Country name is required"
    }),
    iso3: z.string().length(3),
    iso2: z.string().length(2),
    phoneCode: z.string().min(1, {
        "message": "Country phone code is required"
    }),
    capital: z.string().min(1, {
        "message": "Country capital is required"
    }),
    currency: z.string().length(3),
    currencySymbol: z.string().min(1, {
        "message": "Country currency symbol is required"
    }),
    tld: z.string().min(1, {
        "message": "Country top-level domain is required"
    }),
    native: z.string().min(1, {
        "message": "Please provide country name in native language"
    }),
    region: z.string().min(1, {
        "message": "Country region is required"
    }),
    subregion: z.string().min(1, {
        "message": "Country sub region is required"
    }),
    latitude: z.string().min(1, {
        "message": "Country location is required"
    }),
    longitude: z.string().min(1, {
        "message": "Country coordinates are required"
    }),
    emoji: z.string().min(1, {
        "message": "Country emoji is required"
    }),
    emojiU: z.string().min(1, {
        "message": "Country emojiU is required"
    }),
    timezone: z.object({
        zoneName: z.string().min(1, {
            "message": "Country timezone name is required"
        }),
        gmtOffset: z.number().min(1, {
            "message": "Country timezone gmtOffset is required"
        }),
        gmtOffsetName: z.string().min(1, {
            "message": "Country timezone gmtOffset Name is required"
        }),
        abbreviation: z.string().min(1, {
            "message": "Country timezone Abbreviation is required"
        }),
        tzName: z.string().min(1, {
            "message": "Country timezone Abbreviation Full form is required"
        })
    })
})

export type CreateCountrySchemaType = z.infer<typeof CreateCountrySchema>