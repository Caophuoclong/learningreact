const root = document.createElement("div");
document.body.appendChild(root);
const courses = [
    {
        name: "HTML, CSS"
    },
    {
        name: "Responsive web design"
    },
    {
        name: "React js"
    }
]

const ul = <React.Fragment>
    <ul>
        {
            courses.map((value, index) => <li key={index}>
                {value.name}
            </li>)
        }
    </ul>
</React.Fragment>

ReactDOM.render(ul, root);