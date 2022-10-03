import React from "react";
import {useSelector} from "react-redux"
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <ul>
        Users!
        <ul>
          {users.map((item,i)=>(
            <li>
              {item.username}
            </li>
          ))}
        </ul>
        {/* In addition, display the total number of users curently in the store */}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
