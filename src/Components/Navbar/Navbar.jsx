import { FaCaretDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";



const navbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/Home"
    },
    {
        id: 2,
        title: "Shop",
        link: "/Shop"
    },
    {
        id: 3,
        title: "About",
        link: "/About"
    },
    {
        id: 4,
        title: "Blogs",
        link: "/Blogs"
    }
]

const dropDownLinks = [
    {
        id: 1,
        title: "Trending Products",
        link: "/Trending"
    },
    {
        id: 2,
        title: "Best Selling",
        link: "/BestSelling"
    },
    {
        id: 3,
        title: "Top Rated",
        link: "/TopRated"
    }
]

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrder }) => {
    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container">
                    <div className="flex justify-between items-center">
                        {/* Navbar logo */}
                        <div className="flex items-center gap-10">
                            <a href="/" className="text-primary uppercase text-2xl sm:text-3xl font-semibold tracking-widest">
                                Eshop
                            </a>
                            {/* Navbar links */}
                            <div className="hidden lg:block">
                                <ul className="flex">
                                    {
                                        navbarLinks.map((item) => (
                                            <li key={item.id} className="px-5">
                                                <a href={item.link} className="text-gray-500 font-semibold hover:text-black duration-100 dark:hover:text-white">
                                                    {
                                                        item.title
                                                    }
                                                </a>
                                            </li>
                                        ))
                                    }
                                    <li className="group relative px-5">
                                        <a href="#" className="flex items-center text-gray-500 font-semibold dark:hover:text-white duration-100">Quick links <FaCaretDown size={20} className="group-hover:rotate-180 duration-200" /></a>
                                        <ul className="bg-white shadow-lg w-[200px] rounded-md hidden group-hover:block absolute z-[99999] dark:bg-gray-900">
                                            <li className="space-y-4 p-2">
                                                {
                                                    dropDownLinks.map((item) => (
                                                        <li key={item.id} className="hover:bg-primary/20 duration-200 px-2 py-1 cursor-pointer rounded-md">
                                                            <a href={item.link} className="text-gray-500 font-semibold dark:hover:text-white duration-100">
                                                                {
                                                                    item.title
                                                                }
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Navbar right section */}
                        <div className="flex justify-between items-center gap-10">
                            {/* Search bar */}
                            <div className="hidden sm:block relative group">
                                <input
                                    placeholder="Search"
                                    type="text"
                                    className="search-bar dark:bg-gray-900"
                                />
                                <IoMdSearch size={20} className="absolute top-1/4 right-2 text-gray-700 group-hover:text-primary dark:text-gray-400 duration-150 hidden sm:block" />
                            </div>
                            {/* Cart icon */}
                            <div className="relative">
                                <div className="cursor-pointer">
                                    <FaCartShopping size={20} className="text-gray-700 dark:text-gray-400" onClick={handleOrder} />
                                    <div className="w-4 h-4 bg-primary text-white rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[12px]">4</div>
                                </div>
                            </div>
                            {/* Dark mode */}
                            <div>
                                <Darkmode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;