import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import HomeLayout from "../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription(){

    const { state } = useLocation();

    const {role} = useSelector((state) => state.auth);

    useEffect(() => {
    },[])

    return (
        <div>
            <HomeLayout>
                <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                    <div className="grid grid-cols-2 gap-14 px-40 relative">
                        <div className="space-y-5 " >
                            <img
                                alt="thumbnail"
                                src={state?.thumbnail?.secure_url}
                                className="w-full h-64"
                            />
                            
                            <div className="space-y-4">
                                <div className="flex flex-col items-center justify-between text-xl">
                                    
                                    <p className="font-semibold">
                                    <span className="text-yellow-500">Total Lectures: </span>
                                    { state?.numbersofLectures }
                                    </p>

                                    <p className="font-semibold">
                                    <span className="text-yellow-500">Instructor: </span>
                                    { state?.createdBy }
                                    </p>

                                </div>

                                { role === "ADMIN" || data?.description?.status === "ACTIVE" || true? (
                                    <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">Watch Lectures</button>
                                ):(
                                    <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300" >Subscribe</button>
                                )}

                            </div>
                        </div>

                        <div className="space-y-2 text-xl">
                            <h1 className="text-3xl font-bold text-yellow-500 mb-5 ">
                                {state?.title}
                            </h1>
                            <p className="text-yellow-500">Course Description: </p>
                            <p>{state?.description}</p>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </div>
    ) 
}

export default CourseDescription