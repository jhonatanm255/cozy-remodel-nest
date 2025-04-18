
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, Building, Briefcase, FileText, Cuboid, ClipboardCheck } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services: Service[] = [
    {
      icon: <Building className="h-10 w-10" />,
      title: 'Área de Construcción',
      description: 'Servicios completos de construcción para proyectos residenciales y comerciales.',
      link: '/servicios/construccion',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1931'
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: 'Project Manager (PM)',
      description: 'Gestión profesional de proyectos para optimizar tiempos, costos y resultados.',
      link: '/servicios/project-manager',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1470'
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Planos 2D',
      description: 'Diseño detallado y técnico de planos para una visualización clara de su proyecto.',
      link: '/servicios/planos-2d',
      imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1470'
    },
    {
      icon: <Cuboid className="h-10 w-10" />,
      title: 'Renders 3D',
      description: 'Visualizaciones tridimensionales realistas para ver su proyecto antes de construirlo.',
      link: '/servicios/renders-3d',
      imageUrl: 'https://images.unsplash.com/photo-1618005198919-177e9dd3b230?auto=format&fit=crop&q=80&w=1474'
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: 'Permisos',
      description: 'Gestión completa de permisos, licencias y cumplimiento normativo para su proyecto.',
      link: '/servicios/permisos',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1470'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-secondary opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Nuestros Servicios</h2>
          <p className="paragraph">
            Ofrecemos una amplia gama de servicios de construcción y diseño para transformar su espacio en algo extraordinario. Cada proyecto es único y recibe nuestra dedicación total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-medium mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                    <a 
                      href={service.link} 
                      className="flex items-center text-white font-medium mt-4 group-hover:text-white/80"
                    >
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 text-white p-3 rounded-full flex items-center justify-center">
                  {service.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
