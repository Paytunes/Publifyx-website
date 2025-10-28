import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const topMedias = [
  {
    name: "Hotstar",
    description: "Hotstar, the unequivocal market leader with an unrivalled digital spend of ₹1.56Cr, offers a comprehensive platform for national campaigns, premium launches, and corporate branding. Owing to its extensive reach and diverse audience profile, advertisers find it an ideal match to propel their brands. Offering enhanced visibility, unbeatable recall, and superior ROI, Hotstar adapts naturally to the evolving digital vertical. Choose Hotstar for a persuasive, impactful, and professional advertising experience."
  },
  {
    name: "SonyLIV",
    description: "Trust SonyLIV, a titan in the digital realm, managing an astounding investment of ₹1.43Cr. Its expansive reach and specific audience profile make it the go-to platform for impactful national campaigns, premium launches, and powerful corporate branding. Embraced for its superior visibility, recall, and impressive ROI, SonyLIV adeptly adapts to the dynamic digital landscape, cementing its market leadership. Witness the future of advertising with SonyLIV today!"
  },
  {
    name: "ICC Women's Cricket World Cup On Jiohotstar",
    description: "Leverage the unparalleled reach of the ICC Women's Cricket World Cup on Jiohotstar, a market leader with a phenomenal total digital spend of ₹7Cr. Our premium platform ensures your brand connects with a diverse audience demographic, enabling effective national campaigns, product launches, and corporate branding. Advertisers prefer us for our exceptional visibility, recall, and robust ROI. Join us to revolutionize your brand visibility in the digital realm with exceptional impact."
  },
  {
    name: "Asia Cup on Sony LIV",
    description: "Asia Cup on Sony LIV commands unequivocal leadership in the digital domain with a whopping total spend of ₹55L. Its impressive reach and consistent audience profile guarantee nation-wide visibility, making it the preferred platform for national campaigns, premium launches, and corporate branding. Advertisers trust it for superior recall, remarkable ROI and a seamless adaptation to the digital vertical. A platform for impactful advertising; Asia Cup on Sony LIV promises a persuasive, professional experience."
  },
  {
    name: "Inshorts",
    description: "With a total digital spend reaching a staggering 37.85L, Inshorts proudly holds the market leadership position. Owing to its wide reach and affluent audience profile, the platform has become the preferred choice for national campaigns, premium launches, and corporate branding. This visibility ensures a strong recall, delivering unmatched ROI in the digital vertical. With Inshorts, your brand can leverage the power of persuasive and impactful advertising strategically tailored for the digital world."
  }
];

const TopMediasSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Medias with Highest Ad Spend
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topMedias.map((media, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-primary">{media.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {media.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMediasSection;
