/*
    1.Heading name -in ToDolist
    2.Add input field and then take value={activity} and make a     variable to store the form data here we use "useState" to manage    the state
    3.Now we can not type any text so to solve this---
          onChange={ (e) =>{
                    setActivity(e.target.value)
                }}

    4.Then add a button and add onClick :" addActivity" .Now create     function addActivity
    5.create a list 
    6.Now after push the button the value meed to add to the list   item so in the addActivity function user setListData 
       ==>here is the kahini...ai khane direct function call na kore atke age onno akta var a rekhe thn print korle direct output pawa jay.. 
       {
        const updatedList = [...listData,Activity]
        console.log(updatedList);
        return updatedList;
       }        
*/