import React from 'react'
import { Button } from './ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignInButton, UserButton } from '@clerk/nextjs';

const Header = async () => {
    const user = await currentUser();
    
  return (
    <div className='px-10 py-3 flex items center justify-between border-b border-b-gray-600'>
        <h2 className='uppercase font-semibold text-lg tracking-wide'>Shoppers</h2>
        <ClerkLoaded>
        {
            user?   (
                <div>
                    <UserButton />
                </div>
            ) : (
                <SignInButton mode='modal'>Sign In</SignInButton>
            )
        }
        </ClerkLoaded>
    </div>
  )
}

export default Header