import React, { useState } from "react";
const SecondVersion = (props) => {
    const [userInput, setUserInput] = useState("");
    const addNewListItem = (e) => {
        e.preventDefault();
        var copyList = toDoList;
        copyList.push({ task: userInput, completed: false });
        setToDoList(copyList);
        setUserInput("");
    };
    const [toDoList, setToDoList] = useState([]);
    const updateText = (e) => {
        setUserInput(e.target.value);
    };
    const deleteFromList = (e) => {
        e.preventDefault();
        // let newList = [...toDoList];
        var thisIndex = e.target.parentNode.id;
        // newList.splice(thisIndex, 1);
        let newList = toDoList.filter((todo, i) => thisIndex != i);
        setToDoList(newList);
    };

    const changeCheckedStatus = (e) => {
        let newList = [...toDoList];
        var thisIndex = e.target.parentNode.parentNode.id;
        var thisObject = newList[thisIndex];
        if (thisObject.completed === true) {
            thisObject.completed = false;
        } else {
            thisObject.completed = true;
        }
        setToDoList(newList);
    };

    const toDoListElements = toDoList.map((eachTask, index) => {
        return (
            <li key={index} id={index} className="inline-items">
                <p className={eachTask.completed ? "line-through" : "none"}>
                    <input
                        type="checkbox"
                        defaultChecked={eachTask.completed}
                        onChange={changeCheckedStatus}
                    />
                    {eachTask.task}
                </p>
                <button onClick={deleteFromList}>Delete</button>
            </li>
        );
    });

    return (
        <div>
            <p>Add a task: </p>
            <input
                type="text"
                value={userInput}
                onChange={updateText}
                id="listItemInput"
            />
            <button onClick={addNewListItem}>Add To List</button>
            <ul>{toDoListElements}</ul>
        </div>
    );
};

export default SecondVersion;
