import { useCreateMyUser } from 'src/api/MyUserApi'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0()
  const { createUser } = useCreateMyUser();
  const hasCreatedUser = useRef(false);

  useEffect(() => {

    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email })
    }

    navigate("/");
  }, [createUser, navigate, user])

  return (
    <div>Loading...</div>
  )
}

export default AuthCallbackPage