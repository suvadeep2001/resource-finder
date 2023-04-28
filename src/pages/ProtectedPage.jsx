import { Heading, Container, Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import axios from "axios";

export default function ProtectedPage() {
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
    <Layout>
      <Heading>
        <u>All Resources</u>
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
    </Layout>
  );
}
