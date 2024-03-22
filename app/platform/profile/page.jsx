import { currentUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const page = async () => {
  const user = await currentUser()
  const drives = []
  const {username} = user
  return (
    <div className='flex flex-col items-center py-5'>
      <section className='w-[300px] '>
        <h2 className='font-semibold text-3xl mb-4'>Hello, {username}</h2>
        <Button>Start a ride</Button>
        <section className='mt-8'>
          <div className=''>
            <h3 className='font-semibold text-lg tracking-wider'>Ride Histories</h3>
            <div className='font-semibold text-slate-900/80 mt-5'>
              {drives.length < 1 && (<p>No drives so far</p>)}
              {drives.map((d,i) => {
                return(
                  <div key={i}></div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default page