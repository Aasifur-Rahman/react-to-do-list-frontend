import Workflow from "./Workflow";
import Projects from "./Projects";
import Labels from "./Labels";
import Status from "./Status";

const DashBody = () => {
  return (
    <div className="font-poppins ">
      <div>
        <Workflow></Workflow>

        <Projects></Projects>

        <Labels></Labels>

        <Status></Status>
      </div>
    </div>
  );
};

export default DashBody;
