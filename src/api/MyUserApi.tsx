import { User } from "src/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user!");
        }
        //console.log(response.json());
        return response.json();
    }

    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest);

    if (error) {
        toast.error(error.toString());
    }
    return { currentUser, isLoading }
}

type CreateUserRequest = {
    auth0Id: string,
    email: string,
}

export const useCreateMyUser = () => {

    const { getAccessTokenSilently } = useAuth0();
    if (!getAccessTokenSilently) {
        console.error("useAuth0 hook is missing. Ensure that your component is wrapped in Auth0Provider.");
        return { createUser: () => Promise.reject(new Error("Auth0 context is missing")), isLoading: false, isError: false, isSuccess: false };
    }
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`http://localhost:7000/api/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),

        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error Response: ", errorText);
            throw new Error("Failed to create new user!");
        }
    };

    const { mutateAsync: createUser, isLoading, isSuccess } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isSuccess
    }
};

//export default useCreateMyUser;

type UpdateUserData = {
    name: string;
    addressLine1: string;
    city: string;
    phoneNumber: string;
}

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: UpdateUserData) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed to update user!")
        }
        return response.json();
    };

    const { mutateAsync: updateUser, isLoading, isSuccess, isError, error, reset } = useMutation(updateMyUserRequest);
    if (isSuccess) {
        toast.success("Profile updated!")
    }
    if (error) {
        toast.error(error.toString());
        reset();
    }
    return { updateUser, isLoading, isSuccess, isError, error, reset }
}