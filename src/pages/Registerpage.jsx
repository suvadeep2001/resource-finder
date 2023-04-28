import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";

export default function Registerpage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const { register, signInWithGoogle } = useAuth();

  const mounted = useMounted();

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Register
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();

            if (!name || !email || !password) {
              toast({
                description: "All fields are mandatory",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
              return;
            }

            setIsSubmitting(true);
            
            try {
              await register(name,email, password);
              toast({
                description: "Please check your email to verify your account",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            } catch (error) {
              console.log(error.message);
              toast({
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } finally {
              if (mounted.current) {
                setIsSubmitting(false);
              }
            }
          }}
        >
          <Stack spacing="6">

          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="md"
            >
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="blue"
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((user) => console.log(user))
              .catch((error) => console.log(error))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
