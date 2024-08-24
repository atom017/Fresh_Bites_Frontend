import React from 'react'
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


type props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: props) => {
    const navigate = useNavigate();

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT;
    const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE



    if (!domain || !clientId || !redirectURI || !audience) {
        throw new Error('Unable to start auth!');
    }

    const onRedirectCallBack = async (appState?: AppState, user?: User) => {
        console.log(appState);
        console.log(user);
        navigate("/auth-callback");
    }
    return (
        <Auth0Provider domain={domain}
            clientId={clientId} authorizationParams={{
                redirect_uri: redirectURI,
                audience
            }}
            onRedirectCallback={onRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    )

}

//Auth0ProviderWithNavigate.propTypes = {}

export default Auth0ProviderWithNavigate