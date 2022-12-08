const ToDo = (props) => {
    return (
        <ul>
            {
                props.todoList.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    );
}

export default ToDo;