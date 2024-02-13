
const News = () => {

  const news = [
    {
      id: 1,
      img: "public/images/handWatch.jpg",
      date: "Feb 15, 2024 by Ahmed",
      title: "How to choose perfect smartwatch",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      aosData: "fade-up",
      aosDelay: "0"
    },
    {
      id: 2,
      img: "public/images/laptop&phone.jpg",
      date: "Feb 15, 2024 by Ali",
      title: "How to choose perfect Gadget",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      aosData: "fade-up",
      aosDelay: "400"
    },
    {
      id: 3,
      img: "public/images/secondPerson.jpg",
      date: "Feb 15, 2024 by Mohammed",
      title: "How to choose perfect VR Headset",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      aosData: "fade-up",
      aosDelay: "700"
    }
  ]
  return (
    <section className="my-10">
      <div className="container">
        {/* Title */}
        <div className="max-w-[550px] mx-auto text-center space-y-3 mb-10">
          <h1 className="font-bold text-3xl lg:text-4xl dark:text-white">Recent News</h1>
          <p className="text-gray-400 dark:text-gray-500">Explore Our Blogs</p>
        </div>
        {/* Articles Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            news.map((item) => (
              <div key={item.id} data-aos={item.aosData} data-aos-delay={item.aosDelay}>
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[220px] w-full rounded-xl hover:scale-105 duration-500 object-cover"
                  />
                </div>
                {/* Text */}
                <div className="space-y-3 my-3">
                  <p className="text-gray-500 text-sm dark:text-gray-500">{item.date}</p>
                  <h1 className="font-bold dark:text-white">{item.title}</h1>
                  <p className="text-gray-500 text-sm line-clamp-2 dark:text-gray-500">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default News;