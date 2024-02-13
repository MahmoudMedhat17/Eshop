// import Earphone from "public/images/earphone.png";
// import YellowWatch from "public/images/yellowWatch.png";
// import Laptop from "public/images/laptop.png";
import Button from "../sharedBtn/Button";

const Categoryone = () => {

    return (
        <section className="my-10 dark:bg-gray-900">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Earphone item */}
                    <div className="flex items-end bg-gradient-to-br from-black/90 to-black/70 rounded-3xl h-[320px] pl-5 py-10 relative">
                        {/* Earphone description */}
                        <div className="space-y-3">
                            <p className="text-xl text-gray-400 font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Earphone</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-primary"
                                textColor="text-white"
                            />
                        </div>
                        {/* Earphone image */}
                        <div className="absolute bottom-0 -right-3">
                            <img
                                src="/public/images/earphone.png"
                                alt="Earphone"
                                className="w-[250px]"
                            />
                        </div>
                    </div>
                    {/* Yellow watch */}
                    <div className="flex items-end bg-yellowColor rounded-3xl h-[320px] pl-5 py-10 relative">
                        {/* Yellow watch description */}
                        <div className="space-y-3">
                            <p className="text-xl text-white font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Earphone</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-yellowColor"
                            />
                        </div>
                        {/* Yellow watch image */}
                        <div className="absolute -right-2">
                            <img
                                src="/public/images/yellowWatch.png"
                                alt="Yellow watch"
                                className="w-[250px]"
                            />
                        </div>
                    </div>
                    {/* Laptop */}
                    <div className="flex items-end bg-primary rounded-3xl h-[320px] pl-5 py-10 relative sm:col-span-2">
                        {/* Yellow watch description */}
                        <div className="space-y-3">
                            <p className="text-xl text-white font-semibold">Enjoy</p>
                            <p className="text-white font-semibold text-3xl">With</p>
                            <h1 className="text-4xl xl:text-5xl text-white/20 font-semibold">Earphone</h1>
                            <Button
                                text="Browse"
                                bgColor="bg-white"
                                textColor="text-primary"
                            />
                        </div>
                        {/* Yellow watch image */}
                        <div className="absolute right-0">
                            <img
                                src="/public/images/laptop.png"
                                alt="Yellow watch"
                                className="w-[250px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categoryone;