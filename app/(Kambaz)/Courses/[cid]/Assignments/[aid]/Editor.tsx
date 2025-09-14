export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                {/* Complete on your own */}
                <br /><br />
                <label htmlFor="wd-group">Assignment group </label>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
                <br /><br />
                <label htmlFor="wd-display-grade-as">Display grade as </label>
                <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                    <option value="PERCENTAGE">PERCENTAGE</option>
                    <option value="LETTER">LETTER</option>
                </select>
                <br /><br />
                <label htmlFor="wd-submission-type">Submission type </label>
                <select id="wd-submission-type" defaultValue="ONLINE">
                    <option value="ONLINE">Online</option>
                    <option value="IN_PERSON">In person</option>
                </select>
                <br /><br />
                <p>Online Entry Options</p>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
                <br />
                <br />

                <label htmlFor="wd-assign-to">Assign assignment to</label>
                <br />
                <input id="wd-assign-to" value="Everyone" />
                <br /><br />

                <label htmlFor="wd-due-date">Due </label>
                <input id="wd-due-date" type="date" /><br /><br />
                <br />

                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from </label>
                        <input id="wd-available-from" type="date" /><br /><br />
                        <br />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Available until </label>
                        <input id="wd-available-until" type="date" /><br /><br />
                        <br />
                    </td>
                </tr>
            </table>
        </div>
    );
}
