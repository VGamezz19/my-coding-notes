import React, {useRef} from "react";

// User ref is an other hook of React, we use it for identify a specifict element of our dom.
// In this example, we are getting the Image, and we are changin de src dinamicly.
const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    const toggleImage = (img) => {
        imageRef.current.src = img;
    } 
        
    return (
        <img 
            src={primaryImg}
            alt="" ref={imageRef}
            onMouseOver={() => toggleImage(secondaryImg)}
            onMouseOut={() => toggleImage(primaryImg)}
        />
    );
};

export default ImageTogglerOnMouseOver;