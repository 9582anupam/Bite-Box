const Button = ({
    text,
    color,
    textColor = "text-white", // Default text color to white
    padding = "py-2 px-4", // Default padding
    borderRadius = "rounded", // Default border radius
    fontSize = "text-base", // Default font size
    hoverColor = "hover:bg-opacity-80", // Default hover effect
    onClick, // On click handler
    customClasses = "", // Additional custom classes
    image // extra symbol/image in front of the button
}) => {
    console.log("color: " + color); 

    return (
        <div
            className={`${textColor} ${padding} ${borderRadius} ${fontSize} ${hoverColor} ${customClasses} w-fit flex items-center`}
            onClick={onClick}
            style={{ 
                cursor: "pointer", 
                backgroundColor: color, // Apply dynamic background color using inline styles
            }}
        >
            <p className="leading-normal">{text}</p>
            {   
                image && (
                    <img
                        src={image}
                        alt="button-symbol"
                        className="h-6 w-6 ml-2"
                    />
                )
            }
        </div>
    );
};

export default Button;
