import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
      <style>
        {`
          .animate-slide-in {
            animation: slideIn 1s ease-out;
          }

          @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          .mission-vision-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, #ffffff 0%, #e6ffe6 100%);
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          @media (min-width: 768px) {
            .mission-vision-container {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
            }
          }

          .mission-vision-section {
            flex: 1;
            padding: 1rem;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .mission-vision-section:hover {
            transform: scale(1.05);
          }

          .mission-vision-section img {
            max-width: 100%;
            width: 100%;
            max-height: 200px;
            margin: 0.5rem 0;
            border-radius: 10px;
            border: 2px solid #28a745;
            object-fit: cover;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .mission-vision-section p {
            color: #333;
            font-size: 1rem;
            margin: 0.5rem 0;
            line-height: 1.6;
          }

          .mission-vision-section h3 {
            color: #28a745;
            font-size: 1.375rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .mission-vision-section.left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .mission-vision-section.right {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
          }

          .core-values-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #ffffff 0%, #e6ffe6 100%);
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
          }

          @media (min-width: 768px) {
            .core-values-container {
              flex-direction: row;
              align-items: center;
            }
          }

          .core-values-image {
            flex: 0 0 auto;
            padding: 1rem;
          }

          .core-values-image img {
            max-width: 100%;
            width: 100%;
            max-height: 200px;
            border-radius: 10px;
            border: 2px solid #28a745;
            object-fit: cover;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .core-values-grid {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
          }

          @media (min-width: 640px) {
            .core-values-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .core-value-card {
            background-color: #d4edda;
            padding: 1rem;
            text-align: center;
            border: 2px solid #28a745;
            border-radius: 10px;
            transition: transform 0.3s ease;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .core-value-card:hover {
            transform: scale(1.05);
          }

          .core-value-card h3 {
            color: #28a745;
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .core-value-card p {
            color: #333;
            font-size: 0.875rem;
            margin: 0;
          }

          .report-button {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #28a745 0%, #218838 100%);
            color: white;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 8px;
            border: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            text-decoration: none;
          }

          .report-button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 animate-slide-in" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            About JNYPA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 animate-slide-in">
            Jinja Network of Young People Living and Affected by HIV/AIDS
          </p>
        </div>

        <div className="mission-vision-container mb-8 sm:mb-12 md:mb-16">
          <div className="mission-vision-section left">
            <h3>Mission</h3>
            <p>A Good and productive lives of young people living and affected by HIV/AIDS in Jinja District</p>
            <img src="/lovable-uploads/about1.png" alt="Mission Image" />
          </div>
          <div className="mission-vision-section right">
            <img src="/lovable-uploads/about2.png" alt="Vision Image" />
            <h3>Vision</h3>
            <p>
              To create a strong network which contributes to a better life and an enabling environment for young
              people living and affected by HIV/AIDS in Busoga Sub region free from stigma and discrimination to
              meaningfully engage equally in development of programs that improves their livelihood.
            </p>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 animate-slide-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-6 sm:mb-8 text-center" style={{ textDecoration: 'underline' }}>Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            JNYPA is a youth-led community-based organization providing holistic human services in Eastern Uganda
            (Jinja). Initially focused on providing psychosocial support to young people living with HIV (YPLHIV)
            struggling with adherence, disclosure, and mental health, JNYPA has grown over the last four years into
            a holistic center. We now emphasize prevention, advocacy, spiritual healing, economic empowerment, and
            family development.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Since inception, JNYPA has provided HIV/AIDS awareness services to over 10,500 individuals. Our core
            values of accountability and transparency, excellence, integrity, and teamwork guide our efforts to
            build long-term relationships and pursue innovative solutions for our community.
          </p>
        </div>

        <div className="core-values-container mb-8 sm:mb-12 md:mb-16">
          <div className="core-values-image">
            <img src="/lovable-uploads/about3.png" alt="Core Values Image" />
          </div>
          <div className="core-values-grid">
            <div className="core-value-card">
              <h3>Accountability and Transparency</h3>
              <p>We adhere to the principles of honesty, fairness, and transparency to build long-term trust relationships with members and partners.</p>
            </div>
            <div className="core-value-card">
              <h3>Integrity</h3>
              <p>Encourage the team to continuously explore new technologies and methods to provide unique solutions for clients.</p>
            </div>
            <div className="core-value-card">
              <h3>Excellence</h3>
              <p>Pursuing excellence is our goal, and we are committed to doing our best in every task.</p>
            </div>
            <div className="core-value-card">
              <h3>Teamwork</h3>
              <p>We believe in the power of the team and achieve common goals through collaboration.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 animate-slide-in">150+</div>
              <p className="text-white text-sm sm:text-base animate-slide-in">Young People Supported via Symposiums</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 animate-slide-in">10,500+</div>
              <p className="text-white text-sm sm:text-base animate-slide-in">Youths Reached via Health Debates</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 animate-slide-in">915</div>
              <p className="text-white text-sm sm:text-base animate-slide-in">People Tested for HIV</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-6 sm:mb-8" style={{ textDecoration: 'underline' }}>Join Us in Making a Difference</h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Together, we can empower young people living with and affected by HIV/AIDS to lead healthy, productive lives.
            Join us in our mission to create a supportive and inclusive community.
          </p>
          <Link to="/reports" className="report-button">View Reports</Link>
        </div>
      </div>
    </div>
  );
};

export default About;