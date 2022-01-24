import React, { FC } from "react";

const TodoForm: FC<any> = (props: any) => {
    const [value, setValue] = React.useState<any>("");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!value) return;
        props?.addTodo(value);
        setValue("");
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    className="input"
                    style={{ marginBottom: '5px' }}
                    value={value}
                    onChange={(e: any) => setValue(e.target.value)}
                />
                <button type="submit" style={{marginLeft:'4px'}}>Add Todo</button>
            </form>
        </React.Fragment>
    );
};
export default TodoForm;
