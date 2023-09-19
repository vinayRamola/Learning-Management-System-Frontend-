import { useNavigate } from "react-router-dom";

function Denied(){

    const navigate = useNavigate();

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold font-white tracking-widest">403</h1>
            <div className="bg-black text-white px-2 text-lg rounded">Access Denied</div>
            <button onClick={() => navigate(-1)} className="py-3 border px-8 mt-6 bg-[#1A2238] border-current">Go Back</button>
        </main>
    )
}

export default Denied;