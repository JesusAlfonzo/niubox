"use client";
import { authClient } from "@/lib/auth-clients";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@radix-ui/themes";

export default function SignoutButton() {
  const router = useRouter();

  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Button>Sign Out</Button>
      </form>
    </div>
  );
}
