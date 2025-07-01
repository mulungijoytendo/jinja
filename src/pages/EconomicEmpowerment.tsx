import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, BookOpen, TrendingUp, Briefcase } from "lucide-react";

const EconomicEmpowerment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Economic Empowerment</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Supporting communities to improve their socioeconomic status
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="relative">
            <img 
              src="/lovable-Uploads/707b817f-f7b5-4501-b667-ea492fa00379.png" 
              alt="Economic Empowerment Program"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              At JNYPA, we support communities and households to improve their socioeconomic status through village
              savings and loans associations. We train groups to save money collectively and use loans intelligently
              to enhance family sustainability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              We assist in selecting businesses and provide guidance on planning and management. Short-term training
              equips low-income individuals with practical skills, while long-term training enables learning new
              professions for sustainable livelihoods.
            </p>
          </div>
        </div>

        <Card className="mb-8 sm:mb-12 bg-green-500 text-white">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Key Features of Economic Empowerment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Village savings and loans association</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Selection business planning and management</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Financial literacy</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Community skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Apprenticeship</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-3 sm:mb-4">Short-term Training</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We provide practical skills and knowledge to people with low income through focused, intensive
                training programs that can be immediately applied to generate income.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-3 sm:mb-4">Long-term Training</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Comprehensive training programs that allow individuals to learn new professions and develop
                sustainable career paths for long-term economic stability.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">25</div>
              <p className="text-gray-700 text-sm sm:text-base">Savings Groups</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">300+</div>
              <p className="text-gray-700 text-sm sm:text-base">People Trained</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-700 text-sm sm:text-base">Businesses Started</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$50K+</div>
              <p className="text-gray-700 text-sm sm:text-base">Loans Distributed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EconomicEmpowerment;