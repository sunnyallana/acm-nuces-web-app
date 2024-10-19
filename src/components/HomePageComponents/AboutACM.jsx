import aboutBg from '../../assets/images/backgrounds/about-acm-bg.png';
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

    const firstColItems = [];
    const secondColItems = [];

    aboutItems.forEach((item, index) => {
        if (index % 2 === 0) {
            firstColItems.push(item);
        } else {
            secondColItems.push(item);
        }
    });

    return (
        <div className='bg-cover flex flex-col md:flex-row text-white justify-center mt-10 py-20' style={{ backgroundImage: `url(${aboutBg})` }}>
            {/* First column */}
            <div className='flex flex-col items-center justify-center w-full md:w-6/12 pt-10'>
                <h1 className='text-center font-bold text-4xl md:text-7xl'>
                    ABOUT <span className="text-[#17A0B7]">ACM</span>
                </h1>
                <p className='text-center font-extralight text-sm w-10/12 md:w-7/12 mb-20 mt-20'>
                    More than 75 successful projects, more than 250 satisfied clients. Join us on
                    this creative journey with many success stories and see how we bring
                    companies and businesses to life.
                </p>

                {/* Cards Section */}
                <div className='flex flex-col items-center justify-center w-full gap-8'>
                    {firstColItems.map((item, index) => {
                        const marginClass = (index === 1) ? 'mb-8' : 'mb-4'; // 8 margin for 2nd card, 4 for others
                        return (
                            <div key={index} className={`w-10/12 md:w-8/12 p-6 bg-[#fdfdfd1c] bg-opacity-60 flex flex-col gap-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${marginClass}`}>
                                <img className='w-full h-40 object-cover rounded-t-lg' src={item.logo} alt={item.title} />
                                <div className='flex flex-row justify-between font-semibold text-lg'>
                                    <h3>{item.title}</h3>
                                    <p>{item.year}</p>
                                </div>
                                <ul className='flex flex-row gap-4 flex-wrap justify-center'>
                                    {item.detail.map((detailItem, detailIndex) => (
                                        <li className='border border-white rounded-full px-3 py-1 text-sm' key={detailIndex}>
                                            {detailItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Second column */}
            <div className='flex flex-col items-center justify-center w-full md:w-6/12'>
                <div className='flex flex-col items-center justify-center w-full gap-8'>
                    {secondColItems.map((item, index) => {
                        const marginClass = (index === 1) ? 'mb-8' : 'mb-4'; // 8 margin for 2nd card, 4 for others
                        return (
                            <div key={index} className={`w-10/12 md:w-8/12 p-6 bg-[#fdfdfd1c] bg-opacity-60 flex flex-col gap-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${marginClass}`}>
                                <img className='w-full h-40 object-cover rounded-t-lg' src={item.logo} alt={item.title} />
                                <div className='flex flex-row justify-between font-semibold text-lg'>
                                    <h3>{item.title}</h3>
                                    <p>{item.year}</p>
                                </div>
                                <ul className='flex flex-row gap-4 flex-wrap justify-center'>
                                    {item.detail.map((detailItem, detailIndex) => (
                                        <li className='border border-white rounded-full px-3 py-1 text-sm' key={detailIndex}>
                                            {detailItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}