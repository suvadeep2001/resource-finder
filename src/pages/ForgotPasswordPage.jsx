import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPasswordPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();
  const toast = useToast();

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Forgot password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            forgotPassword(email)
              .then((response) => {
                // console.log(response);
                toast({
                  description: "Email Send Check Your Email",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .catch((error) => {
                console.log(error.message);
                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              });
          }}
        >
          <Stack spacing="6">
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
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  );
}
