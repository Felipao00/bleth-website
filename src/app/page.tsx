import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import CTAPlans from '@/components/sections/CTAPlans';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <Testimonials />
      <About />
      <CTAPlans />
      <CTA />
    </>
  );
}