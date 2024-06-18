import { LibraryBig, Medal, ScrollText } from 'lucide-react'
import React from 'react'

export default function MorePage() {
  return (
    <div className='w-full'>
       <div className="min-h-screen h-full p-3 ">
            <div className="flex justify-between gap-2">
              <div className="rounded-md flex justify-center items-center gap-2 flex-col bg-[#59B792] cursor-pointer text-white   p-3 w-1/3">
                <ScrollText size={48} strokeWidth={2.5} />
                <span className="font-semibold text-lg text-center flex justify-center items-center">
                  Test Center
                </span>
              </div>
              <div className="rounded-md flex justify-center items-center gap-2 flex-col bg-[#59B792] cursor-pointer text-white   p-3 w-1/3">
                <LibraryBig size={48} strokeWidth={2.5} />
                <span className="font-semibold text-lg flex justify-center items-center">
                  Library
                </span>
              </div>
              <div className="rounded-md flex justify-center items-center gap-2 flex-col bg-[#59B792] cursor-pointer text-white   p-3 w-1/3">
                <Medal size={48} strokeWidth={2.5} />
                <span className="font-semibold text-lg flex justify-center items-center">
                  LeaderBoard
                </span>
              </div>
            </div>
          </div>
    </div>
  )
}
