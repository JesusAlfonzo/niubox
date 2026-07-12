"use client";
import { Flex, TextField, Button } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function RegisterForm() {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">Name:</label>
      <TextField.Root
        type="email"
        placeholder="Your name"
        radius="large"
      >
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Email:</label>
      <TextField.Root
        type="email"
        placeholder="example@email.com"
        radius="large"
      >
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="password">Password:</label>
      <TextField.Root type="password" placeholder="********" radius="large">
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="password">Confirm Password:</label>
      <TextField.Root type="password" placeholder="********" radius="large">
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Button>Sing Up</Button>
    </Flex>
  );
}
