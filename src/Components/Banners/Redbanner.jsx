import Button from "../sharedBtn/Button";

const Redbanner = () => {
    return (
        <section className="min-h-[550px] flex items-center dark:bg-gray-900">
            <div className="container">
                <div className="bg-primary text-white rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
                    {/* First col */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center items-start">
                        <p data-aos="slide-right">30% OFF</p>
                        <h1 data-aos="zoom-out" className="text-4xl lg:text-7xl font-bold">FINE SMILE</h1>
                        <p data-aos="fade-up">8 Feb to 1 Mar</p>
                    </div>
                    {/* Second col */}
                    <div className="flex justify-center" data-aos="zoom-in">
                        <img
                            src="public/images/headphones.png"
                            alt="Headphone image"
                            className="w-[250px] lg:w-[300px] scale-125 lg:scale-150 mx-auto drop-shadow-[-10px_4px_8px_rgba(0,0,0,0.4)] object-contain"
                        />
                    </div>
                    {/* Third col */}
                    <div className="space-y-3 p-6 sm:p-8 flex flex-col justify-center items-start">
                        <p data-aos="zoom-out" className="font-bold text-xl lg:text-2xl">Air Solo Bass</p>
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-3xl sm:text-5xl">Winter Sale</h1>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
                            <Button
                                text="Shop Now"
                                bgColor="bg-white"
                                textColor="text-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Redbanner;