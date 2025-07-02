import {useEffect, useMemo, useState} from "react";

function ExpensiveComponent({value}: any) {
    useEffect(() => {
        console.log('rendering')
    }, []);

    return <span>{value + 1000}</span>
}

function App() {
    const [value, setValue] = useState(10);
    const [, triggerRendering] = useState(false);

    const MemoizedComponent = useMemo(() => <ExpensiveComponent value={value}/>, [value])

    function handleChange(e: any) {
        setValue(Number(e.target.value))
    }

    function handleClick() {
        triggerRendering(prev => !prev)
    }

    return (
        <>
            <input value={value} onChange={handleChange}/>
            <button onClick={handleClick}>렌더링 발생!!!!!</button>
            {MemoizedComponent}
        </>
    )
}