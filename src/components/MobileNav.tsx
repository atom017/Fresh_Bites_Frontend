import { CircleUserRoundIcon, Menu } from 'lucide-react'
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from './ui/sheet'
import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './MobileNavLinks'

const MobileNav = () => {
  const {isAuthenticated, loginWithRedirect,user} = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-400' />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
              {isAuthenticated ?(
              <span className='flex items-center font-bold'>
                <CircleUserRoundIcon className='text-orange-400'/>
                {user?.email}
              </span>)
              :
              (<span>Welcome to FreshBites.com</span>) }
                
            </SheetTitle>
            <SheetDescription className='flex flex-col gap-4'>
              {isAuthenticated?<MobileNavLinks/> : (
                <Button onClick={()=> loginWithRedirect()} className='flex-1 font-bold bg-orange-400'>Login</Button>
              )}
            
        </SheetDescription>
        </SheetContent>
        <Separator />
        
    </Sheet>
  )
}

export default MobileNav