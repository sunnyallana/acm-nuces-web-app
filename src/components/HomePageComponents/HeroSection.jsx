// import logo from '../../assets/images/coders-cup-logo.png'
// import heroBg from '../../assets/images/hero-bg.png'
// import sponsor from '../../assets/images/sponsor-logo.png'
// export default function HeroSection() {
//     return (
//         <div className='bg-cover flex flex-col gap-10' style={{ backgroundImage: `url(${heroBg})` }}>
//             <div className="flex flex-col items-center">
//                 <img className='w-[400px] h-[400px]' src={logo} alt="Coders Cup Logo" />
//                 <button className='text-white text-lg bg-[#0F5DA3] border border-white rounded-md px-6 py-2'>Register Now</button>
//             </div>
//             <div className='flex flex-col items-end pr-10'>
//                <p className='text-white font-bold'>POWERED BY</p>
//                 <img className='w-[100px] h-[100px]' src={sponsor}/>
//             </div>
//         </div>

//     )
// }

import logo from '../../assets/images/coders-cup-logo.png';
import heroBg from '../../assets/images/hero-bg.png';
import sponsor from '../../assets/images/sponsor-logo.png';

export default function HeroSection() {
    return (
        <div className='bg-cover bg-center h-screen flex flex-col justify-between py-20' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="flex flex-col items-center mt-24">
                <img className='w-64 h-auto mb-8' src={logo} alt="Coders Cup Logo" />
                <button className='text-white text-lg bg-blue-600 border border-white rounded-md px-8 py-3 hover:bg-blue-700'>Register Now</button>
            </div>
            <div className='flex flex-col items-end pr-10'>
               <p className='text-white font-bold text-sm mb-2'>POWERED BY</p>
                <img className='w-24 h-auto' src={sponsor} alt="Sponsor Logo"/>
            </div>
        </div>
    );
}