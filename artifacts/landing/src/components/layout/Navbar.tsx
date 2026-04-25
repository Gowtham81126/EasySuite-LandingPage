import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MapPin, Zap, ChevronDown } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const base = import.meta.env.BASE_URL;

  let brand: React.ReactNode;
  let brandLink: string | null = null;

  if (location.startsWith("/products/parkeasy")) {
    brand = (
      <>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <MapPin className="h-5 w-5" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight">ParkEasy</span>
      </>
    );
  } else if (location.startsWith("/products/chargeeasy")) {
    brand = (
      <>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
          <Zap className="h-5 w-5" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight">ChargeEasy</span>
      </>
    );
  } else {
    brand = (
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-display font-bold">ES</span>
      </div>
    );
    brandLink = "/";
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {brandLink ? (
            <Link href={brandLink} className="flex items-center gap-2">
              {brand}
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              {brand}
            </div>
          )}
          
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {location !== "/" && (
                  <NavigationMenuItem>
                    <Link href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </Link>
                  </NavigationMenuItem>
                )}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 py-2">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/products/parkeasy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2 text-sm font-medium leading-none text-blue-600">
                              <MapPin className="h-4 w-4" /> ParkEasy
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                              Find on-demand parking spots or list yours to earn passive income.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/products/chargeeasy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2 text-sm font-medium leading-none text-green-600">
                              <Zap className="h-4 w-4" /> ChargeEasy
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                              Locate available EV chargers or share your home charger with drivers.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {location.startsWith("/products/") && <Button>Get the App</Button>}
        </div>
      </div>
    </header>
  );
}