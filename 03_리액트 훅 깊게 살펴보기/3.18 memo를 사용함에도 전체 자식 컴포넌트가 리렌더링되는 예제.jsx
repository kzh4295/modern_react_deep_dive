import {memo, useCallback, useEffect, useState} from "react";

const ChildComponent = memo(({name, value, onchange}) => {
    useEffect(() => {
        console.log('rendering', name)
    }, []);

    return (
        <>
            <h1>{name}{value ? 'on' : 'off'}</h1>
            <button onClick={onChange}>toggle</button>
        </>
    )
})

function App() {
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)

    const toggle1 = useCallback(() => {
            setStatus1(!status1)
        }, [status1]
    )

    const toggle2 = useCallback(() => {
        setStatus1(!status2)
    }, [status2])

    return (
        <>
            <ChildComponent name='1' value={status1} onchange={toggle1}/>
            <ChildComponent name='2' value={status2} onchange={toggle2}/>
        </>
    )
}