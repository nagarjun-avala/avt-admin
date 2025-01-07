"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CreateSupplierSchema, CreateSupplierSchemaType } from '@/schema/adminScema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';


const CreateSupplierPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)
    const form = useForm<CreateSupplierSchemaType>({
        resolver: zodResolver(CreateSupplierSchema),
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            website: "",
            address: {},
            isActive: false,
        }
    })

    const handleSubmitProduct: SubmitHandler<CreateSupplierSchemaType> = (data) => {
        setIsLoading(true)
        console.log(data)
        setIsLoading(false)
    }

    return (
        <>
            <Card className='mb-4'>
                <CardHeader>
                    <h1 className='text-xl text-center underline'>Create New Supplier</h1>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="space-y-4">
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
                                        <FormDescription>Name Of the Supplier</FormDescription>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='mobile'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    type='email'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='website'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    type='url'
                                                    {...field}
                                                />
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
        </>
    )
}

export default CreateSupplierPage