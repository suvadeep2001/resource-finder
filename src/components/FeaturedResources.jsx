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
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server-d4j9.onrender.com/api/data"
        );
        setResources(response.data);
      } catch (error) {
        console.log("Error fetching resources:", error);
      }
    };

    fetchData();
  }, []);

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
