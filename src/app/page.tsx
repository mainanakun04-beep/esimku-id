import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Products } from "@/components/sections/products";
import { Tutorial } from "@/components/sections/tutorial";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Products />
      <Tutorial />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
