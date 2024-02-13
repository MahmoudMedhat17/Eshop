
// eslint-disable-next-line react/prop-types
const Herobtn = ({ text, bgColor, textColor, handleClick }) => {
    return (
        <button data-aos="fade-up" data-aos-duration="500" onClick={handleClick} className={`hover:scale-105 lg:hover:scale-110 duration-300 px-8 py-2 rounded-full mt-5 z-10 ${bgColor} ${textColor}`}>
            {
                text
            }
        </button>
    )
}

export default Herobtn;