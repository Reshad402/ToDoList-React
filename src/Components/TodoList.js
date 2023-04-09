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

    const removeActivity = function removeActivity(i){
        const updateData = listData.filter((element , id)=>{
            return i!=id;
        })
        setListData(updateData)
    }

    const removeAll = function removeAll(){
        setListData([])
    }
    return (
        <>
        <div className='container'>
            <div className="header">ToDo-List</div>
            <input type="text" placeholder='Add Activity' value={Activity} onChange={(e) =>{
                setActivity(e.target.value)
            }}/>
            <button onClick={addActivity}>Add</button>
        </div>

        <div className='container2'>
        <p className='List-heading'>Here is your list:</p>
        {listData !==[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                    <div className="btn-position">
                        <button onClick={()=>removeActivity(i)}>Remove(-)</button>
                    </div>
                </p>
                </>
            )
        })}
        {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
        </div>
        </>

    );
};

export default TodoList;