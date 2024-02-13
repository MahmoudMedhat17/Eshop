import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";


const Footer = () => {


    const Links = [
        {
            id: 1,
            header: "Important Links",
            subLinks: [
                {
                    id: 1,
                    title: "Home",
                    link: "/home"
                },
                {
                    id: 2,
                    title: "About",
                    link: "/about"
                },
                {
                    id: 3,
                    title: "Contact",
                    link: "/contact"
                },
                {
                    id: 4,
                    title: "Blog",
                    link: "/blog"
                }
            ],
        },
        {
            id: 2,
            header: "Quick Links",
            subLinks: [
                {
                    id: 1,
                    title: "Home",
                    link: "/home"
                },
                {
                    id: 2,
                    title: "About",
                    link: "/about"
                },
                {
                    id: 3,
                    title: "Contact",
                    link: "/contact"
                },
                {
                    id: 4,
                    title: "Blog",
                    link: "/blog"
                }
            ]
        }
    ]


    const Address = [
        {
            id: 1,
            header: "Address",
            description: [
                {
                    id: 1,
                    icon: <IoLocationSharp />,
                    text: "Giza, El-Sheikh Zayed"
                },
                {
                    id: 2,
                    icon: <IoMdPhonePortrait />,
                    text: "+201012107269"
                }
            ],
            social: [
                {
                    id: 1,
                    icon: <FaInstagram className="w-8 h-8 cursor-pointer hover:text-primary duration-200" />,
                    link: "https://www.instagram.com/"
                },
                {
                    id: 2,
                    icon: <FaFacebook className="w-8 h-8 cursor-pointer hover:text-primary duration-200" />,
                    link: "https://www.facebook.com/"
                },
                {
                    id: 3,
                    icon: <FaLinkedin className="w-8 h-8 cursor-pointer hover:text-primary duration-200" />,
                    link: "https://www.linkedin.com/"
                }
            ]
        }
    ]

    const date = new Date();
    const crTime = date.getFullYear();

    return (
        <footer className="py-14 dark:bg-gray-950">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Footer description */}
                    <div className="space-y-3 mb-10">
                        <h1 className="text-primary font-semibold text-3xl sm:text-5xl tracking-widest uppercase">Eshop</h1>
                        <p className="max-w-[300px] text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias com</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2 gap-10">
                        {/* Links */}
                        {
                            Links.map((item) => (
                                <div key={item.id}>
                                    <div>
                                        <h1 className="font-bold text-xl dark:text-white">
                                            {item.header}
                                        </h1>
                                        <ul className="mt-2">
                                            {
                                                item.subLinks.map((item) => (
                                                    <li key={item.id} className="mb-2">
                                                        <a href={item.link} className="text-lg text-gray-600 hover:text-black duration-200 dark:text-gray-400 dark:hover:text-white">
                                                            {
                                                                item.title
                                                            }
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                        {/* Address */}
                        {
                            Address.map((item) => (
                                <div key={item.id}>
                                    <h1 className="font-bold text-xl dark:text-white">
                                        {
                                            item.header
                                        }
                                    </h1>
                                    <ul className="mt-2">
                                        {
                                            item.description.map((item) => (
                                                <div key={item.id}>
                                                    {/* Location and No. */}
                                                    <div className="flex items-center gap-2">
                                                        <p className="dark:text-white">{item.icon}</p>
                                                        <p className="text-lg dark:text-white">{item.text}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                    {/* Social */}
                                    <div className="mt-5 flex gap-5">
                                        {
                                            item.social.map((social) => (
                                                <div key={social.id}>
                                                    <div className="dark:text-white">
                                                        <a href={social.link}>
                                                            {social.icon}
                                                        </a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-10 sm:w-[500px] sm:mx-auto sm:text-center dark:text-white">Copyright © {crTime} Mahmoud Medhat</div>
            </div>
        </footer>
    )
}

export default Footer;