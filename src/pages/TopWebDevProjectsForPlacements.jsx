import React, { useState } from "react";
import "../css/webdev.css";
import { Layout } from "../components/Layout";

const projectsPerPage = 2; // Number of projects to display per page

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
    title: "Full Stack E-commerce Application",
    description: [
      "User Registration and Authentication: Allow users to create accounts, log in, and manage their profiles. Implement authentication mechanisms to protect user data and secure the application.",

      "Product Catalog: Build a comprehensive catalog to showcase your products. Include features such as product images, descriptions, pricing, availability, and categorization for easy navigation.",

      "Shopping Cart: Implement a shopping cart functionality that allows users to add products, modify quantities, and proceed to checkout. The cart should persist across sessions and enable users to review and edit their selections.",

      "Payment Gateway Integration: Integrate a secure and reliable payment gateway to handle transactions. Support popular payment methods such as credit/debit cards, digital wallets, and other relevant options.",

      "Order Management: Provide users with the ability to view their order history, track shipment status, and manage returns or cancellations.",

      "Search Functionality: Implement a robust search feature to enable users to find products quickly. Include filters, sorting options, and relevant suggestions to enhance the search experience.",

      "Reviews and Ratings: Allow users to rate and review products they have purchased. User-generated feedback can help build trust and influence purchasing decisions.",

      "Wishlist: Enable users to create and manage wishlists, allowing them to save products for future reference or purchase.",

      "Responsive Design: Create a responsive and mobile-friendly application that provides an optimal user experience across various devices and screen sizes.",

      "Social Media Integration: Allow users to share products or their purchases on social media platforms. Integrating social media features can help increase visibility and drive engagement.",

      "Admin Dashboard: Develop a robust admin dashboard to manage product listings, user accounts, orders, and other administrative tasks. Provide role-based access control to different admin users.",

      "Shipping and Tax Calculation: Integrate shipping providers' APIs to calculate accurate shipping costs based on location and package details. Implement tax calculation based on regional or international tax laws.",
    ],
    link: "https://www.youtube.com/watch?v=QfxuvdmDj7Y",
  },
  {
    title: "Full Stack Online Booking App Application",
    description: [
      "User Registration and Authentication: Allow users to create accounts, sign in securely, and manage their profiles. This feature ensures secure access to the app and personalized experiences for users.",

      "Booking Management: Enable users to search for available services, view details, and make bookings. Implement features such as date/time selection, location-based searches, and filters to help users find suitable options.",

      "Real-time Availability and Scheduling: Provide real-time updates on service availability, allowing users to see current availability and make bookings accordingly. Incorporate a scheduling system that prevents double bookings and conflicts.",

      "Payment Integration: Integrate secure payment gateways to facilitate online transactions. Offer various payment options such as credit cards, digital wallets, or other popular payment methods to cater to a wider audience.",

      "Notifications and Reminders: Send notifications to users about booking confirmations, reminders, or updates. Use email, SMS, or push notifications to keep users informed about their bookings and any changes.",

      "Reviews and Ratings: Allow users to leave reviews and ratings for the services they have booked. This feature helps build trust, provides feedback to service providers, and assists other users in making informed decisions.",

      "User Dashboard: Create a personalized dashboard for users to manage their bookings, view past transactions, update preferences, and access relevant information. Make it easy for users to track and manage their activities within the app.",

      "Service Provider Management: Develop an interface for service providers to manage their availability, update service details, and handle bookings. This feature enables seamless communication and coordination between users and service providers.",

      "Admin Panel: Build an administrative panel for app administrators to manage user accounts, service providers, bookings, and other app-related activities. This panel helps monitor and maintain the overall functioning of the application.",

      "Analytics and Reports: Incorporate analytics and reporting capabilities to gather insights about user behavior, popular services, revenue, and other key metrics. This data can be used to make data-driven decisions and improve the app's performance.",

      "Social Media Integration: Allow users to share their bookings or reviews on social media platforms. Integrating social media features can help promote the app and increase user engagement.",
    ],
    link: "https://youtu.be/_ou3KWsnZTI",
  },
  {
    title: "Full Stack Messaging Application",
    description: [
      "User Authentication and Authorization: Implement a secure user registration and login system to authenticate users and manage their access rights. This ensures that only authorized users can access the messaging application and their respective data.",

      "Real-Time Messaging: Enable real-time messaging functionality using technologies like WebSockets or a messaging protocol such as MQTT. This allows users to send and receive messages instantly without manually refreshing the page.",

      "User Profiles: Allow users to create and manage their profiles. Users should be able to update their profile picture, status, and other relevant information.",

      "Contacts and Friend Lists: Implement a feature for users to manage their contacts or friends list. This allows users to easily find and connect with their friends within the messaging application.",

      "Group Chats: Enable users to create and participate in group chats. This feature allows multiple users to engage in a conversation simultaneously, making it ideal for team collaborations or social interactions.",

      "Multimedia Messaging: Support sending and receiving various media types, such as images, videos, and documents. This feature enhances the messaging experience and allows users to share rich content.",

      "Push Notifications: Implement push notifications to alert users about new messages or updates, even when they are not actively using the messaging application. Push notifications help improve user engagement and ensure timely message delivery.",

      "Emojis and Reactions: Enhance user expression by incorporating emojis and reactions into messages. This feature allows users to convey emotions and engage in interactive conversations.",

      "Notifications and Settings: Provide users with options to customize their notification preferences and application settings. This includes settings for sound alerts, message preview, privacy options, and other personalization features.",
    ],
    link: "https://youtu.be/MJzbJQLGehs",
  },
  {
    title: "Full Stack Video YouTube Streaming Application",
    description: [
      "User Authentication: Implement a user authentication system to allow users to create accounts, log in, and manage their profiles. This feature will also enable personalized recommendations and allow users to subscribe to channels or playlists.",

      "Video Streaming: Enable smooth video streaming by implementing a robust video player that supports adaptive streaming, multiple resolutions, and buffering capabilities. Consider using technologies like HLS (HTTP Live Streaming) or DASH (Dynamic Adaptive Streaming over HTTP) for efficient video delivery.",

      "Video Uploading: Allow users to upload their own videos to the platform. Implement a file upload mechanism and integrate with a cloud storage service (such as Amazon S3 or Google Cloud Storage) to store and manage the uploaded videos.",

      "Video Recommendation Engine: Implement a recommendation system that suggests relevant videos to users based on their viewing history, preferences, and interactions with the platform. Consider using machine learning techniques, such as collaborative filtering or content-based filtering, to improve the accuracy of recommendations.",

      "Search Functionality: Implement a search feature that allows users to find videos based on keywords, titles, or tags. Consider integrating a search engine or using technologies like Elasticsearch to enable fast and efficient search capabilities.",

      "User Interaction: Provide features for users to like, dislike, comment on, and share videos. Implement a notification system to inform users about new comments, replies, or updates related to their subscribed channels.",

      "Playlists and Channels: Allow users to create playlists and manage their own channels. Provide options to customize channel branding, upload channel cover images, and manage video playlists.",

      "Social Sharing: Enable users to share videos or playlists on social media platforms like Facebook, Twitter, or Instagram. Implement social media integration to facilitate easy sharing and increase the visibility of your application.",

      "Live Streaming: Consider adding live streaming functionality to allow users to broadcast live videos. Implement technologies such as WebRTC or RTMP for real-time video streaming and chat integration to enable viewer interaction during live broadcasts.",

      "Responsive Design: Ensure that your application is responsive and compatible with various devices and screen sizes. Optimize the user interface for mobile devices, tablets, and desktops to provide a seamless viewing experience across platforms.",
    ],
    link: "https://youtu.be/8HTYXNLLLSQ",
  },
];

const TopWebDevProjectsForPlacements = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationGap = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startPage = Math.max(1, currentPage - paginationGap);
  const endPage = Math.min(currentPage + paginationGap, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <Layout>
      <div className="container">
        <h1 className="heading">
          <u>Top Web Dev Projects For Placements</u>
        </h1>
        <div className="project-list">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>
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
        <div className="pagination">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`page-button ${
                currentPage === pageNumber ? "active" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
              style={{ margin: "5px" }}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopWebDevProjectsForPlacements;
