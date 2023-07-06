import { useEffect, useState } from "react";

const Code02 = () => {
    const [dependency, setDependency] = useState(0);

    useEffect(() => {
        console.log('componentDidMount & componentDidUpdate');
    })

    useEffect(() => {
        console.log('componentDidMount');

        return () => {
            console.log('componentDidUnmount');
        };
    }, []);

    useEffect(() => {
        console.log('dependency changes');
    }, [dependency]);

    return <div className="component-body">
        <h2>Open Developer Tools (press F12 key) and check Console tab</h2>
    </div>;
}

export default Code02;