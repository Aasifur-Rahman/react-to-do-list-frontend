import { useState } from "react";
import BottomNav from "../../Shared/BottomNav/BottomNav";
import TopNav from "../../Shared/TopNav/TopNav";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "../../../Firebase/firebase.config";
const MyTasks = () => {
  const [todoArray, setTodoArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "status/to-do");
    const snapShot = await get(dbRef);
    if (snapShot.exists()) {
      setTodoArray(Object.values(snapShot.val()));
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <TopNav></TopNav>
      <div className="max-w-screen-sm mx-auto">
        <button onClick={fetchData}>Display data</button>
        <ul>
          {todoArray.map((item, index) => {
            <li key={index}>
              {item.title} : {item.content}
            </li>;
          })}
        </ul>
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default MyTasks;
