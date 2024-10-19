import React from 'react';
import AccordianItem from '../components/contributions/FAQ-Section/AccordianItem';

const FAQPage = () => {
  const faqData = [
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },

    { question: "Pellentesque habitant morbi tristique senectus et netus?", answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    
    { question: "Aenean vehicula, lectus ac scelerisque sagittis?", answer: "Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo.Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo.Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo.Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo.Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo.Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo." },

    { question: "Aenean vehicula, lectus ac scelerisque sagittis?", answer: "Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo." },

    { question: "Aenean vehicula, lectus ac scelerisque sagittis?", answer: "Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo Aenean vehicula, lectus ac scelerisque sagittis, felis risus iaculis purus, sit amet fermentum massa lorem id justo." },

    
    
  ];

  return (
    <div className=" bg-gray-900 text-white pt-24 pb-16"> {/* Adjusts for the navbar height */}
      <div className="text-center m-10">
        <h2 className="text-5xl font-bold uppercase tracking-wider">Frequently Asked Questions</h2>
      </div>
      <div className="flex flex-col items-center">
        {faqData.map((faq, index) => (
          <AccordianItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
