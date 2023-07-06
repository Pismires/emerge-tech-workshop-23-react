const Exercise03 = () => {
    return (
        <div className="component-body">
            <h2>Exercise 03</h2>
            <p>Modify the previously developed Todo application using this REST api.</p>
            <a href="https://jsonplaceholder.typicode.com/todos" target="_blank">https://jsonplaceholder.typicode.com/todos</a>

            <table>
                <tr>
                    <td>Listing all todos</td>
                    <td>GET</td>
                    <td rowSpan={2}>https://jsonplaceholder.typicode.com/todos</td>
                    <td rowSpan={4}>{`{
                        "userId": 1,
                        "id": 1,
                        "title": "todo note",
                        "completed": false
                    }`}</td>
                </tr>
                <tr>
                    <td>Creating a todo</td>
                    <td>POST</td>
                </tr>
                <tr>
                    <td>Updating a todo</td>
                    <td>PUT</td>
                    <td rowSpan={2}>https://jsonplaceholder.typicode.com/todos/{`{id}`}</td>
                </tr>
                <tr>
                    <td>Deleting a todo</td>
                    <td>DELETE</td>
                </tr>
            </table>
        </div>
    );
}

export default Exercise03;