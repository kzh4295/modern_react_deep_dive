import {useRef} from "react";

function RefComponent() {
    const count = useRef(0);

    function handleClick() {
        count.current += 1;
    }

    return <button onClick={handleClick}>{count.current}</button>
}