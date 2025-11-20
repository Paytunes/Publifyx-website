import { TrendingUp } from "lucide-react";

const topMedias = [
  {
    name: "Hotstar",
    spend: "₹1.56Cr",
    description: "[Please provide the full descriptive paragraph for Hotstar]"
  },
  {
    name: "SonyLIV",
    spend: "₹1.43Cr",
    description: "[Please provide the full descriptive paragraph for SonyLIV]"
  },
  {
    name: "ICC Women's Cricket World Cup on JioHotstar",
    spend: "₹7Cr",
    description: "[Please provide the full descriptive paragraph for ICC Women's Cricket World Cup]"
  },
  {
    name: "Asia Cup on SonyLIV",
    spend: "₹55L",
    description: "[Please provide the full descriptive paragraph for Asia Cup]"
  },
  {
    name: "Inshorts",
    spend: "₹37.85L",
    description: "[Please provide the full descriptive paragraph for Inshorts]"
  }
];

const TopAdSpendSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Medias with Highest Ad Spend
          </h2>
        </div>
        
        <div className="space-y-6">
          {topMedias.map((media, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {media.name}
                </h3>
                <span className="text-2xl font-bold text-primary">
                  {media.spend}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {media.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAdSpendSection;
