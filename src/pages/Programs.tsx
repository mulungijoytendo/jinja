import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Heart, Users, Home, DollarSign, Sprout } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programs = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Providing psychosocial support, HIV/AIDS awareness, and prevention services to young people living with and affected by HIV/AIDS in Eastern Uganda.',
      features: [
        'Reached 150 YPLHIV through regional symposiums',
        'Distributed 12,600 condoms',
        'HIV/SGBV prevention and entrepreneurship training for 150 adolescent girls',
        'HIV testing services for 915 people',
        'Family planning services for 131 adolescent girls and young women',
        'Inter-school health debates reaching over 10,500 youths',
      ],
      image: '/images/health-wellness.jpg',
    },
    {
      icon: Sprout,
      title: 'Food Security',
      description: 'Ensuring communities have access to sufficient nutritious food through farming and nutrition programs for sustainable, healthy lives.',
      features: [
        'Farmer field schools training',
        'Urban horticulture and backyard gardening',
        'Cooking demonstrations',
        'Nutrition screening and assessment',
        'Nutrition dialogues for proper nutrition practices',
        'Referrals to Jinja Regional Referral Pediatric Wing for malnutrition cases',
      ],
      image: '/images/food-security.jpg',
    },
    {
      icon: DollarSign,
      title: 'Economic Empowerment',
      description: 'Supporting communities to improve socioeconomic status through savings, loans, and business training for sustainable livelihoods.',
      features: [
        'Village savings and loans associations',
        'Business selection, planning, and management training',
        'Financial literacy programs',
        'Short-term and long-term skills training',
        'Apprenticeships for low-income individuals',
      ],
      image: '/images/economic-empowerment.jpg',
    },
    {
      icon: Users,
      title: 'Family Strengthening',
      description: 'Empowering households with life skills, sexual reproductive health services, and support for children and young people living with HIV.',
      features: [
        'Life skills training for caregivers and young people',
        'Home visits for terminally ill YPLHIV',
        'Parenting skills for adolescent girls and young women',
        'Psycho-social support through counseling, sports, and music, dance, and drama',
        'Community dialogues and needs assessments',
        'Coordination and validation meetings',
      ],
      image: '/images/family-strengthening.jpg',
    },
    {
      icon: Home,
      title: 'Child Protection & Youth Empowerment',
      description: 'Strengthening safety nets and promoting youth leadership through community engagement and access to legal and reproductive health services.',
      features: [
        'Youth mentoring via dance, drama, theater, and testimonies',
        'Access to legal support and civil restitution',
        'Mapping of child protection structures',
        'Birth certificate registration',
        'Child-friendly activities and interactive learning in schools',
        'Youth-friendly spaces for sharing ideas and accessing services',
      ],
      image: '/images/child-protection.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800 tracking-tight animate-fade-in-down">
            Our Programs
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-green-600 max-w-2xl mx-auto animate-fade-in-up">
            JNYPA's transformative programs empower young people and communities affected by HIV/AIDS in Eastern Uganda, fostering health, resilience, and sustainable livelihoods.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {programs.map((program) => (
              <div
                key={program.title}
                className="min-w-full h-[28rem] sm:h-[32rem]"
              >
                <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden h-full border border-green-200">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
                  <div className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col h-full justify-center">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        <program.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg group-hover:text-green-200 transition-colors duration-300">
                        {program.title}
                      </h2>
                    </div>
                    <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed font-medium">
                      {program.description}
                    </p>
                    <ul className="space-y-2 max-h-[10rem] sm:max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-100">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-white text-xs sm:text-sm animate-fade-in"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 sm:p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 sm:p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-500 scale-125' : 'bg-white hover:bg-green-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-green-400 {
          scrollbar-color: #34d399 #e5f5e9;
        }
      `}</style>
    </div>
  );
};

export default Programs;