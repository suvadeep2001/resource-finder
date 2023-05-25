import React from "react";
import "../css/webdev.css";
import { Layout } from "../components/Layout";
// TopWebDevProjectsForPlacements

const projects = [
  {
    title: "Full Stack Social Media Application",
    description: [
      "Implement a secure user registration and authentication system to allow users to create accounts, log in, and protect user data.",
      "Provide users with the ability to create and customize their profiles. Users should be able to add profile pictures, update personal information, and manage privacy settings.",
      " Design a news feed where users can view and interact with posts from other users they follow. The news feed should display posts in a chronological or algorithmic order, allowing users to like, comment, and share posts.",
      "Enable users to create and share posts containing text, images, videos, or other media. Users should have the ability to edit and delete their own posts.",
      "Implement a friend or follow system to allow users to connect with each other. Users should be able to search for other users, send friend requests, and accept or decline requests.",
      "Notify users about relevant activities, such as new friend requests, likes, comments, or mentions. Implement real-time notifications to enhance the user experience.",
      "Provide users with the ability to send private messages and engage in real-time chat conversations with their friends or connections.",
      "Create a responsive user interface that adapts to different screen sizes and devices, providing a seamless experience on desktop, mobile, and tablet devices.",
    ],
    link: "https://youtu.be/K8YELRmUb5o",
  },
  {
    title: "Project 2",
    description: [
      "Bullet point 1 for Project 2",
      "Bullet point 2 for Project 2",
      "Bullet point 3 for Project 2",
    ],
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: [
      "Bullet point 1 for Project 3",
      "Bullet point 2 for Project 3",
      "Bullet point 3 for Project 3",
    ],
    link: "https://example.com/project3",
  },
  // Add more projects here
];

const TopWebDevProjectsForPlacements = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="heading">Top Web Dev Projects For Placements</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>
                {" "}
                <u>{project.title}</u>
              </h2>
              <ul>
                {project.description.map((bulletPoint, i) => (
                  <li key={i}>{bulletPoint}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">Demo of this Project</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopWebDevProjectsForPlacements;
