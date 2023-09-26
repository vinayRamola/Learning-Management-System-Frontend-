import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state)=> state?.auth?.data?._id)
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function(){
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!data.fullName || !data.avatar){
            toast.error("All field are mandatory");
            return;
        }

        if(data.fullName.length < 5){
            toast.error("Name can not be less than 5 Characters");
            return;
        }

        const formData = new FormData();
        formData.append("fullName",data.fullName);
        formData.append("avatar", data.avatar);

        
        await dispatch(updateProfile(data.userId,data));

        await dispatch(getUserData());

        navigate('/user/profile');
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[92vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Edit Profile</h1>
                    <label className="cursor-pointer" htmlFor="image_uploads">
                        {data.previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={data.previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input 
                        onChange={handleImageUpload}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />

                    <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="text-lg font-semibold">Full Name</label>
                            <input
                                type="fullName"
                                required
                                name='fullName'
                                id="fullName"
                                placeholder="Enter your full name"
                                className="bg-transparent px-2 py-1 border"
                                onChange={handleInputChange}
                            />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg" >Update Profile</button>
                    <Link to="/user/profile">
                    <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2"><AiOutlineArrowLeft /> Go back to Profile</p>
                    </Link>
                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile;