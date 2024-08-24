
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link to='/user-profile' className='flex items-center bg-white font-bold hover:text-orange-400'>
        User Profile
      </Link>
      <Button onClick={() => logout()} className='flex items-center px-3 font-bold hover:bg-gray-500'>
        Logout
      </Button>
    </>
  )
}

export default MobileNavLinks