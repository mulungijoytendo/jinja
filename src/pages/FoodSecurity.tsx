import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Users, BookOpen, Heart } from "lucide-react";

const FoodSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Food Security</h1>
          <p className="text-xl text-gray-600">
            Ensuring communities have access to nutritious food for healthy, productive lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              JNYPA strives to ensure that communities and households have access to enough food to meet their
              nutritional needs for a productive and healthy life. Our goal is to ensure families are sustainable
              and have at least two meals per day.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Sprout className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  We train communities to create and maintain their own farms or backyard gardens.
                </p>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  We promote proper nutrition practices through nutrition dialogues and cooking demonstrations.
                </p>
              </div>
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  We assess children for malnutrition, provide family counseling, and refer them to Jinja Regional
                  Referral Pediatric Wing for specialized care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-Uploads/dba75101-36ad-4536-86f0-64ea71ffec52.png" 
              alt="Food Security Program"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Key Features of Food Security</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Farmer field schools training</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Urban horticulture/Backyard gardening</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cooking demonstrations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Nutrition screening and assessment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-700">Families Supported</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-700">Gardens Established</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-700">Training Sessions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FoodSecurity;