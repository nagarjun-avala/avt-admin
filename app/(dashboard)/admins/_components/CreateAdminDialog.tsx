"use client";

import { ReactNode, useEffect } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreateAdminSchema, CreateAdminSchemaType } from '@/schema/adminScema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/redux/store"
import { getAllRoles } from '@/redux/actions/rolesAction';
import { Button } from '@/components/ui/button';

interface Props {
    trigger: ReactNode
}

const CreateAdminDialog = ({ trigger }: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth) || { token: '' }
    const roles = useSelector((state: RootState) => state.roles)

    useEffect(() => {
        if (auth.token && auth.token !== "")
            dispatch(getAllRoles({ token: auth.token }))
    }, [auth.token, dispatch])
    const form = useForm<CreateAdminSchemaType>({
        resolver: zodResolver(CreateAdminSchema),
        defaultValues: {
            avatar: "",
            username: "",
            password: "",
            fullname: "",
            email: "",
            mobile: "",
            roleId: "",
            isActive: false,
            theme: "system",
        }
    })
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className='my-4'>
                <DialogHeader>
                    <DialogTitle>Create a new Admin</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-4">
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete='off'
                                            defaultValue={""}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>You can Add <b>Underscore</b> (_),<b>Period</b> (.) and <b>Hyphen</b> (-)</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            defaultValue={""}
                                            type='password'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='fullname'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            defaultValue={""}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete='off'
                                            defaultValue={""}
                                            type='email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>Admin email(optional)</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='isActive'
                            render={({ field }) => (
                                <FormItem>

                                    <div className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox onChange={field.onChange} checked={field.value} />
                                        </FormControl>
                                        <FormLabel>Active</FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between gap-2">
                            <FormField
                                control={form.control}
                                name='mobile'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile</FormLabel>
                                        <FormControl>
                                            <Input
                                                defaultValue={""}
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Admin mobile(optional)</FormDescription>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='theme'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Theme</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Theme" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="light">Light</SelectItem>
                                                    <SelectItem value="dark">Dark</SelectItem>
                                                    <SelectItem value="system">System</SelectItem></SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name='roleId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    {roles?.loading ? "Loading" : (
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Admin Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        roles?.data?.map((role) => (

                                                            <SelectItem
                                                                key={role.id}
                                                                value={role.id}
                                                            >
                                                                {role.label} {role.short} / {role.code}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    )}

                                </FormItem>
                            )}
                        />

                    </form>
                </Form>
                <DialogFooter>
                    <DialogClose>
                        <Button
                            type="button"
                            variant={"outline"}
                            onClick={() => {
                                form.reset()
                            }}
                        >Reset</Button>
                    </DialogClose>
                    <Button>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
export default CreateAdminDialog