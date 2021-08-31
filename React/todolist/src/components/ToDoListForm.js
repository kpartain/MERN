import React, { useState } from "react";

const ToDoListForm = (props) => {
    const noBullet = {
        listStyleType: "none",
    };
    let inlineItems = {
        display: "flex",
        alignItems: "center",
    };
    let myList = [
        { name: "eat", status: false },
        { name: "sleep", status: false },
        { name: "pay taxes", status: false },
        { name: "die", status: false },
    ];
    const [getList, setList] = useState(myList);
    const [newTask, setNewTask] = useState("");
    const setUserInput = (e) => {
        e.preventDefault();
        setNewTask(e.target.value);
    };
    const addToList = (e) => {
        e.preventDefault();
        let newObject = { name: newTask, status: false };
        myList.push(newObject);
        setList(myList);
        setNewTask("");
    };
    const deleteThis = (index) => {
        var newList = myList.filter((value, i) => i !== index);
        myList = newList;
        setList(myList);
    };

    const checkedBox = (task) => {
        let tempList = myList;
        console.log("ORIG", task.task);
        tempList.map((eachTask) => {
            if (eachTask["name"] == task.task["name"]) {
                console.log("MATCH", eachTask);
                eachTask.status == true
                    ? (eachTask.status = false)
                    : (eachTask.status = true);
                console.log("AFTER", eachTask);
            }
        });
        console.log(tempList);
        myList = tempList;
        return setList(myList);
    };
    return (
        <div>
            <ul style={noBullet}>
                {getList.map((task, index) => (
                    <li key={index}>
                        <div style={inlineItems}>
                            <input
                                id={index}
                                type="checkbox"
                                onClick={() => checkedBox({ task })}
                                defaultChecked={task["status"]}
                            />
                            <p
                                style={{
                                    textDecorationLine:
                                        task.status == true
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
