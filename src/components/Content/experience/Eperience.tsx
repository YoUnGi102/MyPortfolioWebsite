import data from "../../../data"
import WorkCard, { WorkItem } from "./WorkCard";

const Experience = () => {
    return <>
        {data.workExperience.map((work) => <WorkCard item={work as WorkItem}/>)}
    </>
}

export default Experience;