"use client"
import { AppDispatch, RootState } from '@/redux/store'
import { CreateCountrySchema, CreateCountrySchemaType } from '@/schema/adminScema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createCountry } from '@/redux/actions/countrieesAction'

const CreateCountryPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)
    const form = useForm<CreateCountrySchemaType>({
        resolver: zodResolver(CreateCountrySchema),
        defaultValues: {
            name: "",
            iso3: "",
            iso2: "",
            phoneCode: "",
            capital: "",
            currency: "",
            currencySymbol: "",
            tld: "",
            native: "",
            region: "",
            subregion: "",
            latitude: "",
            longitude: "",
            emoji: "",
            emojiU: "",
            timezone: {
                zoneName: "",
                gmtOffset: 0,
                gmtOffsetName: "UTC+00:00",
                abbreviation: "",
                tzName: "",
            }
        }
    })

    const handleSubmitProduct: SubmitHandler<CreateCountrySchemaType> = (data) => {
        setIsLoading(true)
        const token = auth?.token || ''
        if (token && token !== "")
            dispatch(createCountry({ data, token }))
        // console.log(data)
        setIsLoading(false)
    }
    return (
        <Card className='mb-4'>
            <CardHeader>
                <h1 className='text-xl text-center underline'>Add New Country</h1>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-4">
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Countey Name</FormLabel>
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
                        <div>
                            <h2 className='mt-7 underline'>TimeZones</h2>
                            <div className="p-3 grid gap-4 grid-cols-1 sm:grid-cols-5">
                                <FormField
                                    control={form.control}
                                    name='timezone.zoneName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Zone Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>Zone name (Asia/Kolkata)</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='timezone.gmtOffset'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>gmtOffset</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    type='number'
                                                    value={field.value}
                                                    onChange={(e) => {
                                                        const gmtOffsetValue = e.target.value;
                                                        field.onChange(e);
                                                        form.setValue("timezone.gmtOffset", parseInt(gmtOffsetValue));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormDescription>gmtOffset (19800)</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='timezone.gmtOffsetName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>gmtOffset</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>gmtOffset Name (UTC+05:30)</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='timezone.abbreviation'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Abbreviation</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>Timezone abbreviation (IST)</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='timezone.tzName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>timezone Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    autoComplete='off'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>Timezone Name (Indian Standard Time)</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='iso3'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>iso3</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>ISO3 is Short version of country name with 3 Chars</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='iso2'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>iso2</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>ISO2 is Short version of country name with 2 Chars</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='phoneCode'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>phoneCode</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country Telephone prefix code (91)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='capital'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>capital</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Capital of the Country</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='currency'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>currency</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country currency name (INR)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='currencySymbol'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>currencySymbol</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country currency symbol (₹)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-4">
                            <FormField
                                control={form.control}
                                name='tld'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>tld</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country top-level domain (.in)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='native'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>native</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country name in local language (भारत)</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='region'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>region</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Continent</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='subregion'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>subregion</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Sub Continent</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='latitude'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>latitude</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Latitude Location</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='longitude'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>longitude</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Longitude Location</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name='emoji'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>emoji</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country emoji</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name='emojiU'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>emojiU</FormLabel>
                                        <FormControl>
                                            <Input
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Country emojiU</FormDescription>
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

export default CreateCountryPage