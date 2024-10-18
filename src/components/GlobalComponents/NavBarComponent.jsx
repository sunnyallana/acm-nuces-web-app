import logo from '../../assets/images/coders-cup-logo.png';

export default function Navbar() {
  return (
    <nav className="rounded-lg mt-4 w-11/12 mx-auto absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-[#ffffff29] bg-opacity-50">
      <img src={logo} alt="Coders Cup Logo" className="h-12 w-auto" />
      <div className="flex">
        <a className='bg-[#58151E] text-white border border-white px-10 flex items-center justify-center py-1'>Homepage</a>
        <a className='bg-[#1E1E1E] text-white border border-white px-10 flex items-center justify-center py-1'>Rules and Event Flow</a>
        <a className='bg-[#987734] text-white border border-white px-10 flex items-center justify-center py-1'>Registration</a>
        <a className='bg-[#155084] text-white border border-white px-10 flex items-center justify-center py-1'>FAQ</a>
      </div>
      <button className="bg-red-600 text-white px-4 py-2">Register Now</button>
    </nav>
  );
}