import Slider from "react-slick";
import Herobtn from "./Herobtn";


const heroInfo = [
    {
        id: 1,
        beats: "Beats Solo",
        type: "Wireless",
        name: "Headphone",
        img: "/src/Images/Headphones.png"
    },
    {
        id: 2,
        beats: "Beats Solo",
        type: "Wireless",
        name: "Virtual",
        img: "/src/Images/firstPerson.png"
    },
    {
        id: 3,
        beats: "Beats Solo",
        type: "Wired",
        name: "Laptops",
        img: "/src/Images/laptop.png"
    }
]

let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplayspeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
};

// eslint-disable-next-line react/prop-types
const Hero = ({ handleOrder }) => {
    return (
        <section className="dark:bg-gray-900">
            <div className="container">
                <div className="hero-bg-color rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center overflow-hidden">
                    <div className="container pb-8 sm:pb-0">
                        <Slider {...settings}>
                            {
                                heroInfo.map((item) => (
                                    <div key={item.id}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {/* Hero desctiption */}
                                            <div className="flex flex-col justify-center gap-3 sm:gap-8 items-center sm:items-start pl-3 pt-12 sm:pt-0 relative z-10 order-2 sm:order-1">
                                                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-2xl sm:text-6xl lg:text-2xl font-bold">{item.beats}</h1>
                                                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">{item.type}</h1>
                                                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-4xl sm:text-[60px] md:text-[80px] xl:text-[120px] text-white dark:text-white/5 uppercase font-bold">{item.name}</h1>
                                                <Herobtn
                                                    text='Shop Now'
                                                    bgColor="bg-primary"
                                                    textColor="text-white"
                                                    handleClick={handleOrder}
                                                />
                                            </div>
                                            {/* Image section */}
                                            <div className=" order-1 sm:order-2">
                                                <div data-aos="zoom-in" data-aos-once="true">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;