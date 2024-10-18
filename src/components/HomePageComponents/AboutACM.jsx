import aboutBg from '../../assets/images/about-acm-bg.png';
import item1Logo from '../../assets/images/item-1.png'; // Import image directly

export default function AboutACM() {
    const aboutItems = [
        {
            logo: item1Logo, // Use imported image
            title: 'Success Ratio',
            year: '2024',
            detail: ["Branding", "Web Design", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'Success Ratio',
            year: '2024',
            detail: ["Branding", "Web Design", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'Success Ratio',
            year: '2024',
            detail: ["Branding", "Web Design", "Social Media"]
        },
        {
            logo: item1Logo,
            title: 'Success Ratio',
            year: '2024',
            detail: ["Branding", "Web Design", "Social Media"]
        }
    ];

    // Arrays to hold items for each child div
    const firstColItems = [];
    const secondColItems = [];

    // Alternate placing items in firstColItems and secondColItems
    aboutItems.forEach((item, index) => {
        if (index % 2 === 0) {
            firstColItems.push(item);
        } else {
            secondColItems.push(item);
        }
    });

    return (
        <div className='bg-cover flex flex-row text-white justify-center mt-10 py-20' style={{ backgroundImage: `url(${aboutBg})` }}>
        {/* First column */}
        <div className='flex flex-col items-center justify-center w-6/12 pt-10'>
            {/* Added margin to the <p> tag in the first column */}
            <p className='text-center font-extralight text-sm w-7/12 mb-40 mt-20'>
                More than 75 successful projects, more than 250 satisfied clients. Join us on
                this creative journey with many success stories and see how we bring
                companies and businesses to life.
            </p>
    
            <div className='flex flex-col items-center justify-center w-full gap-8'>
                {firstColItems.map((item, index) => (
                    <div key={index} className='w-8/12 p-8 bg-[#fdfdfd1c] bg-opacity-50 flex flex-col gap-4 rounded-xl'>
                        <img className='w-full' src={item.logo} alt={item.title} />
                        <div className='flex flex-row justify-between font-semibold text-lg'>
                            <h3>{item.title}</h3>
                            <p>{item.year}</p>
                        </div>
                        <ul className='flex flex-row gap-8'>
                            {item.detail.map((detailItem, detailIndex) => (
                                <li className='border border-white rounded-full px-2 py-1' key={detailIndex}>{detailItem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    
        {/* Second column */}
        <div className='flex flex-col items-center justify-center w-6/12'>
            <h1 className='text-center font-bold text-7xl mb-10'>ABOUT ACM</h1>
            <div className='flex flex-col items-center justify-center w-full gap-8'>
                {secondColItems.map((item, index) => (
                    <div key={index} className='w-8/12 p-8 bg-[#fdfdfd1c] bg-opacity-50 flex flex-col gap-4 rounded-xl'>
                        <img className='w-full' src={item.logo} alt={item.title} />
                        <div className='flex flex-row justify-between font-semibold text-lg'>
                            <h3>{item.title}</h3>
                            <p>{item.year}</p>
                        </div>
                        <ul className='flex flex-row gap-8'>
                            {item.detail.map((detailItem, detailIndex) => (
                                <li className='border border-white rounded-full px-2 py-1' key={detailIndex}>{detailItem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
    );
}
