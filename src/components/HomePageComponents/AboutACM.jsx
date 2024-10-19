// import aboutBg from '../../assets/images/about-acm-bg.png';
// import item1Logo from '../../assets/images/item-1.png'; // Import image directly

// export default function AboutACM() {
//     const aboutItems = [
//         {
//             logo: item1Logo, // Use imported image
//             title: 'Success Ratio',
//             year: '2024',
//             detail: ["Branding", "Web Design", "Social Media"]
//         },
//         {
//             logo: item1Logo,
//             title: 'Success Ratio',
//             year: '2024',
//             detail: ["Branding", "Web Design", "Social Media"]
//         },
//         {
//             logo: item1Logo,
//             title: 'Success Ratio',
//             year: '2024',
//             detail: ["Branding", "Web Design", "Social Media"]
//         },
//         {
//             logo: item1Logo,
//             title: 'Success Ratio',
//             year: '2024',
//             detail: ["Branding", "Web Design", "Social Media"]
//         }
//     ];

//     // Arrays to hold items for each child div
//     const firstColItems = [];
//     const secondColItems = [];

//     // Alternate placing items in firstColItems and secondColItems
//     aboutItems.forEach((item, index) => {
//         if (index % 2 === 0) {
//             firstColItems.push(item);
//         } else {
//             secondColItems.push(item);
//         }
//     });

    // return (
    //     <div className='bg-cover flex-wrap flex flex-row text-white justify-center mt-10 py-20' style={{ backgroundImage: `url(${aboutBg})` }}>
    //     {/* First column */}
    //     <div className='flex flex-col flex-wrap items-center justify-center w-6/12 pt-10'>
    //         {/* Added margin to the <p> tag in the first column */}
    //         <p className='text-center font-extralight text-sm w-7/12 mb-40 mt-20'>
    //             More than 75 successful projects, more than 250 satisfied clients. Join us on
    //             this creative journey with many success stories and see how we bring
    //             companies and businesses to life.
    //         </p>
    
    //         <div className='flex flex-col items-center justify-center w-full gap-8'>
    //             {firstColItems.map((item, index) => (
    //                 <div key={index} className='w-8/12 p-8 bg-[#fdfdfd1c] bg-opacity-50 flex flex-col gap-4 rounded-xl'>
    //                     <img className='w-full' src={item.logo} alt={item.title} />
    //                     <div className='flex flex-wrap flex-row justify-between font-semibold text-lg'>
    //                         <h3>{item.title}</h3>
    //                         <p>{item.year}</p>
    //                     </div>
    //                     <ul className='flex flex-wrap flex-row gap-8'>
    //                         {item.detail.map((detailItem, detailIndex) => (
    //                             <li className='border border-white rounded-full px-2 py-1' key={detailIndex}>{detailItem}</li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    
    //     {/* Second column */}
    //     <div className='flex flex-col flex-wrap items-center justify-center w-6/12'>
    //         <h1 className='text-center font-bold text-7xl mb-10'>ABOUT ACM</h1>
    //         <div className='flex flex-col items-center justify-center w-full gap-8'>
    //             {secondColItems.map((item, index) => (
    //                 <div key={index} className='w-8/12 p-8 bg-[#fdfdfd1c] bg-opacity-50 flex-wrap flex flex-col gap-4 rounded-xl'>
    //                     <img className='w-full' src={item.logo} alt={item.title} />
    //                     <div className='flex flex-row justify-between font-semibold text-lg'>
    //                         <h3>{item.title}</h3>
    //                         <p>{item.year}</p>
    //                     </div>
    //                     <ul className='flex-wrap flex flex-row gap-8'>
    //                         {item.detail.map((detailItem, detailIndex) => (
    //                             <li className='border border-white rounded-full px-2 py-1' key={detailIndex}>{detailItem}</li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // </div>
    
    // );
// }
//  import React from 'react';
import aboutBg from '../../assets/images/about-acm-bg.png';
import item1Logo from '../../assets/images/item-1.png';

export default function AboutACM() {
    const aboutItems = [
        {
            logo: item1Logo,
            title: 'Success Ratio',
            year: '2024',
            detail: ["Branding", "Web Design", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'Social Media Accounts',
            year: '2024',
            detail: ["Web Design", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'Glow Bottle',
            year: '2023',
            detail: ["Branding", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'NFT Services',
            year: '2022',
            detail: ["Web Design"]
        }
    ];

    return (
        <div className='bg-cover bg-center text-white py-32 px-4 md:px-8 lg:px-16' style={{ backgroundImage: `url(${aboutBg})` }}>
            <h1 className='text-center font-bold text-4xl md:text-5xl lg:text-7xl mb-8'>ABOUT ACM</h1>
            
            <p className='text-center font-light text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-12'>
                More than 75 successful projects, more than 250 satisfied clients. Join us on
                this creative journey with many success stories and see how we bring
                companies and businesses to life.
            </p>
    
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                <div className='space-y-8 md:mt-0'>
                    {aboutItems.slice(0, 2).map((item, index) => (
                        <AboutItem key={index} item={item} />
                    ))}
                </div>
                <div className='space-y-8 md:mt-24'>
                    {aboutItems.slice(2, 4).map((item, index) => (
                        <AboutItem key={index + 2} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function AboutItem({ item }) {
    return (
        <div className='bg-[#fdfdfd1c] bg-opacity-50 rounded-xl p-6'>
            <img className='w-full h-48 object-cover rounded-lg mb-4' src={item.logo} alt={item.title} />
            <div className='flex justify-between font-semibold text-lg mb-4'>
                <h3>{item.title}</h3>
                <p>{item.year}</p>
            </div>
            <ul className='flex flex-wrap gap-2'>
                {item.detail.map((detailItem, detailIndex) => (
                    <li key={detailIndex} className='border border-white rounded-full px-3 py-1 text-sm'>{detailItem}</li>
                ))}
            </ul>
        </div>
    );
}