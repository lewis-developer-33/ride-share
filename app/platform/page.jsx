
'use client'
import {app,menu} from '@/content'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Page = () => {
    const {isSignedIn} = useUser()
    const router = useRouter()

    const handleRide = () => {
        router.push("/platform/rides")
    }
  return (
    <div className='w-[80vw]relative h-[90vh] '>

        <Image
        src='/road.jpg'
        alt='road'
        fill
        />
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-900/80'>
            <header className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-4 shadow-md bg-white relative">
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
            <div className='bg-white font-semibold mt-40 ml-4 w-fit p-5 rounded-sm'>
                <h2 className='font-bold text-2xl tracking-wide'>Rideshare for long distances</h2>
                <div className='grid gap-3 my-6'>
                    <div className='grid gap-1'>
                        <h2>From</h2>
                        <input className='bg-slate-900 text-white px-2 py-1 rounded-sm'/>
                    </div>
                    <div className=' grid gap-1'>
                        <h2>To</h2>
                        <input className='bg-slate-900 text-white px-2 py-1 rounded-sm'/>
                    </div>
                </div>
                <Button onClick={handleRide}>Find Ride</Button>
            </div>
        </div>
    </div>
  )
}

export default Page