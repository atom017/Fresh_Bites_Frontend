import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UsernameMenu from './UsernameMenu';

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ? (<UsernameMenu />) :
        (<Button variant='ghost'
          className='font-bold text-orange-400 bg-white hover:bg-orange-400 hover:text-white'
          onClick={async () => await loginWithRedirect()}>
          Login
        </Button>)
      }
    </span>

  )
}

export default MainNav