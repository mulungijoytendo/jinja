import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/lovable-uploads/kid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center h-full bg-black bg-opacity-50 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Jinja Network of Young People Living and Affected by HIV/AIDS
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              A youth-led organization providing holistic human services in Eastern Uganda, empowering young people
            through prevention, advocacy, spiritual healing, economic empowerment, and family development.
            </p>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-green-600 text-white border-green-600 get-involved-btn"
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for Get Involved Button */}
      <style jsx>{`
        .get-involved-btn {
          transition: none;
        }
        .get-involved-btn:hover {
          transform: none;
          box-shadow: none;
          color: green;
        }
      `}</style>
    </div>
  );
};

export default Index;