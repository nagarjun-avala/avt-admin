"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CreateProductSchema, CreateProductSchemaType } from '@/schema/adminScema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getAllCategories } from '@/redux/actions/categoriesAction';
import SelectLoader from '@/components/loaders/SelectLoader';
import { Category } from '@/lib/types';


const CreateProductPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)
    const categories = useSelector((state: RootState) => state.categories)
    const form = useForm<CreateProductSchemaType>({
        resolver: zodResolver(CreateProductSchema),
        defaultValues: {
            barcode: "8374017459001",
            name: "",
            description: "",
            categoryId: "",
            price: 0.00,
            stockQty: 0,
            supplierId: "",
        }
    })

    useEffect(() => {
        const token = auth?.token || '';
        if (token) {
            dispatch(getAllCategories({ token }))
        }
    }, [auth?.token, dispatch])

    const handleSubmitProduct: SubmitHandler<CreateProductSchemaType> = (data) => {
        setIsLoading(true)
        console.log(data)
        setIsLoading(false)
    }

    return (
        <Card className='mb-4'>
            <CardHeader>
                <h1 className='text-xl text-center underline'>Create New Product</h1>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-4">
                        <FormField
                            control={form.control}
                            name='barcode'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Barcode</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete='off'
                                            disabled
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>This is auto generated</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete='off'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>Name Of the Product</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormDescription>Description (Optional)</FormDescription>
                                </FormItem>
                            )}
                        />
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='price'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                type='number'
                                                value={field.value}
                                                inputMode="decimal"
                                                placeholder=""
                                                step={0.01}
                                                onChange={(e) => {
                                                    const priceValue = e.target.value;
                                                    field.onChange(e);
                                                    form.setValue("price", parseFloat(priceValue));
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='stockQty'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Stock Quantity</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                type='number'
                                                value={field.value}
                                                onChange={(e) => {
                                                    const stockQtyValue = e.target.value;
                                                    field.onChange(e);
                                                    form.setValue("stockQty", parseInt(stockQtyValue));
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            {categories && categories.loading ? (
                                <SelectLoader />
                            ) : (
                                <FormField
                                    control={form.control}
                                    name='categoryId'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a Category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {!categories.loading && categories?.data.map((category: Category) => (
                                                            <SelectItem
                                                                key={category.id}
                                                                value={category.id}
                                                            >
                                                                {category.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name='supplierId'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Supplier</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Supplier" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">Supplier 1</SelectItem>
                                                    <SelectItem value="dark">Supplier 2</SelectItem>
                                                    <SelectItem value="system">Supplier 3</SelectItem></SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </form>
                </Form>
            </CardContent>
            <CardFooter className='gap-2 justify-end'>
                <Button
                    type="button"
                    disabled={isLoading}
                    variant={"outline"}
                    onClick={() => {
                        form.reset()
                    }}
                >Reset</Button>
                <Button
                    type="submit"
                    disabled={isLoading}
                    onClick={form.handleSubmit(handleSubmitProduct)}
                >Save</Button>
            </CardFooter>
        </Card>
    )
}

export default CreateProductPage