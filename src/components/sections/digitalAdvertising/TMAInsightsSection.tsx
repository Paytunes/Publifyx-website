const TMAInsightsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Publifyx Quick Insights for Q3 2025
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Brands aiming to execute nationwide campaigns, premium product launches, or strengthen corporate branding can unlock immense value by partnering with media powerhouses like Hotstar, SonyLIV, and JioHotstar. These platforms, recognized for their leading ad spends and distinctive audience reach, deliver unmatched visibility, superior brand recall, and exceptional ROI. Strategic ad formats like Banners and Videos enable engagement across diverse audiences, ensuring that every campaign achieves measurable impact. By leveraging these platforms and ad types, brands can secure a persuasive, professional, and results-driven presence in today's dynamic digital ecosystem.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-muted-foreground">Insights Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TMAInsightsSection;
