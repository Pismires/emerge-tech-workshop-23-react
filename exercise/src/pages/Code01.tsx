import { useState } from "react";

const Code01 = () => {
    return <div className="component-body">
        <ParentComponent />
    </div>;
}

// Parent Component
const ParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <ChildComponent
                count={count}
                setCount={setCount}
            />
        </div>
    );
};

// Child Component
const ChildComponent = (props: any) => {
    return (
        <div>
            <button
                onClick={() => {
                    props.setCount(props.count + 1)
                }}
            >
                Increment
            </button>
            <p>Count from Parent: {props.count}</p>
        </div>
    );
};

export default Code01;