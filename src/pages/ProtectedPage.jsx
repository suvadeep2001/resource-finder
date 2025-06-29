import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Heading, Container, Badge, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import API_URL from "../config";

export default function ProtectedPage() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setResources(response.data);
      } catch (error) {
        console.log("Error fetching resources:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredResources = resources.filter((resource) =>
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Heading fontFamily="'Lobster', cursive">
        <u>All Resources</u>
      </Heading>
      <Input
        type="text"
        placeholder="Search your resources"
        value={searchTerm}
        onChange={handleSearch}
        mt={4}
        mb={8}
      />
      <div className="resource-list">
        {filteredResources.map((resource) => (
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
