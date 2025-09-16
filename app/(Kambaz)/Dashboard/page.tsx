import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image alt="React JS" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5678" className="wd-dashboard-course-link">
                        <Image alt="Node JS" src="/images/nodejs.png" width={200} height={150} />
                        <div>
                            <h5> CS5678 Node JS </h5>
                            <p className="wd-dashboard-course-title">
                                Backend Development with Node
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/9101" className="wd-dashboard-course-link">
                        <Image alt="Python" src="/images/python.png" width={200} height={150} />
                        <div>
                            <h5> CS9101 Python </h5>
                            <p className="wd-dashboard-course-title">
                                Programming Fundamentals
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1121" className="wd-dashboard-course-link">
                        <Image alt="Java" src="/images/java.svg" width={200} height={150} />
                        <div>
                            <h5> CS1121 Java </h5>
                            <p className="wd-dashboard-course-title">
                                Object-Oriented Programming
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/3141" className="wd-dashboard-course-link">
                        <Image alt="HTML, CSS & Responsive Design" src="/images/htmlcss.webp" width={200} height={150} />
                        <div>
                            <h5> CS3141 Web Dev </h5>
                            <p className="wd-dashboard-course-title">
                                HTML, CSS & Responsive Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/5161" className="wd-dashboard-course-link">
                        <Image alt="SQL & Data Management" src="/images/database.png" width={200} height={150} />
                        <div>
                            <h5> CS5161 Databases </h5>
                            <p className="wd-dashboard-course-title">
                                SQL & Data Management
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/7181" className="wd-dashboard-course-link">
                        <Image alt="AI & Predictive Models" src="/images/machinelearning.jpg" width={200} height={150} />
                        <div>
                            <h5> CS7181 Machine Learning </h5>
                            <p className="wd-dashboard-course-title">
                                AI & Predictive Models
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    );
}
