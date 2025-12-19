import React from 'react';
import { Link } from 'react-router';

const Policy = () => {
    return (
        <div className='bg-gray-50 dark:bg-black dark:text-white'>
            <div className=' px-4 py-8 xl:px-30 mx-auto max-w-7xl'>
            <h className='font-marko-one text-2xl md:text-3xl font-bold'>Privacy Policy</h>
            <div className='mt-5 space-y-4 dark:text-white/90 text-[16px] '>
                <p>Ridmik Labs Limited built the Boitoi app as a Commercial app. This SERVICE is provided by Ridmik Labs Limited and is intended for use as is.</p>
                <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
                <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Boitoi unless otherwise defined in this Privacy Policy.</p>
                <p className='text-xl font-bold pt-2'>Information Collection and Use</p>
                <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to email, phone number, name, etc. The information that we request will be retained by us and used as described in this privacy policy.</p>
                <p>The app does use third party services that may collect information used to identify you.</p>
                <p>Link to privacy policy of third party service providers used by the app:</p>
                <div className='xl:px-10 font-semibold'>
                    <li>
                        <Link className='hover:scale-105 transform duration-300 hover:text-blue-700'>Google Play Services</Link>
                    </li>
                    <li>
                        <Link className='hover:scale-105 transform duration-300 hover:text-blue-700'>Google Analytics for Firebase</Link>
                    </li>
                    <li>
                        <Link className='hover:scale-105 transform duration-300 hover:text-blue-700'>Firebase Crashlytics</Link>
                    </li>
                    <li>
                        <Link className='hover:scale-105 transform duration-300 hover:text-blue-700'>Mixpanel Analytics</Link>
                    </li>
                </div>
                <p>For promotional purposes, we may use the book reviews that you write on our Service.</p>
                <p className='text-xl font-bold pt-2'>Log Data</p>
                <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
                <p className='text-xl font-bold pt-2'>Cookies</p>
                <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
            </div>
        </div>
        </div>
    );
};

export default Policy;