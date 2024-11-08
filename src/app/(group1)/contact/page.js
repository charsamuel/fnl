// src/app/(group1)/contact/page.js
"use client"; // Ensure this is a client component

import dynamic from 'next/dynamic';
import Image from 'next/image';
import AddressCard from '@/components/ui/cards/addressCard';
import SectionTitle from '@/components/ui/sectionTitle';
import { addressList } from '@/lib/fackData/addressList';
import InputField from '@/components/ui/inputField';
import TextAreaField from '@/components/ui/textAreaField'
import RightArrow from '@/assets/icons/rightArrow';
import from_img from "@/assets/images/contact-image.jpg";
import Feedback from '@/components/section/feedback';
import ButtonOutline from '@/components/ui/buttons/buttonOutline';

const LeafletMap = dynamic(() => import('@/components/ui/leafletMap'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
});

const Contact = () => {
    // Here you can use searchParams logic safely as this is a client component
    return (
        <>
            {/* Address and map section */}
            <section>
                <div className="container-fluid">
                    <SectionTitle sectionName={"Contact"} sectionTitle={"Let's Design Together"} sectionDesc={"Reach out to bring your dream spaces to life."} />
                </div>
                <div className="container lg:pt-30 2sm:pt-20 pt-14">
                    <div className="grid lg:grid-cols-[32%_auto]">
                        <div className="grid lg:grid-cols-1 2sm:grid-cols-2 grid-cols-1 gap-y-6">
                            {addressList.map(({ id, address, company, country, email, phone, lat_lng }) => (
                                <AddressCard key={id} id={id} address={address} company={company} country={country} email={email} phone={phone} lat_lng={lat_lng} />
                            ))}
                        </div>
                        <div className="w-full max-h-[392px] lg:sticky lg:top-20 z-[1] mt-16 lg:mt-0">
                            <LeafletMap />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact form section */}
            <section>
                <div className="container-fluid">
                    <SectionTitle sectionName={"Inquiry"} sectionTitle={"Have a Project in your mind?"} sectionDesc={"Write us directly"} />
                </div>
                <div className="container lg:pt-30 2sm:pt-20 pt-14">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <Image src={from_img} loading="lazy" alt="contact-form" className="w-full h-auto" />
                        <form>
                            <InputField placeholderc={"Your Name"} type={"text"} className={"mb-[13px]"} />
                            <div className="flex sm:flex-row flex-col gap-x-5">
                                <InputField placeholderc={"Phone Number"} type={"number"} className={"mb-[13px]"} />
                                <InputField placeholderc={"Your Email"} type={"email"} className={"mb-[13px]"} />
                            </div>
                            <TextAreaField placeholder={"Type your message"} className={"min-h-[223px] mb-[13px]"} />
                            <div className="flex justify-end">
                                <ButtonOutline>Send message <RightArrow height={"22"} width={"35"} /></ButtonOutline>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Feedback />
        </>
    );
};

export default Contact;
