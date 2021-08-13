import { GlobeAltIcon } from '@heroicons/react/solid'

function Footer() {
    return (
    <div className="py-5 bg-gray-100 w-full z-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 border-b-2">
            <div className="footer__component space-y-4 text-sm text-gray-800">
                <h5 className="font-bold text-base">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold text-base">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Diversity & Belonging</p>
                <p>Frontline Stays</p>
                <p>Guest Referrals</p>
                <p>Gift cards</p>
                <p>Airbnb Associates</p>
                <p>Against Discrimination</p>
                <p>Airbnb.org</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold text-base">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Community Center</p>
                <p>Resource Center</p>
                <p>Responsible hosting</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold text-base">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cancellation options</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 py-10 text-gray-600">
            <div className="grid grid-cols-2">
                <p>&copy; 2021, Usama Bhatti.</p>
                <ul className="grid grid-cols-1 justify-center gap-x-3 ml-3 font-medium lg:grid-cols-3">
                    <li className="hover:underline cursor-pointer"><a href="https://usamabhatti.netlify.app/" target="_blank">Resume</a></li>
                    <li className="hover:underline cursor-pointer"><a href="https://www.instagram.com/ubthebrown/" target="_blank">Instagram</a></li>
                    <li className="hover:underline cursor-pointer"><a href="https://dribbble.com/usamabhatti" target="_blank">Dribbble</a></li>
                </ul>
            </div>
            <div className="w-ful">
                <p className="flex font-medium float-right"><GlobeAltIcon className="h-6 hover:cursor-pointer"/>Islamabad, Pakistan</p>
            </div>            
        </div>            
    </div>
    )
}

export default Footer
