
const Products = () => {

    const firstProducts = [
        {
            id: 1,
            img: "/src/Images/headphone1.jpg",
            name: "Boat Headphone",
            price: "$120",
            dataAos: "fade-up",
            aosDelay: "0"
        },
        {
            id: 2,
            img: "/src/Images/watch2.jpg",
            name: "Rocky Mountain",
            price: "$420",
            dataAos: "fade-up",
            aosDelay: "200"
        },
        {
            id: 3,
            img: "/src/Images/headphone2.jpg",
            name: "Goggles",
            price: "$320",
            dataAos: "fade-up",
            aosDelay: "400"
        },
        {
            id: 4,
            img: "/src/Images/headphone1.jpg",
            name: "Printed",
            price: "$220",
            dataAos: "fade-up",
            aosDelay: "600"
        }
    ]

    const secondProducts = [
        {
            id: 1,
            img: "/src/Images/headphone3.jpg",
            name: "Boat Headphone",
            price: "$120",
            dataAos: "fade-up",
            aosDelay: "800"
        },
        {
            id: 2,
            img: "/src/Images/headphone4.jpg",
            name: "Rocky Mountain",
            price: "$420",
            dataAos: "fade-up",
            aosDelay: "1000"
        },
        {
            id: 3,
            img: "/src/Images/headphone5.jpg",
            name: "Goggles",
            price: "$320",
            dataAos: "fade-up",
            aosDelay: "1200"
        },
        {
            id: 4,
            img: "/src/Images/headphone3.jpg",
            name: "Printed",
            price: "$220",
            dataAos: "fade-up",
            aosDelay: "1400"
        }
    ]


    return (
        <section className="my-10 dark:bg-gray-900">
            <div className="container">
                {/* Product title */}
                <div className="max-w-[500px] mx-auto mb-10 text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold dark:text-white">Our Products</h1>
                    <p className="text-gray-400">Explore Our Products</p>
                </div>
                {/* The products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
                    {/* First products */}
                    {
                        firstProducts.map((item) => (
                            <div key={item.id} data-aos={item.dataAos} data-aos-delay={item.aosDelay}>
                                {/* Image */}
                                <div className="mb-2 relative group">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[300px] sm:w-full rounded-md object-cover"
                                    />
                                    {/* For hover effect */}
                                    <div className="hidden group-hover:flex absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-md rounded-md cursor-pointer">
                                        <button className="relative m-auto px-6 lg:px-8 py-2 bg-primary text-white rounded-full hover:scale-105 duration-300">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="space-y-2">
                                    <h1 className="font-semibold dark:text-white">{item.name}</h1>
                                    <p className="font-bold dark:text-white">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* Second products */}
                    {
                        secondProducts.map((item) => (
                            <div key={item.id} data-aos={item.dataAos} data-aos-delay={item.aosDelay}>
                                {/* Image */}
                                <div className="mb-2 relative group">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-[300px] sm:w-full rounded-md object-cover"
                                    />
                                    {/* For hover effect */}
                                    <div className="hidden group-hover:flex absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-md rounded-md cursor-pointer">
                                        <button className="relative m-auto px-6 lg:px-8 py-2 bg-primary text-white rounded-full hover:scale-105 duration-300">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="space-y-2">
                                    <h1 className="font-semibold dark:text-white">{item.name}</h1>
                                    <p className="font-bold dark:text-white">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;