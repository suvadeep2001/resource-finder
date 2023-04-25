import React from 'react';
import '../css/FeaturedResources.css'

const FeaturedResources = () => {
  const resources = [
    {
      id: 1,
      title: 'Click Here',
      description: 'Data Structure & Algorithms',
      image: 'https://plus.unsplash.com/premium_photo-1668461477148-3624cd4f7b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
      url: 'url-to-resource',
    },
    {
      id: 2,
      title: 'Resource 2',
      description: 'Frontend Web Development',
      image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: 'url-to-resource',
    },
    {
      id: 3,
      title: 'Resource 3',
      description: 'Backend Development',
      image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: 'url-to-resource',
    },
  ];

  return (
    <section>
      <h2>Featured Resources</h2>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource">
            <a href={resource.url} target='__blank'>
              <img src={resource.image} alt={resource.title} />
              <button>{resource.title}</button>
            </a>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
