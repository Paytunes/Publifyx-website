import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const topOptions = [
  {
    name: "Banner",
    metric: "93 campaigns",
    description: "Banner exemplifies true market leadership, boasting a record high of 93 campaigns executed in the digital domain. Cherished for its capacity to reach a diverse audience profile, it provides unmatched visibility and fosters recall value. Advertisers nationwide prefer Banner for high-stakes campaigns, premium launches, and corporate branding, assuring optimal ROI. With natural adaptability to the digital vertical, Banner promises a persuasive, professional, and impactful branding experience."
  },
  {
    name: "Video",
    metric: "58K campaigns",
    description: "As the market leader in the digital sphere, Video boasts execution of a stellar 58K campaigns, highlighting our substantial audience profile and expansive reach. Advertisers choose Video for national campaigns, premium launches, and corporate branding, owing to higher visibility, enhanced recall, and impressive ROI. Seamlessly adapting to the bustling digital vertical, Video promises persuasive, professional and impactful visibility, ensuring your brand secures the deserved limelight."
  },
  {
    name: "RoadBlock",
    metric: "14 high-impact campaigns",
    description: "Recognized as a market leader, RoadBlock integrates seamlessly into the digital vertical, executing an unprecedented 14 campaigns. It guarantees top-tier visibility and heightened recall, offering a substantial impact on your ROI. RoadBlock's high-profile audience ensures extensive reach and optimal brand prominence, making it the go-to platform for premium launches, national campaigns, and corporate branding. This adroit instrument is why advertisers nationwide prefer it over alternatives. With RoadBlock, revolutionize your brand's digital footprint."
  },
  {
    name: "Agency Fee",
    metric: "12 campaigns",
    description: "With the highest record of twelve campaigns executed in the digital sphere, Agency fee stands as a market leader, resonating with a diverse audience profile and ensuring extensive reach. We are the preferred choice for national campaigns, premium launches, and corporate branding due to our demonstrable visibility, recall, and favourable ROI. Adapting effortlessly to the digital vertical, we offer persuasive, professional, and impactful solutions that guarantee success. Trust Agency fee - your partner in exponential growth."
  },
  {
    name: "Connected TV",
    metric: "10 large-scale campaigns",
    description: "With a commanding leadership in the market, Connected TV has delivered excellence through ten high-impact digital campaigns, reaching a diverse, sizable audience. Widely coveted by businesses for national campaigns, premium launches, and corporate branding, it offers unmatched visibility, recall and a substantial ROI. Seamlessly adapting to the digital vertical, Connected TV stands as a bastion for persuasive and impactful messaging, thus being the number one choice for advertisers."
  }
];

const TopMediaOptionsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Media Options Used
          </h2>
        </div>

        <div className="space-y-6">
          {topOptions.map((option, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {option.name}
                </h3>
                <span className="text-lg font-semibold text-primary">
                  {option.metric}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMediaOptionsSection;
