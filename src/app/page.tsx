
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Books } from "@/components/Books";
import { Class } from "@/components/Class";
import { Business } from "@/components/Business";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Profile />
      <Books />
      <Class />
      <Business />
      <Contact />
    </main>
  );
}
