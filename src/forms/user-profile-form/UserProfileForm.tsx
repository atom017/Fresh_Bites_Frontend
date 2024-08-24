import { z } from 'zod'

const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(2, "Name is required"),
    addressLine1: z.string().min(2, "Name is required"),
    phoneNumber: z.string()
        .min(8, "Invalid Phone Number Length")
        .regex(phoneNumberRegex, "Invalid phone number format"),
    city: z.string().min(2, "City is required"),

})

type UserFormData = z.infer<typeof formSchema>;


import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from 'src/components/ui/form';
import { fields } from '@hookform/resolvers/typanion/src/__tests__/__fixtures__/data.js';
import { Input } from 'src/components/ui/input';
import LoadingButton from 'src/components/LoadingButton';
import { Button } from 'src/components/ui/button';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from 'src/components/ui/select';
import { User } from 'src/types';

type Props = {
    currentUser: User
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
}

const cities = ["Yangon", "Mandalay", "Taunggyi", "Bago", "Magway", "Sagaing", "Monywa", "Myit Kyi Nar", "Lashio"];

const UserProfileForm = ({ currentUser, onSave, isLoading }: Props) => {

    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser

    });

    useEffect(() => {
        if (currentUser) {
            form.reset(currentUser);
        }
    }, [currentUser, form])

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className='space-y-4 bg-gray-50 rounded-lg md:p-10'
            >
                <div>
                    <h2 className="text-2xl font-bold">User Profile</h2>
                    <FormDescription>
                        Edit your profile information here.
                    </FormDescription>

                </div>
                <FormField control={form.control} name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled className='bg-white' />
                            </FormControl>
                        </FormItem>
                    )} />

                <FormField control={form.control} name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                <div className="flex flex-col md:flex-row gap-4">
                    <FormField control={form.control} name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                    <FormField control={form.control} name="addressLine1"
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel>Address Line1</FormLabel>
                                <FormControl>
                                    <Input {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />


                    <FormField control={form.control} name="city"
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel>City</FormLabel>
                                <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value} >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {cities.map((city) => (
                                            <SelectItem key={city} value={`${city}`}>
                                                {`${city}`}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                </div>

                {isLoading ? <LoadingButton /> : <Button type="submit" className='bg-orange-500'>Submit</Button>}
            </form>
        </Form>
    )
}

UserProfileForm.propTypes = {}

export default UserProfileForm
