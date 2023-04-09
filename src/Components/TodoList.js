import React, { useState } from 'react';

const TodoList = () => {
    const [Activity,setActivity] = useState("");

    const [listData,setListData] = useState([]);

    const addActivity = function addActivity(){
        // setListData([...listData,Activity]);
        // console.log(listData)
            setListData((list =>{
                const updatedList = [...list,Activity]
                console.log(updatedList);
                setActivity("")
                return updatedList;
            }))

    }
    return (
        <div className='container'>
            <div className="header">ToDo-List</div>
            <input type="text" placeholder='Add Activity' value={Activity} onChange={(e) =>{
                setActivity(e.target.value)
            }}/>
            <button onClick={addActivity}>Add</button>
        </div>
    );
};

export default TodoList;