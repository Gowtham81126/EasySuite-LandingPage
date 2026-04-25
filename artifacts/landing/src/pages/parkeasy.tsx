import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MapPin, Navigation, CreditCard, Star, Search, CheckCircle, ChevronRight } from "lucide-react";

export default function ParkEasy() {
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-blue-50 dark:bg-blue-950/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-transparent dark:from-background dark:to-transparent z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}brand/parkeasy_bg.png`} 
            alt="ParkEasy Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={STAGGER}
              className="max-w-2xl"
            >
              <motion.img 
                variants={FADE_UP}
                src={`${import.meta.env.BASE_URL}brand/parkeasy_logo.png`} 
                alt="ParkEasy Logo" 
                className="h-16 mb-8"
              />
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-blue-950 dark:text-white">
                Find parking in seconds.
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-blue-900/70 dark:text-blue-100/70 mb-10 leading-relaxed">
                Skip the circling. Find, book, and pay for private parking spots across the city with zero hassle.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">
                  Find a Spot
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-blue-200 text-blue-800 hover:bg-blue-100 dark:border-blue-800 dark:text-blue-200 dark:hover:bg-blue-900/50">
                  Become a Host
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/parking-lot.png`} 
                alt="Modern Parking" 
                className="relative rounded-3xl shadow-2xl border border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How ParkEasy Works</h2>
            <p className="text-lg text-muted-foreground">Four simple steps to stress-free parking.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Search className="w-6 h-6" />, title: "Find", desc: "Search for spots near your destination." },
              { icon: <CheckCircle className="w-6 h-6" />, title: "Book", desc: "Reserve your spot instantly via app." },
              { icon: <Navigation className="w-6 h-6" />, title: "Park", desc: "Follow GPS turn-by-turn directions." },
              { icon: <CreditCard className="w-6 h-6" />, title: "Pay", desc: "Seamless cashless payment upon exit." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-[2px] bg-blue-100 dark:bg-blue-900" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Turn your empty driveway into cash.</h2>
              <p className="text-xl text-blue-200 mb-8">
                Got a parking spot you don't use 24/7? List it on ParkEasy and start earning passive income today. You set the schedule, you set the price.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                  Keep up to 85% of earnings
                </li>
              </ul>
              <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-50">
                Estimate Your Earnings
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/20">
                    <div>
                      <div className="text-sm text-blue-300 font-medium mb-1">Monthly Earnings</div>
                      <div className="text-4xl font-bold">$420.50</div>
                    </div>
                    <div className="px-4 py-2 bg-blue-500/20 rounded-lg text-blue-200 text-sm font-medium">
                      +12% vs last month
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-200">Total Bookings</span>
                      <span className="font-bold">42</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-200">Average Rating</span>
                      <span className="font-bold flex items-center gap-1">4.9 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I access the parking spot?</AccordionTrigger>
              <AccordionContent>
                Once booked, the app provides exact GPS coordinates, photos of the spot, and any specific instructions from the host (like gate codes or which specific driveway side to use).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my vehicle safe?</AccordionTrigger>
              <AccordionContent>
                We vet all our hosts and spots. Additionally, hosts rely on reviews, so they are incentivized to maintain clean and secure parking areas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if someone else is in my booked spot?</AccordionTrigger>
              <AccordionContent>
                This is incredibly rare, but if it happens, our 24/7 support team will immediately re-route you to an upgraded nearby spot at no extra cost, and penalize the host or offending vehicle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}