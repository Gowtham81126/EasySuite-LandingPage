import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Zap, Navigation, CreditCard, Leaf, CheckCircle, BatteryCharging, Search, CalendarCheck, Plug } from "lucide-react";

export default function ChargeEasy() {
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-green-50 dark:bg-green-950/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 to-transparent dark:from-background dark:to-transparent z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}brand/chargeeasy_bg.png`} 
            alt="ChargeEasy Background" 
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
                src={`${import.meta.env.BASE_URL}brand/chargeeasy_logo.png`} 
                alt="ChargeEasy Logo" 
                className="h-16 mb-8"
              />
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-green-950 dark:text-white">
                Power up, <br />anywhere.
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-green-900/70 dark:text-green-100/70 mb-10 leading-relaxed">
                The community EV charging network. Find available Level 2 and DC Fast chargers at homes and offices near you.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20">
                  Find a Charger
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-green-200 text-green-800 hover:bg-green-100 dark:border-green-800 dark:text-green-200 dark:hover:bg-green-900/50">
                  Share Your Charger
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-green-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/ev-charger.png`} 
                alt="EV Charger" 
                className="relative rounded-3xl shadow-2xl border border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A greener way to drive</h2>
            <p className="text-lg text-muted-foreground">Range anxiety is a thing of the past. Access thousands of community chargers instantly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-100 dark:border-green-900/50">
              <CardContent className="p-6">
                <BatteryCharging className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Any Plug Type</h3>
                <p className="text-muted-foreground">Filter by J1772, Tesla/NACS, CCS, or CHAdeMO to ensure compatibility.</p>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Transparent kWh Pricing</h3>
                <p className="text-muted-foreground">No hidden session fees. Pay exactly for the energy you consume.</p>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50">
              <CardContent className="p-6">
                <Leaf className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Eco Impact</h3>
                <p className="text-muted-foreground">Track your carbon offset directly in the app with every charge.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-green-50/60 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 text-xs font-semibold tracking-wide uppercase">
              How ChargeEasy Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Charge in four simple steps</h2>
            <p className="text-lg text-muted-foreground">
              From searching to driving away — we handle the rest.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={STAGGER}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Search,
                step: "01",
                title: "Find a charger",
                desc: "Open the map and filter by plug type, speed, and distance to find chargers nearby.",
              },
              {
                icon: CalendarCheck,
                step: "02",
                title: "Book your slot",
                desc: "Reserve a time window in seconds. Hosts confirm instantly so you can plan your stop.",
              },
              {
                icon: Plug,
                step: "03",
                title: "Plug in & charge",
                desc: "Follow turn-by-turn directions, plug in, and the session starts automatically.",
              },
              {
                icon: CreditCard,
                step: "04",
                title: "Drive away",
                desc: "Pay only for the kWh you used. Receipts and carbon offset land in the app.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <motion.div key={step} variants={FADE_UP}>
                <Card className="h-full border-green-100 dark:border-green-900/50 hover:border-green-300 dark:hover:border-green-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md shadow-green-600/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-mono text-green-700/60 dark:text-green-300/60">
                        {step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="py-24 bg-green-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let your charger pay for itself.</h2>
              <p className="text-xl text-green-200 mb-8">
                Your home EV charger sits idle 90% of the time. List it on ChargeEasy to help fellow drivers and offset your own electricity bill.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-green-100">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                  Set specific availability hours
                </li>
                <li className="flex items-center gap-3 text-green-100">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                  Automatic cost markup to guarantee profit
                </li>
                <li className="flex items-center gap-3 text-green-100">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                  Integration with major smart chargers
                </li>
              </ul>
              <Button size="lg" className="bg-white text-green-950 hover:bg-green-50">
                Become a Host
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
                      <div className="text-sm text-green-300 font-medium mb-1">Energy Shared This Month</div>
                      <div className="text-4xl font-bold">450 kWh</div>
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 rounded-lg text-green-200 text-sm font-medium">
                      $180.00 Earned
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-400" />
                        <span className="text-green-200 text-sm">Carbon Offset</span>
                      </div>
                      <span className="font-bold">318 lbs CO2</span>
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
              <AccordionTrigger>Do I need to be home when someone charges?</AccordionTrigger>
              <AccordionContent>
                No! Most hosts list chargers that are accessible from the driveway or exterior of the home. The driver handles everything via the app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does pricing work?</AccordionTrigger>
              <AccordionContent>
                Hosts set a per-kWh price based on their local utility rates plus a markup. The app automatically calculates the total based on the energy dispensed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if a driver stays plugged in after they are full?</AccordionTrigger>
              <AccordionContent>
                ChargeEasy implements idle fees that begin 30 minutes after a charge is complete, incentivizing drivers to move their vehicles promptly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}