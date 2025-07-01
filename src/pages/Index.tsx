import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/lovable-uploads/kid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center h-full bg-black bg-opacity-50 text-white py-8 sm:py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Jinja Network of Young People Living and Affected by HIV/AIDS
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              A youth-led organization providing holistic human services in Eastern Uganda, empowering young people
              through prevention, advocacy, spiritual healing, economic empowerment, and family development.
            </p>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .get-involved-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Index;