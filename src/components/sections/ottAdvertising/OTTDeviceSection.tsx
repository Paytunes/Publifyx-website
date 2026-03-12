import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet, Tv, Gamepad2, Monitor, Box, Rocket } from "lucide-react";

const devices = [
  { name: "Smart TVs", icon: Tv, sub: "Samsung, LG, VIZIO, Android TV" },
  { name: "Streaming Sticks", icon: Box, sub: "Roku, Fire TV, Apple TV, Chromecast" },
  { name: "Game Consoles", icon: Gamepad2, sub: "PlayStation, Xbox" },
  { name: "Mobile", icon: Smartphone, sub: "iOS, Android" },
  { name: "Tablets", icon: Tablet, sub: "iPad, Android Tablets" },
  { name: "Desktop", icon: Laptop, sub: "Web Browsers, Desktop Apps" },
];

const OTTDeviceSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6"
          >
            Measure All Devices and Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-500 max-w-3xl mx-auto"
          >
            PublifyX provides comprehensive cross-device measurement across every platform where streaming happens.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((device, i) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 group hover:bg-navy-50 hover:rounded-2xl transition-all duration-300"
            >
              <div className="w-16 h-full rounded-2xl bg-brand-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-500 group-hover:text-white transition-colors duration-300">
                <device.icon className="w-8 h-8 text-brand-orange-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold text-navy-800 mb-1">{device.name}</h3>
                <p className="text-navy-400 group-hover:text-navy-500 leading-relaxed font-medium">{device.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OTTDeviceSection;
