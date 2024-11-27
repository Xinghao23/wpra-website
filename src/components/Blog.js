import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "Richmond Team Crowed Champions",
        description: "The Robotics Community Day Event was an incredible gathering of young minds and technology enthusiasts.",
        image: "https://scontent.fyvr1-1.fna.fbcdn.net/v/t39.30808-6/464634752_445584945218357_926781972541972887_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=X-F7tO7VWD0Q7kNvgGYygSv&_nc_zt=23&_nc_ht=scontent.fyvr1-1.fna&_nc_gid=AJGhL3Dbn2K5Jx8OdqHOi93&oh=00_AYD61qrjm9F9uXRoQCYQiVjfzPDTQiZ0MAq0vk-9Ll6l7A&oe=674CB3E9", // Replace with actual images
        link: "/blog/robotics-community-day-event",
        date: "November 20, 2024"
    },
    {
        id: 2,
        title: "Richmond Robotics Team Crowned Provincial Champions",
        description: "Three teams from a Richmond robotics academy are heading to the world championships after winning at provincials earlier this month.",
        image: "https://www.vmcdn.ca/f/files/richmondnews/images/community/wpra-provincials-2024-2.jpg;w=960;h=640;bgcolor=000000", // Replace with actual images
        link: "/blog/richmond-robotics-provincial-champions",
        date: "November 15, 2024"
    },
    {
        id: 3,
        title: "Richmond Robotics Students Crowned Champions",
        description: "Richmond-based Western Pacific Robotics Academy's teams achieve remarkable success in recent competitions.",
        image: "https://www.vmcdn.ca/f/files/richmondnews/images/community/wpra-high-school.jpg;w=960;h=640;bgcolor=000000", // Replace with an actual image related to the event
        link: "/blog/richmond-robotics-champions",
        date: "December 19, 2023"
    },
];

const Blog = () => {
    return (
        <div className="blog-container">
            <h1>Latest Blog Posts</h1>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h2 className="blog-title">{post.title}</h2>
                            <span className="blog-date">{post.date}</span>
                            <p className="blog-description">{post.description}</p>
                            <Link to={post.link} className="blog-read-more">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
