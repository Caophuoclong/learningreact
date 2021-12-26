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

function PostItem() {
    return (
        <div className="post-item">
            <img src="..." alt="..." />
            <h2 className="post-title">Long dep trai</h2>
            <p className="post-description">Long dep trai qua troi qua dat</p>
            <p className="post-publisher">5 ngay truoc</p>
        </div>
    )
}

const app = (
    <div className="posts-list">
        <PostItem />
        <PostItem />
    </div>
)

ReactDOM.render(app, root);