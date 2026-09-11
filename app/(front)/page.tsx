import Hero from "@/components/shared/sections/hero";
import Stats from "@/components/shared/sections/stats";
import Featured from "@/components/shared/sections/featured";
import Values from "@/components/shared/sections/values";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Featured />
      <Values />
    </>
  );
}
