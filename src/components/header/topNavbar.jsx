import Link from 'next/link'
import React from 'react'
import SocialMediaList from '../ui/socialMediaList'

const TopNavbar = () => {
    return (
        <div className='container-fluid  py-4 flex justify-between items-center'>
            <p className='font-semibold mb-0'>FNL &nbsp; | &nbsp; Innovation Beyond Boundaries</p>

            <div className='flex items-center gap-[20px] divide-x divide-black'>
                <p className='font-bold'> <span>Call Us:</span>  +254 712 557485</p>
                <div className='pl-5'>
                    {/* <SocialMediaList /> */}
                </div>
            </div>
        </div>
    )
}

export default TopNavbar