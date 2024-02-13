import { IoCloseSharp } from "react-icons/io5";
import Button from "./sharedBtn/Button";


// eslint-disable-next-line react/prop-types
const PopCartpage = ({ order, handleOrder }) => {
    return (
        <div>
            {
                order === true ?
                    <div className="h-screen w-screen bg-black/20 fixed top-0 left-0 z-50 backdrop-blur-sm">
                        <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg px-5 py-3">
                            {/* Form title */}
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="font-semibold dark:text-white">Order Now</h1>
                                {/* Close menu icon */}
                                <div>
                                    <IoCloseSharp onClick={handleOrder} size={20} className="text-primary cursor-pointer" />
                                </div>
                            </div>
                            {/* Form */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input-style"
                                />
                                <input
                                    type="Email"
                                    placeholder="Email"
                                    className="input-style"
                                />
                                <input
                                    type="Address"
                                    placeholder="Address"
                                    className="input-style"
                                />
                            </div>
                            {/* Order button */}
                            <div className="flex justify-center">
                                <Button
                                    text="Order Now"
                                    textColor="text-white"
                                    bgColor="bg-primary"
                                />
                            </div>
                        </div>
                    </div>
                    :
                    order === false
            }
        </div>
    )
}

export default PopCartpage;