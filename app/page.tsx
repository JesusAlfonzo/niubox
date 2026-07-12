import { Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";
export default function Home() {
  return (
    <main>
      <Button>
        <BookmarkIcon /> login
      </Button>
      <h1>Hola , Bienvenido a Niubox</h1>
      <p> Esta es la pagina de bienvenida!</p>
    </main>
  );
}
