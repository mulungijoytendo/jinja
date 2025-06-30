import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, BookOpen, TrendingUp, Briefcase } from "lucide-react";

const EconomicEmpowerment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Economic Empowerment</h1>
          <p className="text-xl text-gray-600">
            Supporting communities to improve their socioeconomic status
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative">
            <img 
              src="/lovable-Uploads/707b817f-f7b5-4501-b667-ea493fa00379.png" 
              alt="Economic Empowerment Program"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At JNYPA, we support communities and households to improve their socioeconomic status through village
              savings and loans associations. We train groups to save money collectively and use loans intelligently
              to enhance family sustainability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We assist in selecting businesses and provide guidance on planning and management. Short-term training
              equips low-income individuals with practical skills, while long-term training enables learning new
              professions for sustainable livelihoods.
            </p>
          </div>
        </div>

        <Card className="mb-12 bg-green-500 text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Key Features of Economic Empowerment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <span>Village savings and loans association</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6" />
                <span>Selection business planning and management</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <span>Financial literacy</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6" />
                <span>Community skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6" />
                <span>Apprenticeship</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-green-600 mb-4">Short-term Training</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide practical skills and knowledge to people with low income through focused, intensive
                training programs that can be immediately applied to generate income.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-green-600 mb-4">Long-term Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive training programs that allow individuals to learn new professions and develop
                sustainable career paths for long-term economic stability.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25</div>
              <p className="text-gray-700">Savings Groups</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
              <p className="text-gray-700">People Trained</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-700">Businesses Started</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$50K+</div>
              <p className="text-gray-700">Loans Distributed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EconomicEmpowerment;