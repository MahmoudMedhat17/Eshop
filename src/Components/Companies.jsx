import Golden from "../../public/Images/golden.png";
import JackRoller from "../../public/Images/jackRoller.png";
import Sweety from "../../public/Images/sweety.png";
import Mr from "../../public/Images/mr.png";
import Fastlane from "../../public/Images/fastlane.png";

const Companies = () => {

  const logos = [
    {
      id: 1,
      img: Golden
    },
    {
      id: 2,
      img: JackRoller
    },
    {
      id: 3,
      img: Sweety
    },
    {
      id: 4,
      img: Mr
    },
    {
      id: 5,
      img: Fastlane
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