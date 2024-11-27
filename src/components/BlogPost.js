import React from 'react';
import { useParams } from 'react-router-dom';
import "../BlogPost.css";

const blogContent = {
    "richmond-robotics-champions": {
        title: "Richmond Robotics Students Crowned Middle, High School Champions",
        date: "November 27, 2024",
        content: `
            <p>
                Richmond's talented robotics students have achieved remarkable success, securing championships in both middle and high school categories at a recent competition. The event showcased exceptional engineering and programming skills from young innovators who worked tirelessly to design, build, and program their robots.
            </p>
            <p>
                <strong>The Journey to Victory</strong>
                <br />
                Competing against dozens of teams from across the region, Richmond's students demonstrated advanced problem-solving, teamwork, and creativity. Their robots tackled challenging tasks, including object manipulation, precision navigation, and dynamic decision-making.
            </p>
            <p>
                "This achievement is a testament to the hard work and dedication of our students," said one of the coaches. "It’s incredible to see them apply their knowledge and creativity to solve real-world challenges."
            </p>
            <p>
                <strong>About the Competition</strong>
                <br />
                The competition, held annually, invites teams to compete in designing and operating autonomous and driver-controlled robots. Richmond's teams have consistently performed well, with this year marking a significant milestone in their journey.
            </p>
            <p>
                <strong>Looking Ahead</strong>
                <br />
                With their recent victories, these students are now preparing to represent Richmond at the national level. Their journey continues as they refine their designs and strategies for even greater challenges ahead.
            </p>
            <p>
                Congratulations to all participants for their dedication and success!
            </p>
        `,
        image: "https://www.vmcdn.ca/f/files/richmondnews/images/community/wpra-high-school.jpg;w=960;h=640;bgcolor=000000", // Replace with an actual image URL
    },
    "richmond-robotics-provincial-champions": {
        title: "Richmond Robotics Team Crowned Provincial Champions, Heading to Worlds",
        date: "November 27, 2024",
        content: `
            <p>
                Richmond's robotics team has done it again! The talented group was crowned provincial champions and is now preparing to compete at the world stage.
            </p>
            <p>
                The provincial competition, held in Vancouver, brought together some of the best robotics teams in the region. Richmond's team demonstrated exceptional skills in both robot design and programming, earning them top honors.
            </p>
            <p>
                "This victory reflects the team's dedication and innovation," said one of the team coaches. "They’ve worked tirelessly to refine their robot and strategies, and it's paid off."
            </p>
            <p>
                <strong>What's Next?</strong>
                <br />
                With the provincial win under their belt, the team is now gearing up for the World Robotics Championships. The event will see teams from around the globe competing to showcase their robotics expertise.
            </p>
            <p>
                Congratulations to the Richmond robotics team for their hard-earned success and best wishes for their journey to the world stage!
            </p>
        `,
        image: "https://www.vmcdn.ca/f/files/richmondnews/images/community/wpra-provincials-2024-2.jpg;w=960;h=640;bgcolor=000000", // Replace with an actual image related to the event
    },
    "robotics-community-day-event": {
        title: "Robotics Community Day Event Inspires Future Innovators",
        date: "November 27, 2024", // Adjust the date to match the event's publication or occurrence
        content: `
            <p>
                The Robotics Community Day Event was an incredible gathering of young minds and technology enthusiasts, hosted to inspire and engage future innovators in the field of robotics.
            </p>
            <p>
                <strong>Highlights of the Event:</strong>
            </p>
            <ul>
                <li>Live demonstrations of cutting-edge robotics technologies</li>
                <li>Interactive workshops for students to learn and build robots</li>
                <li>Talks from industry leaders about the future of robotics</li>
            </ul>
            <p>
                "This event serves as a platform to encourage creativity and collaboration among students," said the event organizer. "Seeing young people engaged with robotics at such an early stage is truly inspiring."
            </p>
            <p>
                With participation from schools across the region, the event successfully showcased the importance of STEM education and how it can pave the way for groundbreaking innovations. 
            </p>
            <p>
                <strong>Looking Ahead:</strong>
                <br />
                Plans are already underway for next year's event, promising even more interactive sessions, competitions, and industry involvement. Stay tuned for updates!
            </p>
        `,
        image: "https://scontent.fyvr1-1.fna.fbcdn.net/v/t39.30808-6/464634752_445584945218357_926781972541972887_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=X-F7tO7VWD0Q7kNvgGYygSv&_nc_zt=23&_nc_ht=scontent.fyvr1-1.fna&_nc_gid=AJGhL3Dbn2K5Jx8OdqHOi93&oh=00_AYD61qrjm9F9uXRoQCYQiVjfzPDTQiZ0MAq0vk-9Ll6l7A&oe=674CB3E9", // Replace this with an actual image URL related to the event
    },
};


const BlogPost = () => {
    const { slug } = useParams();

    const post = blogContent[slug] || { title: "Post Not Found", content: "The requested post does not exist.", date: "", image: "" };

    return (
        <div className="blog-post-container">
            <div className="blog-post-header">
                <img src={post.image} alt={post.title} className="blog-post-image" />
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-date">{post.date}</p>
            </div>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
};

export default BlogPost;
