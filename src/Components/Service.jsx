import { FaCarSide, FaWallet } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Service = () => {

    // const serviceData = [
    //     {
    //         id: 1,
    //         icon: <FaCarSide />,
    //         title: "Free Shipping",
    //         description: "Free Shipping On All Order"
    //     },
    //     {
    //         id: 2,
    //         icon: <IoMdCheckmarkCircle />,
    //         title: "Safe Money",
    //         description: "30 Days Money Back"
    //     },
    //     {
    //         id: 3,
    //         icon: <FaWallet />,
    //         title: "Secure Payment",
    //         description: "All Payment Secure"
    //     },
    //     {
    //         id: 4,
    //         icon: <FaHeadphonesAlt />,
    //         title: "Online Support",
    //         description: "Technical Support 24/7"
    //     }
    // ]

    return (
        <section className="my-10 md:my-20 dark:bg-gray-900">
            <div className="container">
                <div className="flex justify-center items-center sm:block">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 lg:place-items-center">
                        {/* Shipping */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <FaCarSide size={40} className="text-primary" />
                            {/* Shipping info */}
                            <div>
                                <h1 className="font-bold lg:text-xl dark:text-white">Free Shipping</h1>
                                <p className="font-semibold text-gray-400 text-sm ">Free Shipping On All Order</p>
                            </div>
                        </div>
                        {/* Safe money */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <IoMdCheckmarkCircle size={40} className="text-primary" />
                            {/* Safe money info */}
                            <div>
                                <h1 className="font-bold lg:text-xl dark:text-white">Safe Money</h1>
                                <p className="font-semibold text-gray-400 text-sm">30 Days Money Back</p>
                            </div>
                        </div>
                        {/* Secure payment */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <FaWallet size={40} className="text-primary" />
                            {/* Secure payment info */}
                            <div>
                                <h1 className="font-bold lg:text-xl dark:text-white">Secure Payment</h1>
                                <p className="font-semibold text-gray-400 text-sm">All Payment Secure</p>
                            </div>
                        </div>
                        {/* Online Support 24/7 */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <FaHeadphonesAlt size={40} className="text-primary" />
                            {/* Online Support info */}
                            <div>
                                <h1 className="font-bold lg:text-xl dark:text-white">Online Support</h1>
                                <p className="font-semibold text-gray-400 text-sm">Technical Support 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;