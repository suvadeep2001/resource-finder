import React from "react";
import "../css/FrontendRoadmap.css";
import { Layout } from "../components/Layout";

const topics = [
  {
    name: "Internet and Web Fundamentals",
    resources: {
      free: "https://codedamn.com/learn/http-fundamentals",
      paid: "https://www.udemy.com/course/internet-and-web-development-fundamentals",
    },
  },
  {
    name: "Learn HTML",
    resources: {
      free: "https://www.udemy.com/course/html-online-course/",
      paid: "https://www.udemy.com/course/learn-html-for-beginners/",
    },
  },
  {
    name: "Learn CSS",
    resources: {
      free: "https://youtu.be/OXGznpKZ_sA",
      paid: "https://www.udemy.com/course/css-basics-to-advanced/",
    },
  },
  {
    name: "Learn JavaScript",
    resources: {
      free: "https://github.com/suvadeep2001/full-javascript-resources",
      paid: "https://www.udemy.com/course/the-complete-javascript-course/",
    },
  },
  {
    name: "Git and GitHub",
    resources: {
      free: "https://youtu.be/apGV9Kg7ics",
      paid: "udemy.com/course/github-ultimate/",
    },
  },
  {
    name: "Build simple projects",
    resources: {
      free: "https://www.geekshelp.in/p/html-css-projects_5.html",
      paid: "https://www.udemy.com/course/html-css-javascript-complete-course/",
    },
  },
  {
    name: "Basic Web Security",
    resources: {
      free: "https://www.youtube.com/playlist?list=PLYxzS__5yYQmaTY08Z93Kuy7Dg41G4rqX",
      paid: "https://www.udemy.com/course/web-application-security-for-absolute-beginners-no-coding/",
    },
  },
  {
    name: "Package Managers",
    resources: {
      free: "https://www.youtube.com/watch?v=kVJ0yoXCORE",
      paid: "https://www.udemy.com/course/npm-basics/",
    },
  },
  {
    name: "Advanced CSS",
    resources: {
      free: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2JYAoNE_-7sSWcIeO1A-xi",
      paid: "https://www.udemy.com/course/advanced-css-and-sass/",
    },
  },
  {
    name: "Learn SASS",
    resources: {
      free: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb",
      paid: "https://www.udemy.com/course/advanced-css-and-sass/",
    },
  },
  {
    name: "Tailwind CSS",
    resources: {
      free: "https://youtu.be/_9mTJ84uL1Q",
      paid: "https://www.udemy.com/course/complete-guide-of-tailwind-css-/",
    },
  },
  {
    name: "Learn Bootstrap",
    resources: {
      free: "https://youtu.be/Jyvffr3aCp0",
      paid: "https://www.udemy.com/course/bootstrap-5-the-complete-guide/",
    },
  },
  {
    name: "Learn React.js",
    resources: {
      free: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      paid: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    },
  },
  {
    name: "Firebase",
    resources: {
      free: "https://youtu.be/fgdpvwEWJ9M",
      paid: "https://www.udemy.com/course/firebase-course/",
    },
  },
  {
    name: "Build projects",
    resources: {
      free: "https://youtu.be/drF8HbnW87w",
      paid: "https://www.udemy.com/course/reactjs-firebase-project/",
    },
  },
  {
    name: "web performance optimization",
    resources: {
      free: "https://developer.mozilla.org/en-US/docs/Web/Performance",
      paid: "https://www.linkedin.com/learning/learning-enterprise-web-application-performance",
    },
  },
  {
    name: "JavaScript Data Structures and Algorithms",
    resources: {
      free: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP",
      paid: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
    },
  },
];

const FrontendRoadmap = () => {
  return (
    <Layout>
      <div className="FrontendRoadmap">
        <h1>Step by step guide to becoming a frontend developer in 2023</h1>
        <div className="Columns">
          {topics.map((topic, index) => (
            <div className="Column" key={index}>
              <h2>{topic.name}</h2>
              <a
                href={topic.resources.free}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="ResourceButton">Free Resources</button>
              </a>
              <a
                href={topic.resources.paid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="ResourceButton">Paid Resources</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FrontendRoadmap;
