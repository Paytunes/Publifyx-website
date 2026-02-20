import { Link } from "react-router-dom";

const JoinRevolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="mb-6 text-left">Join the Digital Advertising Revolution</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-left">
              Are you ready to be a part of the future of digital advertising? Join PublifyX in revolutionizing the
              industry and shaping the way businesses connect with their audiences. Whether you're a creative thinker, a
              tech enthusiast, or a marketing expert, there's a place for you on our team. Together, we'll push the
              boundaries of what's possible, innovate relentlessly, and redefine the standards of excellence in digital
              advertising. Join us on this exciting journey as we transform the way businesses advertise and engage with
              their customers. Let's revolutionize digital advertising together.
            </p>
            <button className="bg-[#ff7200] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              <Link to="/contact" className="block w-full h-full">
                Join us!
              </Link>
            </button>
          </div>
          <div className="order-2">
            <img
              src="/lovable-uploads/378f516e-ced5-4d46-999b-0075f2957d7a.png"
              alt="Podcast recording studio – audio ad production setup"
              className="w-full h-auto rounded-lg shadow-lg"
              width={584}
              height={624}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
