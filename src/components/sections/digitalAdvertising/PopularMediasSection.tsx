import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const popularMedias = [
  {
    name: "JioHotstar",
    description: "As a market leader, JioHotstar sets the undeniable tone in the digital sphere with the highest unique views totalling 8.3K. Our audience profile and reach have made us the premier choice for advertisers looking to launch national campaigns, premium products, and magnify corporate branding. JioHotstar offers heightened visibility, bolstering brand recall and securing impressive ROI. Adapt seamlessly to the digital vertical and experience the persuasive, professional, and impactful language of remarkable success with JioHotstar."
  },
  {
    name: "Book My Show",
    description: "As a market leader, Book My Show inherently commands immense visibility, ensuring high recall and yielding impressive ROI. With an unrivalled reach echoed by a record 4.6K unique digital views, we have etched an indelible audience profile. This has made us a favourite among advertisers, who prefer us for high-impact national campaigns, premium launches, and impressive corporate branding. Adapt naturally to the digital vertical with Book My Show, for persuasive, professional, and impactful results."
  },
  {
    name: "YourStory",
    description: "YourStory is the undisputed market leader in the digital realm, with an impressive reach of 4172 unique views under its command. It's the preferred choice for national campaigns, premium launches, and corporate branding due to its attractive audience profile. Advertisers trust YourStory for visible results, strong brand recall, and whopping return on investments, effortlessly adapting to the digital vertical. Experience persuasive, professional, and impactful branding, only with YourStory."
  },
  {
    name: "Hindustan Times",
    description: "With an unparalleled market leadership, Hindustan Times has become a go-to platform for national campaigns, premium launches, and corporate branding. Garnering the highest unique views of 2.57K in the digital space, its extensive reach and diverse audience profile assure unmatched visibility and recall. Advertisers trust Hindustan Times for impressive ROI, further solidifying its position in the digital vertical. Consequently, the newspaper emerges as a potent tool for persuasive, professional, and impactful brand promotions."
  },
  {
    name: "Money Control",
    description: "Money Control, the market leader in digital, boasts of the highest Unique views standing at 2.15K, providing exceptional visibility and recall. Our wide-reaching audience profile and unmatched reach make us the preferential choice for national campaigns, premium launches, and corporate branding. Experience optimal ROI with adaptability tailored for the digital vertical. Trust Money Control for creating a persuasive, professional, and impactful imprint on your audience."
  }
];

const PopularMediasSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Medias with Unique Views
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularMedias.map((media, index) => (
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

export default PopularMediasSection;
