import amazonMxPlayer from "@/assets/publishers/amazon-mx-player.jpg";
import bookmyshow from "@/assets/publishers/bookmyshow.jpg";
import dailyhunt from "@/assets/publishers/dailyhunt.jpg";
import economicTimes from "@/assets/publishers/economic-times.jpg";
import facebook from "@/assets/publishers/facebook.jpg";
import gaana from "@/assets/publishers/gaana.jpg";
import googleDisplay from "@/assets/publishers/google-display.jpg";
import googleSearch from "@/assets/publishers/google-search.jpg";
import hindustanTimes from "@/assets/publishers/hindustan-times.jpg";
import iccCricket from "@/assets/publishers/icc-cricket.jpg";
import industryBuying from "@/assets/publishers/industry-buying.jpg";
import instagram from "@/assets/publishers/instagram.jpg";
import jioHotstar from "@/assets/publishers/jio-hotstar.jpg";
import jioSaavn from "@/assets/publishers/jio-saavn.jpg";
import linkedin from "@/assets/publishers/linkedin.jpg";
import moneycontrol from "@/assets/publishers/moneycontrol.jpg";
import ola from "@/assets/publishers/ola.jpg";
import swiggy from "@/assets/publishers/swiggy.jpg";
import theHindu from "@/assets/publishers/the-hindu.jpg";
import tiktok from "@/assets/publishers/tiktok.jpg";
import timesOfIndia from "@/assets/publishers/times-of-india.jpg";
import truecaller from "@/assets/publishers/truecaller.jpg";
import vogue from "@/assets/publishers/vogue.jpg";
import yourcabs from "@/assets/publishers/yourcabs.jpg";
import youtube from "@/assets/publishers/youtube.jpg";
import zee5 from "@/assets/publishers/zee5.jpg";

const publishers = [
  {
    logo: amazonMxPlayer,
    name: "Amazon MX Player",
    label: "Publisher",
    metric: "10M+ Users",
  },
  {
    logo: bookmyshow,
    name: "BookMyShow",
    label: "Publisher",
    metric: "50M+ Users",
  },
  {
    logo: dailyhunt,
    name: "DailyHunt",
    label: "Publisher",
    metric: "300M+ Users",
  },
  {
    logo: economicTimes,
    name: "Economic Times",
    label: "Publisher",
    metric: "150M+ Readers",
  },
  {
    logo: facebook,
    name: "Facebook",
    label: "Publisher",
    metric: "2.9B+ Users",
  },
  {
    logo: gaana,
    name: "Gaana",
    label: "Publisher",
    metric: "185M+ Users",
  },
  {
    logo: googleDisplay,
    name: "Google Display",
    label: "Publisher",
    metric: "Global Reach",
  },
  {
    logo: googleSearch,
    name: "Google Search",
    label: "Publisher",
    metric: "8.5B+ Searches/Day",
  },
  {
    logo: hindustanTimes,
    name: "Hindustan Times",
    label: "Publisher",
    metric: "100M+ Readers",
  },
  {
    logo: iccCricket,
    name: "ICC Cricket",
    label: "Publisher",
    metric: "1B+ Fans",
  },
  {
    logo: industryBuying,
    name: "IndustryBuying",
    label: "Publisher",
    metric: "B2B E-Commerce",
  },
  {
    logo: instagram,
    name: "Instagram",
    label: "Publisher",
    metric: "2B+ Users",
  },
  {
    logo: jioHotstar,
    name: "JioHotstar",
    label: "Publisher",
    metric: "300M+ Users",
  },
  {
    logo: jioSaavn,
    name: "JioSaavn",
    label: "Publisher",
    metric: "100M+ Users",
  },
  {
    logo: linkedin,
    name: "LinkedIn",
    label: "Publisher",
    metric: "900M+ Professionals",
  },
  {
    logo: moneycontrol,
    name: "MoneyControl",
    label: "Publisher",
    metric: "50M+ Users",
  },
  {
    logo: ola,
    name: "OLA",
    label: "Publisher",
    metric: "250M+ Users",
  },
  {
    logo: swiggy,
    name: "Swiggy",
    label: "Publisher",
    metric: "15M+ Orders/Month",
  },
  {
    logo: theHindu,
    name: "The Hindu",
    label: "Publisher",
    metric: "80M+ Readers",
  },
  {
    logo: tiktok,
    name: "TikTok",
    label: "Publisher",
    metric: "1B+ Users",
  },
  {
    logo: timesOfIndia,
    name: "Times of India",
    label: "Publisher",
    metric: "200M+ Readers",
  },
  {
    logo: truecaller,
    name: "Truecaller",
    label: "Publisher",
    metric: "300M+ Users",
  },
  {
    logo: vogue,
    name: "Vogue",
    label: "Publisher",
    metric: "Premium Fashion",
  },
  {
    logo: yourcabs,
    name: "YourCabs",
    label: "Publisher",
    metric: "Travel Network",
  },
  {
    logo: youtube,
    name: "YouTube",
    label: "Publisher",
    metric: "2.5B+ Users",
  },
  {
    logo: zee5,
    name: "ZEE5",
    label: "Publisher",
    metric: "100M+ Users",
  },
];

const PublisherLogosSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Premium Publisher Network
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with leading digital publishers and reach millions of engaged users
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishers.map((publisher, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group hover:scale-105"
            >
              <div className="w-full h-24 flex items-center justify-center mb-4">
                <img
                  src={publisher.logo}
                  alt={publisher.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {publisher.label}
              </span>
              <span className="text-sm font-semibold text-primary">
                {publisher.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublisherLogosSection;
