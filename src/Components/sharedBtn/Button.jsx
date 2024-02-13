
// eslint-disable-next-line react/prop-types
const Button = ({ text, bgColor, textColor }) => {
    return (
        <button className={`hover:scale-105 lg:hover:scale-110 duration-300 px-8 py-2 rounded-full mt-5 z-10 ${bgColor} ${textColor}`}>
            {
                text
            }
        </button>
    )
}

export default Button;