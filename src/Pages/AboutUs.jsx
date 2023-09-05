import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from '../assets/Images/aboutMainImage.jpg'
import img1 from '../assets/Images/HomePageImage.jpg'

function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white ">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2  space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provude the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to 
                            share their skills creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img 
                        id="test1"
                        style={{
                            filter: "drop-shadow{0px 10px 10px rgb(0,0,0);"
                        }}
                        alt="aboutMainImage"
                        className="drop-shadow-2xl"
                        src={aboutMainImage} />
                    </div>
                </div>

                <div className="carousel w-[60vw] my-16 m-auto">
                <div id="slide1" className="carousel-item relative w-full m-auto">
                    <img src={img1} className="w-40 m-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full m-auto">
                    <img src={img1} className="w-40" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full m-auto">
                    <img src={img1} className="w-40" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full m-auto">
                    <img src={img1} className="w-40" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
                </div>
            </div>                
        </HomeLayout>
    )
}

export default AboutUs;