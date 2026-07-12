"use client";

import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

export default function SinginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Datos del formulario:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        {/* Campo Email */}
        <label htmlFor="email">
          <Text as="div" size="2" mb="1" weight="bold">
            Email
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
                id="email"
                type="email"
                placeholder="example@email.com"
                radius="large"
                autoFocus
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

        {/* Campo Password */}
        <label htmlFor="password">
          <Text as="div" size="2" mb="1" weight="bold">
            Password
          </Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "Password is Required",
                value: true,
              },
              minLength: {
                message: "Password must be at least 8 characters",
                value: 8,
              },
            }}
            render={({ field }) => (
              <TextField.Root
                id="password"
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

        <Button type="submit" mt="4">
          Sign In
        </Button>
      </Flex>
    </form>
  );
}
