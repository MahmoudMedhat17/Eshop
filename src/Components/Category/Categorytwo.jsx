import Button from "../sharedBtn/Button";

const Categorytwo = () => {
    return (
        <section className="my-10 dark:bg-gray-900">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* PS4 */}
                    <div className="flex items-end bg-gradient-to-br from-gray-400 to-white rounded-3xl h-[320px] pl-5 py-10 relative sm:col-span-2">
                        {/* PS4 description */}
                        <div className="space-y-3">
                            <p className="text-xl text-gray-200 font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Playstation</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-primary"
                                textColor="text-white"
                            />
                        </div>
                        {/* PS4 image */}
                        <div className="absolute right-3">
                            <img
                                src="/src/Images/ps4.png"
                                alt="Ps4 image"
                                className="w-[200px]"
                            />
                        </div>
                    </div>
                    {/* VR */}
                    <div className="flex items-end bg-greenColor to-white rounded-3xl h-[320px] pl-5 py-10 relative">
                        {/* VR description */}
                        <div className="space-y-3">
                            <p className="text-xl text-gray-200 font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Virtual</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-greenColor"
                            />
                        </div>
                        {/* VR image */}
                        <div className="absolute right-2">
                            <img
                                src="/src/Images/firstPerson.png"
                                alt="Vr image"
                                className="w-[200px]"
                            />
                        </div>
                    </div>
                    {/* Music gadget */}
                    <div className="flex items-end bg-blueColor to-white rounded-3xl h-[320px] pl-5 py-10 relative">
                        {/* Music gadget description */}
                        <div className="space-y-3">
                            <p className="text-xl text-gray-200 font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Virtual</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-blueColor"
                            />
                        </div>
                        {/* Music gadget image */}
                        <div className="absolute right-0 lg:right-3">
                            <img
                                src="/src/Images/music.png"
                                alt="Music speaker image"
                                className="w-[200px] lg:w-[250px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Categorytwo;