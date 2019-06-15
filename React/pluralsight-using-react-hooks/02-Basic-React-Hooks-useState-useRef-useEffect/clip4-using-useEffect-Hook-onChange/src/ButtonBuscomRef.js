import React, { useRef } from "react";

const ButtonCustomRef = () => {

    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` apunta al elemento de entrada de texto montado
        inputEl.current.focus();
      };
        
    return (
    <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
    </div>
    );
};

export default ButtonCustomRef;