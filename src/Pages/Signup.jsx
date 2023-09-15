import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice.js";


function Signup(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");

    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
    });

    function handleUserInput(e){
        const {name,value} = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        })
    }

    function getImage(event){
        event.preventDefault();

        const uploadImage = event.target.files[0];

        if(uploadImage){
            setSignupData({
                ...signupData,
                avatar: uploadImage,
            });

            const filesReader = new FileReader();
            filesReader.readAsDataURL(uploadImage);
            filesReader.addEventListener("load", function (){
                setPreviewImage(this.result);
            })
        }
    }

    async function createNewAccount(event){
        event.preventDefault();

        if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar){
            toast.error('Please fill all the details');
            return;
        }

        // checking name field length
        if(signupData.fullName.length < 5 ){
            toast.error('Name should we atleast 5 characters');
            return;
        }

        if(!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
            toast.error('Invalid email id');
            return;
        }

        if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ){
            toast.error('Password should be 6-16 character long with atleast a number and a special character');
            return;
        }

        const formData = new FormData();
        formData.append("fullName",signupData.fullName);
        formData.append("email",signupData.email);
        formData.append("password",signupData.password);
        formData.append("avatar",signupData.avatar);

        // dispatch create account action
        const response = await dispatch(createAccount(formData));
        console.log(response)
        if(response?.payload?.success)
            navigate("/");

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: "", 
        });

        setPreviewImage("");

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh] w-full]">
                <form onSubmit={createNewAccount} noValidate className="flex flex-col justify-center gap-3 rounded-lg  p-4 text-white w-96 shadow-[0_0_10px_black] ">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input 
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    
                    <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="font-semi-bold">Name</label>
                            <input
                                type="fullName"
                                required
                                name='fullName'
                                id="fullName"
                                placeholder="Enter your full name"
                                className="bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={signupData.fullName}
                            />
                    </div>

                    <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semi-bold">Email</label>
                            <input
                                type="email"
                                required
                                name='email'
                                id="email"
                                placeholder="Enter your email"
                                className="bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={signupData.email}
                            />
                    </div>
                    <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semi-bold">Password</label>
                            <input
                                type="password"
                                required
                                name='password'
                                id="password"
                                placeholder="Enter your password"
                                className="bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={signupData.password}
                            />
                    </div>

                    <button className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2">Create account</button>
                    <p className="text-center">Already have an account ? <Link to="/login" className="link text-accent cursor-pointer" >Login</Link></p>
                </form>
            </div>
        </HomeLayout>

    )
}

export default Signup;