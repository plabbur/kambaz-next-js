import Link from "next/link"

const assignments = [
    {
        cid: "1234",
        aid: "123",
        name: "A1 - ENV + HTML",
        description: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 points",
        points: 100
    },
    {
        cid: "1234",
        aid: "124",
        name: "A2 - CSS + BOOTSTRAP",
        description: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 points",
        points: 100
    },
    {
        cid: "1234",
        aid: "125",
        name: "A3 - JAVASCRIPT + REACT",
        description: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 points",
        points: 100
    }
]

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                {assignments.map((assignment) => (
                    <li className="wd-assignment-list-item">
                        <Link href={`/Courses/${assignment.cid}/Assignments/${assignment.aid}`} className="wd-assignment-link" >
                            {assignment.name}
                        </Link>
                        <p>{assignment.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
