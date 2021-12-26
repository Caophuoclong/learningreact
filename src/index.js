const root = document.createElement("div");
document.body.appendChild(root);
const courses = [
    {
        "id": 1,
        "title": "JavaScript Cơ Bản",
        "slug": "javascript-co-ban",
        "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
        "thumbnail": "courses/1.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "0SJE9dYdpps",
        "preview_video": null,
        "language": "javascript",
        "syntax_highlight": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 30,
        "students_count": 60893,
        "deleted_at": null,
        "created_at": "2020-06-10T14:23:13.000000Z",
        "updated_at": "2021-12-26T11:26:12.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png",
        "preview_video_cdn": ""
    },
    {
        "id": 7,
        "title": "Kiến Thức Nhập Môn",
        "slug": "lessons-for-newbie",
        "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
        "thumbnail": "courses/7.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "M62l1xA5Eu8",
        "preview_video": null,
        "language": null,
        "syntax_highlight": null,
        "level": "Trình độ cơ bản",
        "priority": 0,
        "students_count": 45514,
        "deleted_at": null,
        "created_at": "2020-02-10T14:23:13.000000Z",
        "updated_at": "2021-12-26T11:06:46.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png",
        "preview_video_cdn": ""
    },
    {
        "id": 3,
        "title": "Responsive Với Grid System",
        "slug": "responsive-web-design",
        "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
        "thumbnail": "courses/3.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "uz5LIP85J5Y",
        "preview_video": null,
        "language": "html",
        "syntax_highlight": "language-html",
        "level": "Trình độ cơ bản",
        "priority": 20,
        "students_count": 17068,
        "deleted_at": null,
        "created_at": "2020-05-10T14:23:13.000000Z",
        "updated_at": "2021-12-26T10:47:20.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png",
        "preview_video_cdn": ""
    },
    {
        "id": 6,
        "title": "Node & ExpressJS",
        "slug": "nodejs",
        "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
        "thumbnail": "courses/6.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "z2f7RHgvddc",
        "preview_video": null,
        "language": "javascript",
        "syntax_highlight": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 32,
        "students_count": 14914,
        "deleted_at": null,
        "created_at": "2020-08-01T14:23:13.000000Z",
        "updated_at": "2021-12-26T10:07:13.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png",
        "preview_video_cdn": ""
    },
    {
        "id": 5,
        "title": "HTML, CSS Tips & Tricks",
        "slug": "html-css-tutorials",
        "description": "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
        "thumbnail": "courses/5.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "nB6cJh_bb1U",
        "preview_video": null,
        "language": "html",
        "syntax_highlight": "language-html",
        "level": "Trình độ cơ bản",
        "priority": 40,
        "students_count": 11260,
        "deleted_at": null,
        "created_at": "2020-03-10T14:23:13.000000Z",
        "updated_at": "2021-12-26T10:39:35.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png",
        "preview_video_cdn": ""
    },
    {
        "id": 4,
        "title": "App \"Đừng Chạm Tay Lên Mặt\"",
        "slug": "tool-canh-bao-so-len-mat",
        "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
        "thumbnail": "courses/4/61a9e9e701506.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "r6GWbQL-qwA",
        "preview_video": null,
        "language": "javascript",
        "syntax_highlight": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 50,
        "students_count": 4026,
        "deleted_at": null,
        "created_at": "2020-01-10T14:23:13.000000Z",
        "updated_at": "2021-12-26T08:07:51.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/4/61a9e9e701506.png",
        "preview_video_cdn": ""
    },
    {
        "id": 14,
        "title": "Làm việc với Terminal & Ubuntu",
        "slug": "windows-terminal-wsl",
        "description": "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
        "thumbnail": "courses/14/61a89fb15f2fb.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "7ppRSaGT1uw",
        "preview_video": null,
        "language": "javascript",
        "syntax_highlight": "language-shell",
        "level": "Trình độ trung bình",
        "priority": 51,
        "students_count": 714,
        "deleted_at": null,
        "created_at": "2021-12-01T12:08:12.000000Z",
        "updated_at": "2021-12-26T10:55:00.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/14/61a89fb15f2fb.png",
        "preview_video_cdn": ""
    }
]

// Course Item
function Course({ image, title, description, students_count, onClick }) {
    return (
        <div className="course-item">
            <img className="course-image" src={image} alt={title} />
            <h2 className="course-title" style={{ cursor: "pointer" }} onClick={() => onClick(title)}>{title}</h2>
            <p className="course-description">{description}</p>
            <small className="course-students-count">{students_count}</small>

        </div>
    )
}


// Post Item
function PostItem({ title, image, description, published }) {
    return (
        <div className="post-item">
            <img src={image} alt={title} />
            <h2 className="post-title">{title}</h2>
            <p className="post-description">{description}</p>
            <p className="post-published">{published}</p>
        </div>
    )
}

// Form
const Form = {
    Input() {
        return <input type="text" />
    },
    Checkbox() {
        return <input type="checkbox" />
    }

}

function Button({ title, href, onClick }) {
    let Component = "button";
    const props = {};
    if (href) {
        Component = "a";
        props.href = href
    }
    if (onClick) {
        props.onClick = onClick;
    }
    return (
        <Component {...props}>{title}</Component>
    )

}


function App() {
    const handleClick = (title) => {
        console.log(title);
    }
    const type = "Checkbox"
    const Component = Form[type];
    return (
        <div className="app">
            <Component />
            <Button
                title="Click me!"
                // href="http://localhost:5500" 
                onClick={handleClick} />
            <div className="posts-list">
                <PostItem title="phuoclong" image="..." description="phuoclong1" published="Hom Qua" />
                <PostItem title="phuoclong" image="..." description="phuoclong1" published="Hom Qua" />
                <PostItem title="phuoclong" image="..." description="phuoclong1" published="Hom Qua" />
            </div>
            <div className="courses-list">
                {courses.map((course, index) => <Course key={index} onClick={handleClick} title={course.title} image={course.thumbnail_cdn} description={course.description} students_count={course.students_count} />)}
            </div>

        </div>
    )
}
ReactDOM.render(<App />, root);