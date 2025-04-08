
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        location.pathname === "/"
          ? scrolled || isOpen
            ? "bg-white shadow-sm py-3"
            : "bg-transparent py-5"
          : "bg-white shadow-sm py-3"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-8 h-8" src={Logo} alt="" />
          <a
            href="/"
            className={cn(
              "font-display text-2xl font-bold transition-all duration-300",
              location.pathname === "/"
                ? scrolled || isOpen
                  ? "text-primary"
                  : "text-white"
                : "text-primary"
            )}
            aria-label="Donopoly Remodeling"
          >
            Arquitectura
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground"
                        : "text-white"
                      : "text-foreground"
                  )}
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* SERVICIOS - con menú tipo acordeón */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground hover:text-foreground"
                        : "text-white"
                      : "text-foreground hover:text-foreground",
                    "bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30"
                  )}
                >
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 md:w-[250px]">
                    <Accordion type="single" collapsible className="w-full">
                      {/* CONSTRUCCIÓN */}
                      <AccordionItem value="construccion" className="border-b border-gray-200">
                        <AccordionTrigger className="py-2 text-sm font-medium">
                          Construcción
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <a 
                              href="/servicios/construccion" 
                              className="py-1 text-sm text-muted-foreground hover:text-primary"
                              onClick={closeMenu}
                            >
                              Área de Construcción
                            </a>
                            <a 
                              href="/servicios/project-manager" 
                              className="py-1 text-sm text-muted-foreground hover:text-primary"
                              onClick={closeMenu}
                            >
                              Project Manager
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* DISEÑO */}
                      <AccordionItem value="diseno" className="border-b border-gray-200">
                        <AccordionTrigger className="py-2 text-sm font-medium">
                          Diseño
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <a 
                              href="/servicios/planos-2d" 
                              className="py-1 text-sm text-muted-foreground hover:text-primary"
                              onClick={closeMenu}
                            >
                              Planos 2D
                            </a>
                            <a 
                              href="/servicios/renders-3d" 
                              className="py-1 text-sm text-muted-foreground hover:text-primary"
                              onClick={closeMenu}
                            >
                              Renders 3D
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* PERMISOS */}
                      <AccordionItem value="permisos" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium">
                          Permisos
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <a 
                              href="/servicios/permisos" 
                              className="py-1 text-sm text-muted-foreground hover:text-primary"
                              onClick={closeMenu}
                            >
                              Notarización
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/sobre-nosotros"
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground"
                        : "text-white"
                      : "text-foreground"
                  )}
                >
                  Sobre Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/#contact"
            className={cn(
              "btn-primary ml-2",
              location.pathname === "/"
                ? !scrolled && "bg-white text-primary hover:bg-white/90"
                : "btn-primary"
            )}
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden relative z-[60]",
            isOpen
              ? "text-foreground"
              : location.pathname === "/"
              ? scrolled
                ? "text-foreground"
                : "text-white"
              : "text-foreground"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-50 pt-20 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          <a
            href="/"
            className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Inicio
          </a>

          {/* Servicios con acordeón para móvil */}
          <div className="w-full">
            <div className="text-foreground text-lg font-medium text-center mb-2">
              Servicios
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {/* Construcción */}
              <AccordionItem value="construccion" className="border-b border-gray-200">
                <AccordionTrigger className="py-2 text-sm font-medium text-center justify-center">
                  Construcción
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="/servicios/construccion"
                      className="px-4 py-1 text-sm text-center text-muted-foreground hover:text-primary"
                      onClick={closeMenu}
                    >
                      Área de Construcción
                    </a>
                    <a
                      href="/servicios/project-manager"
                      className="px-4 py-1 text-sm text-center text-muted-foreground hover:text-primary"
                      onClick={closeMenu}
                    >
                      Project Manager
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Diseño */}
              <AccordionItem value="diseno" className="border-b border-gray-200">
                <AccordionTrigger className="py-2 text-sm font-medium text-center justify-center">
                  Diseño
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="/servicios/planos-2d"
                      className="px-4 py-1 text-sm text-center text-muted-foreground hover:text-primary"
                      onClick={closeMenu}
                    >
                      Planos 2D
                    </a>
                    <a
                      href="/servicios/renders-3d"
                      className="px-4 py-1 text-sm text-center text-muted-foreground hover:text-primary"
                      onClick={closeMenu}
                    >
                      Renders 3D
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Permisos */}
              <AccordionItem value="permisos" className="border-b-0">
                <AccordionTrigger className="py-2 text-sm font-medium text-center justify-center">
                  Permisos
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="/servicios/permisos"
                      className="px-4 py-1 text-sm text-center text-muted-foreground hover:text-primary"
                      onClick={closeMenu}
                    >
                      Notarización
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <a
            href="/sobre-nosotros"
            className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Sobre Nosotros
          </a>

          <a
            href="/#contact"
            className="btn-primary w-full text-center mt-4"
            onClick={closeMenu}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
