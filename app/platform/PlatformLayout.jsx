'use client'
import {app,menu} from '@/content'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button"



const PlatformLayout = ({children}) => {
    const {isSignedIn} = useUser()
  return (
    <div>
        <header className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-4 shadow-md">
            <div>
                <Link className='font-bold text-lg' href='/'>{app.name}</Link>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                {menu.map((d,i) => {
                    const {name,link} = d
                    return (
                        <Link href={link}>{name}</Link>
                    )
                })}
            </div>
            <div>
                {isSignedIn ?
                <UserButton/>
                :
                <Button variant='outline'>
                    Log in
                </Button>
                }
            </div>
        </header>
        <section className='max-w-lg lg:max-w-7xl'>
                {children}
        </section>
    </div>
  )
}

export default PlatformLayout