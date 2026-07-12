"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

export default function SingupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Datos del formulario:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        {/* Campo Name */}
        <label htmlFor="name">
          <Text as="div" size="2" mb="1" weight="bold">
            Name:
          </Text>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                message: "Name is Required",
                value: true,
              },
            }}
            render={({ field }) => (
              <TextField.Root
                type="text"
                placeholder="Your name"
                radius="large"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            )}
          />
        </label>

        {errors.name && (
          <Text size="1" color="red">
            {errors.name.message}
          </Text>
        )}

        {/* Campo Email */}
        <label htmlFor="email">
          <Text as="div" size="2" mb="1" weight="bold">
            Email:
          </Text>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "Email is Required",
                value: true,
              },
            }}
            render={({ field }) => (
              <TextField.Root
                type="email"
                placeholder="example@email.com"
                radius="large"
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            )}
          />
        </label>

        {errors.email && (
          <Text size="1" color="red">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">
          <Text as="div" size="2" mb="1" weight="bold">
            Password:
          </Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "Password is Required",
                value: true,
              },
            }}
            render={({ field }) => (
              <TextField.Root
                type="password"
                placeholder="********"
                radius="large"
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            )}
          />
        </label>

        {errors.password && (
          <Text size="1" color="red">
            {errors.password.message}
          </Text>
        )}

        <label htmlFor="Password">
          <Text as="div" size="2" mb="1" weight="bold">
            Confirm Password:
          </Text>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: {
                message: "Confirm Password is Required",
                value: true,
              },
            }}
            render={({ field }) => (
              <TextField.Root
                type="password"
                placeholder="********"
                radius="large"
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            )}
          />
        </label>

        {errors.confirmPassword && (
          <Text size="1" color="red">
            {errors.confirmPassword.message}
          </Text>
        )}

        <Button>Sing Up</Button>
      </Flex>
    </form>
  );
}
