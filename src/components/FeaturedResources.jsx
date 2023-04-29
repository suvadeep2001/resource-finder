import React, { useEffect, useState } from "react";
import "../css/FeaturedResources.css";
import { motion } from "framer-motion";
import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import axios from "axios";

const FeaturedResources = () => {
  // const [resources, setResources] = useState([]);
  const resources = [
    {
      "id": "1",
      "title": "Click Here",
      "description": "Data Structures & Algorithms",
      "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      "url": "https://medium.com/@rd893918/perfect-roadmap-for-data-structure-and-algorithm-6062f2490431"
    }
  ]

  return (
    <section>
      <Heading>
        <u>Featured Resources</u>
      </Heading>

      <div className="resource-list">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            className="resource"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href={resource.url} target="__blank">
              <img src={resource.image} alt={resource.title} />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {resource.title}
              </motion.button>
            </a>
            <motion.p>{resource.description}</motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
