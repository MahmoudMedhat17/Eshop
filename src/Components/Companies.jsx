
const Companies = () => {

  const logos = [
    {
      id: 1,
      img: "public/images/golden.png"
    },
    {
      id: 2,
      img: "public/images/jackRoller.png"
    },
    {
      id: 3,
      img: "public/images/sweety.png"
    },
    {
      id: 4,
      img: "public/images/mr.png"
    },
    {
      id: 5,
      img: "public/images/fastlane.png"
    }
  ]

  return (
    <section data-aos="zoom-in" className="mt-20 bg-gray-200 dark:bg-gray-700">
      <div className="container">
        <div className="hidden md:flex justify-around items-center gap-10 p-6">
          {
            logos.map((logo) => (
              <div key={logo.id}>
                <img
                  src={logo.img}
                  alt={logo.id}
                  className="opacity-[0.5] w-[100px] dark:invert"
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Companies;