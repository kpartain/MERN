import React, { useState } from "react";

const ToDoListForm = (props) => {
    const noBullet = {
        listStyleType: "none",
    };
    let inlineItems = {
        display: "flex",
        alignItems: "center",
    };
    const [getList, setList] = useState([
        { name: "eat", status: false },
        { name: "sleep", status: false },
        { name: "pay taxes", status: false },
        { name: "die", status: false },
    ]);
    const [newTask, setNewTask] = useState("");
    const setUserInput = (e) => {
        e.preventDefault();
        setNewTask(e.target.value);
    };
    const addToList = (e) => {
        e.preventDefault();
        let newObject = { name: newTask, status: false };
        getList.push(newObject);
        setList(getList);
        setNewTask("");
    };
    const deleteThis = (index) => {
        var newList = getList.filter((value, i) => i !== index);
        setList(newList);
    };

    const checkedBox = (task) => {
        getList.map((eachTask) => {
            if (eachTask["name"] == task.task["name"]) {
                console.log("MATCH", eachTask);
                if (eachTask.status == true) {
                    return (eachTask.status = false);
                } else {
                    return (eachTask.status = true);
                }
            }
        });
        console.log(getList);
        setList(getList);
        refreshList();
    };
    const refreshList = () => {
        var tempList = getList;
        return setList(tempList);
    };
    return (
        <div>
            <ul style={noBullet} onChange={refreshList}>
                {getList.map((task, index) => (
                    <li key={index}>
                        <div style={inlineItems}>
                            <input
                                type="checkbox"
                                onChange={() => checkedBox({ task })}
                                defaultChecked={task["status"]}
                            />
                            <p
                                style={{
                                    textDecorationLine:
                                        task["status"] == true
                                            ? "line-through"
                                            : "none",
                                }}
                            >
                                {task["name"]} status: {task["status"]}
                            </p>
                            <button onClick={() => deleteThis(index)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={setUserInput}></input>
            <button onClick={addToList}>Add</button>
        </div>
    );
};

export default ToDoListForm;
