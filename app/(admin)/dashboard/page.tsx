import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import SignoutButton from "@/components/auth/SignoutButton";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido a Niubox, {session?.user.name}</p>
      <SignoutButton></SignoutButton>
    </div>
  );
}
