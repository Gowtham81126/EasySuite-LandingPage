import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Zap, Shield, Clock, Wallet, CheckCircle2 } from "lucide-react";

export default function Home() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const STAGGER = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/home-hero.png`} 
            alt="Abstract city network" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={STAGGER}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={FADE_UP}>
              <Badge variant="secondary" className="mb-6 py-1.5 px-4 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Welcome to Easy Suite
              </Badge>
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              The easy way to share <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">space and energy.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We build peer-to-peer marketplaces that connect drivers with available parking spots and EV chargers. Earn passive income from your unused space, or find what you need instantly.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all" onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                  });
                }
              }}>
                Explore Products
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One family. Two smart solutions.</h2>
            <p className="text-lg text-muted-foreground">Whether you need to park for the day or charge up for the road, Easy Suite connects you with the closest, most affordable options.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-xl transition-all group relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MapPin className="w-24 h-24 text-blue-500" />
                </div>
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-950 dark:text-blue-50">ParkEasy</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    Find and book private parking spaces instantly. From residential driveways to commercial lots, save time and money on parking.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Real-time availability</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Up to 50% cheaper than public lots</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Earn money listing your driveway</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/products/parkeasy">
                      Discover ParkEasy <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full overflow-hidden border-green-100 dark:border-green-900 shadow-lg hover:shadow-xl transition-all group relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-24 h-24 text-green-500" />
                </div>
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-green-950 dark:text-green-50">ChargeEasy</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    The community-powered EV charging network. Find local residential and office chargers, or share yours to offset electricity costs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Access to Level 2 & DC Fast chargers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Transparent kWh pricing</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Monetize your home charger</li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/products/chargeeasy">
                      Discover ChargeEasy <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why People Share Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why the sharing economy wins</h2>
            <p className="text-lg text-muted-foreground">We believe in making cities more efficient by unlocking underutilized resources.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Wallet className="w-8 h-8 text-primary" />,
                title: "Passive Income",
                description: "Turn an empty driveway or idle charger into a steady stream of income with zero extra effort."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Secure & Verified",
                description: "Every user is verified, payments are handled securely, and all bookings are protected by our $1M guarantee."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Ultimate Convenience",
                description: "No more circling the block or waiting in line at public stations. Book ahead and guarantee your spot."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to join the network?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Download the Easy Suite app today and get access to both ParkEasy and ChargeEasy with a single account.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base">
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
              Download for Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}