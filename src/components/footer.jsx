import Link from 'next/link'
import Logo from '@/assets/icons/logo'
import SocialMediaList from './ui/socialMediaList'

const Footer = () => {
    return (
        <footer className=' container-fluid  mx-auto '>
            <div className=' bg-secondary '>
                <div className='container'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20'>
                        <div>
                            <Link href={""} className='text-primary-foreground'>
                                <Logo height={"30"} width={"218"} />
                            </Link>
                            <h5 className='xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3'>Shaping Interior Excellence</h5>
                            {/* <SocialMediaList /> */}
                        </div>
                        {/* <div className='mt-12 lg:mt-0 flex gap-x-10'>
                            <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
                            <div>
                                <h5 className='text-2xl font-extrabold block text-primary-foreground leading-160 '>Address Kenya:</h5>
                                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                                <div className=''>
                                    <p className='text-xl font-bold text-primary-foreground'>FNL, </p>
                                    <p className='text-lg text-primary-foreground'>Rhaphta road, Westlands </p>
                                    <p className='text-lg  text-primary-foreground'>Nairobi, KENYA </p>
                                </div>
                                <div className='mt-[17px]'>
                                    <Link href={"tel:+34962398486"} className='text-lg block text-primary-foreground hover-underline' >Phone: <span>+254 712 557485</span></Link>
                                    <Link href={"mailto:hello@architronix.com"} className='text-lg block text-primary-foreground hover-underline'>Email: <span>info@fnl.co.ke</span></Link>
                                </div>
                            </div>
                        </div> */}
                        <div className='mt-12 lg:mt-0 flex gap-x-10'>
                            <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
                            <div>
                                <h5 className='text-2xl font-extrabold inline-block text-primary-foreground leading-160 '>Address:</h5>
                                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                                <div className='mt-[18px]'>
                                    <p className='text-xl font-bold text-primary-foreground'>FNL, </p>
                                    <p className='text-lg text-primary-foreground'>Rhaphta road, Westlands </p>
                                    <p className='text-lg  text-primary-foreground'>Nairobi, Kenya </p>
                                </div>
                                <div className='mt-[17px]'>
                                    <Link href={"tel:+34962398486"} className='text-lg block text-primary-foreground hover-underline' >Phone: <span>+254 712 557485</span></Link>
                                    <Link href={"mailto:hello@architronix.com"} className='text-lg block text-primary-foreground hover-underline'>Email: <span>info@fnl.co.ke</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='bg-pritext-primary-foreground' />
                    <div className='py-8 lg:flex justify-between items-center'>
                        {/* <span className='text-sm text-primary-foreground block'>Made with Love by <Link href={""}>ThemePerch</Link> </span> */}
                        <span className='text-sm text-primary-foreground block mt-3 lg:mt-0'>©2024, fnl, All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer