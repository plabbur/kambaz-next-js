// import Home from "./Home/page";
// import CoursesLayout from "./Layout";

// export default function Courses() {
//     return (
//         <div id="wd-courses">
//             <CoursesLayout params={{ cid: "1234" }}>
//                 <Home />
//             </CoursesLayout>
//         </div>
//     );
// }

import { redirect } from "next/navigation";
import CoursesLayout from "./Layout";
import Home from "./Home/page";

export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) {
    return (
        <CoursesLayout params={params}>
            <Home />
        </CoursesLayout>
    );
}
