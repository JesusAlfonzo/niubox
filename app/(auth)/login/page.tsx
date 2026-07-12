import { Container, Heading, Card, Flex, Text, Link } from "@radix-ui/themes";
import SinginForm from "@/components/auth/SinginForm";
import NavLink from "next/link";

export default function RegisterPage() {
  return (
    <Container size="1" height="100%" className="p-3 md:p-0">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full" size="4">
          <Heading>Sing In</Heading>
          <SinginForm></SinginForm>
          <Flex justify="between" my="4">
            <Text>Dont have an account ?</Text>
            <Link asChild>
              <NavLink href="register">Sing Up</NavLink>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}
