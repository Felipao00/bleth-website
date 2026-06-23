'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative bg-black section-padding">
      <div className="container-bleth">
        <SectionHeading
          title="Serviços"
          subtitle="Oferecemos soluções completas de tecnologia para impulsionar seu negócio digital."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}