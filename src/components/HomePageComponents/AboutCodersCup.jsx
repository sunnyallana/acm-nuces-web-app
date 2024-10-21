
import logo from '../../assets/images/coders-cup-logo.png';

export default function AboutCodersCup() {
    return (
        <div className="text-white bg-[#000017] pt-12">
           <h1 className="text-center text-3xl md:text-7xl font-bold py-6 px-2 mb-12 bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
            ABOUT <span className="text-[#17A0B7]">CODERS CUP</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-4">
                <p className='w-full md:w-6/12 text-center md:text-left'>
                ACM Coders Cup is an annual coding competition celebrating technology and problem-solving. It brings together top programmers from FAST University to compete in fast-paced, intense coding challenges. Whether you're a beginner or a pro, Coders Cup is your platform to sharpen your skills and compete with the best.
                <br /><br />    
                Over the years, the event has grown in scale, attracting talented participants. Coder's Cup not only nurtures technical excellence but also encourages collaboration and teamwork, establishing itself as a prestigious platform for budding coders.
                </p>
                <img className='w-full md:w-4/12' src={logo} alt="Coders Cup Logo" />
            </div>
        </div>
    );
}
