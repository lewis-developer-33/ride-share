'use client'
import moment from "moment"
import Link from "next/link"

const Page = () => {
  const currentDate = moment().startOf('day')

  const rides = [
    {
      day:new Date(2024,2,22),
      from:'Nairobi',
      to:"Kikuyu",
      status:"green",
      link:1
    },
    {
      day:new Date(2024,2,22),
      from:'Nairobi',
      to:"Kikuyu",
      status:"orange",
      link:2
    },
    {
      day:new Date(2024,2,23),
      from:'Nairobi',
      to:"Kikuyu",
      status:"green",
      link:3
    },
  ]
  const filterThisWeek = rides.filter((d) => moment(d.day).isSame(currentDate,'week'))
  const filterToday = rides.filter((d) => moment(d.day).isSame(currentDate))
  
  return (
    <div className="py-5 flex flex-col space-y-5 items-center">
      <section className="w-[300px]" >
        <h2 className="font-semibold text-xl">Today Rides</h2>
        <div>
          {filterToday.map((d,i) => {
            const {from,to,status,day,link} = d
            return(
              <Link href={`platform/rides/${link}`} className="grid gap-4 p-4 shadow-md rounded-sm font-semibold" key={i}>
                <div className="flex items-center justify-between">
                  <h2>{`From ${from} - To ${to}`}</h2>
                  <div>
                    {
                      status == 'green' ?
                      <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      :
                      <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                      </span>

                    }

                  </div>
                </div>
                  <h2>{day.toLocaleDateString("en-US")}</h2>
                <div className="flex items-center justify-between text-black/80 text-sm font-semibold">
                </div>

              </Link>
            )
          })}
        </div>
      </section>
      <section className="w-[300px]" >
        <h2 className="font-semibold text-xl">This Week Rides</h2>
        <div>
          {filterThisWeek.map((d,i) => {
            const {from,to,status,day,link} = d
            return(
              <Link href={`platform/rides/${link}`} className="grid gap-4 p-4 shadow-md rounded-sm font-semibold" key={i}>
                <div className="flex items-center justify-between">
                  <h2>{`From ${from} - To ${to}`}</h2>
                  <div>
                    {
                      status == 'green' ?
                      <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      :
                      <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                      </span>

                    }

                  </div>
                </div>
                  <h2>{day.toLocaleDateString("en-US")}</h2>
                <div className="flex items-center justify-between text-black/80 text-sm font-semibold">
                </div>

              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Page