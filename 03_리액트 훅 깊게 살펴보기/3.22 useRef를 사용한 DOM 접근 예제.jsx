import {useEffect, useRef} from "react";

function RefComponent() {
    const inputRef = useRef();

    console.log(inputRef.current);

    useEffect(() => {
        console.log(inputRef.current)
    }, [inputRef]);

    return <input ref={inputRef} type="text"/>
}