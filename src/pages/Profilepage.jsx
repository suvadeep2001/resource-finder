import React from "react";
import { Layout } from "../components/Layout";
import { Badge, Code, chakra, Container, Heading } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useAuth } from "../contexts/AuthContext";

import "../css/Profile.css";

export default function Profilepage() {
  const { currentUser } = useAuth();
  return (
    <Layout>
      <Heading>
        Profile page
        {/* <Badge colorScheme='green' fontSize='lg' mx={4}>
      Protected Page
    </Badge> */}
      </Heading>

      <Container maxW="container.lg" overflowX="auto">
        <chakra.pre className="profile-info">
          <div className="button-container">
            <button className="profile-button">Your Uid:</button>
            <span className="profile-value">{currentUser.uid}</span>
          </div>

          <div className="button-container">
            <button className="profile-button">Your Name:</button>
            <span className="profile-value">{currentUser.displayName}</span>
          </div>

          <div className="button-container">
            <button className="profile-button">Your Email Id:</button>
            <span className="profile-value">{currentUser.email}</span>
          </div>
        </chakra.pre>
      </Container>
    </Layout>
  );
}
