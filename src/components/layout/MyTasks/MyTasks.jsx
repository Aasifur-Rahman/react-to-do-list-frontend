import BottomNav from "../../Shared/BottomNav/BottomNav";
import TopNav from "../../Shared/TopNav/TopNav";

const MyTasks = () => {
  return (
    <div>
      <TopNav></TopNav>
      <div className="max-w-screen-sm mx-auto">
        <h1>This is Tasks</h1>
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default MyTasks;
