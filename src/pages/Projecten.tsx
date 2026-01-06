import React, { useState } from 'react';
import { CheckCircle, Eye, X } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

interface Project {
  id: number;
  title: string;
  location: string;
  size?: string;
  category: '0-100' | '100-250' | '250-500';
  image: string;
  description: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Compacte Stadstuin",
    location: "Amsterdam Centrum",
    size: "45m²",
    category: "0-100",
    image: "/images/project-daktuin.jpg",
    description: "Moderne stadstuin met verticale beplanting en slim ruimtegebruik"
  },
  {
    id: 2,
    title: "Maatwerk Tuinpoort",
    location: "Heiloo",
    category: "0-100",
    image: "/images/custom-gate.jpeg",
    description: "Op maat gemaakte moderne tuinpoort met strak design in zwart. Volledig handgemaakt met oog voor detail en duurzaamheid"
  },
  {
    id: 3,
    title: "Familietuin",
    location: "Haarlem",
    size: "150m²",
    category: "100-250",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Kindvriendelijke tuin met speelruimte en groentemoestuin"
  },
  {
    id: 4,
    title: "Mediterrane Tuin",
    location: "Rotterdam",
    size: "180m²",
    category: "100-250",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Zonnige tuin met olijfbomen, lavendel en natuursteen"
  },
  {
    id: 5,
    title: "Landelijke Tuin",
    location: "Amersfoort",
    size: "320m²",
    category: "250-500",
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Uitgestrekte tuin met wilde bloemenweide en fruitbomen"
  },
  {
    id: 6,
    title: "Moderne Villa Tuin",
    location: "Wassenaar",
    size: "450m²",
    category: "250-500",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Luxe tuin met zwembad, buitenkeuken en designverlichting"
  },
  {
    id: 7,
    title: "Daktuin",
    location: "Den Haag",
    size: "80m²",
    category: "0-100",
    image: "/images/project-daktuin.jpg",
    description: "Groene oase op het dak met windbestendige beplanting"
  },
  {
    id: 8,
    title: "Cottage Garden",
    location: "Leiden",
    size: "200m²",
    category: "100-250",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Romantische cottage tuin met rozen en boerenplanten"
  },
  {
    id: 9,
    title: "Schoolplein Renovatie",
    location: "Castricum",
    size: "85m²",
    category: "0-100",
    image: "/images/playground-after.jpeg",
    description: "Volledig opgeknapte speelplaats met vernieuwde bestrating en modernisering van het schoolplein",
    beforeAfter: {
      before: "/images/playground-before.jpeg",
      after: "/images/playground-after.jpeg"
    }
  }
];

const ProjectenPage = () => {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const openLightbox = (project: Project) => {
    setLightboxProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Intro Section - Two Column */}
      <section className="pt-16 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center mb-16">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Premium gerealiseerde
                  <span className="block text-primary-900 mt-2">tuinprojecten</span>
                </h1>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Ontdek onze portfolio van premium tuinprojecten. Van compacte stadstuinen 
                  tot uitgestrekte landschappen - elk project uniek en vakkundig uitgevoerd.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Meer dan 500 gerealiseerde projecten",
                    "Van klein tot groot (0-500m²)",
                    "Unieke ontwerpen op maat",
                    "Vakkundige uitvoering"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-stone-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img 
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Premium tuinprojecten"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-soft-lg border border-white/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900 mb-2">500+</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Projecten</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>

          {/* Section Title */}
          <AnimationObserver>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900">
                Alle Projecten
              </h2>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Projects Portfolio Grid */}
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {projects.map((project, index) => (
              <AnimationObserver
                key={project.id}
                delay={index * 100}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2">
                  {/* Project Image - Before/After or Single */}
                  {project.beforeAfter ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                      <div className="grid grid-cols-2 h-full">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.beforeAfter.before}
                            alt={`${project.title} - Voor`}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-2 left-2 bg-stone-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white">
                            VOOR
                          </div>
                        </div>
                        <div className="relative overflow-hidden">
                          <img
                            src={project.beforeAfter.after}
                            alt={`${project.title} - Na`}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-2 right-2 bg-primary-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white">
                            NA
                          </div>
                        </div>
                      </div>
                      {/* Size Badge */}
                      {project.size && (
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-stone-900 shadow-soft border border-white/50">
                          {project.size}
                        </div>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Bekijk Project Button */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <button
                          onClick={() => openLightbox(project)}
                          className="w-full bg-white/95 backdrop-blur-sm text-primary-900 py-3 px-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 inline-flex items-center justify-center"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Bekijk Project
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Size Badge */}
                      {project.size && (
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-stone-900 shadow-soft border border-white/50">
                          {project.size}
                        </div>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Bekijk Project Button */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <button
                          onClick={() => openLightbox(project)}
                          className="w-full bg-white/95 backdrop-blur-sm text-primary-900 py-3 px-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 inline-flex items-center justify-center"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Bekijk Project
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-primary-900 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-primary-900 font-semibold mb-3 text-sm uppercase tracking-wider">
                      {project.location}
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black overflow-y-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-4 right-4 md:top-6 md:right-6 text-white hover:text-stone-300 transition-colors z-50 bg-black/50 rounded-full p-2"
            aria-label="Sluit lightbox"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {lightboxProject.beforeAfter ? (
            <div className="min-h-screen" onClick={(e) => e.stopPropagation()}>
              {/* Na foto eerst - schermvullend */}
              <div className="relative w-full h-screen">
                <img
                  src={lightboxProject.beforeAfter.after}
                  alt={`${lightboxProject.title} - Na`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-900/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-lg font-bold text-white shadow-lg">
                  NA
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{lightboxProject.title}</h3>
                  <p className="text-white/90 text-base md:text-lg mt-2">{lightboxProject.location}</p>
                  <p className="text-white/70 text-sm md:text-base mt-3 flex items-center">
                    <span className="mr-2">Scroll omlaag voor de 'voor' foto</span>
                    <span className="animate-bounce">↓</span>
                  </p>
                </div>
              </div>

              {/* Voor foto daarna - schermvullend */}
              <div className="relative w-full h-screen">
                <img
                  src={lightboxProject.beforeAfter.before}
                  alt={`${lightboxProject.title} - Voor`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-stone-900/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-lg font-bold text-white shadow-lg">
                  VOOR
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{lightboxProject.title}</h3>
                  <p className="text-white/90 text-base md:text-lg mt-2">{lightboxProject.location}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative min-h-screen flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full max-w-7xl">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className={`w-full ${
                    lightboxProject.title === "Maatwerk Tuinpoort"
                      ? "object-contain max-h-[90vh]"
                      : "object-cover max-h-[90vh]"
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{lightboxProject.title}</h3>
                  <p className="text-white/90 text-base md:text-lg mt-2">{lightboxProject.location}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </>
  );
};

export default ProjectenPage;