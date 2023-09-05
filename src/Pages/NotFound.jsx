import { useNavigate } from "react-router-dom";

function NotFound(){

    const navigate = useNavigate();
    return (
        <div className="w-full h-screen bg-[#1A2238] flex flex-col items-center justify-center">
            <h1 className="text-8xl font-extrabold text-white">404  Page Not Found!</h1>

            <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring-2">
                <span onClick={()=>navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238]  border border-current">
                    Go Back
                </span>
            </a>
            </button>
        </div>
        
    )
}

export default NotFound;