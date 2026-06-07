import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PROGRAMS = [
  {
    title: 'Foundation Courses',
    target: 'Class 5–10',
    badge: 'Foundation',
    subjects: 'Mathematics, Science (Physics, Chemistry, Biology)',
    description: 'Build strong fundamentals from an early age. Prepare for Olympiads, NTSE, and school excellence.',
    features: [
      'Mathematics — Basic to Advanced',
      'Science — Physics, Chemistry, Biology',
      'Olympiad Preparation',
      'NTSE / Foundation Programs',
      'Weekly tests & progress reports',
      'Smart classroom learning',
    ],
  },
  {
    title: 'Board Classes (PCM / PCB)',
    target: 'Class 11–12',
    badge: 'Senior Secondary',
    subjects: 'Physics, Chemistry, Mathematics / Biology',
    description: 'Complete board exam preparation for CBSE, ICSE, and UP Board with concept clarity and exam strategy.',
    features: [
      'PCM — Physics, Chemistry, Mathematics',
      'PCB — Physics, Chemistry, Biology',
      'CBSE / ICSE / UP Board coverage',
      'Chapter-wise notes & revision',
      'Previous year paper practice',
      'Pre-board mock tests',
    ],
  },
  {
    title: 'JEE Preparation',
    target: 'Class 11–12',
    badge: 'JEE',
    subjects: 'Physics, Chemistry, Mathematics',
    description: 'Advanced problem-solving for JEE Main + Advanced. Concept strengthening with weekly test series.',
    features: [
      'JEE Main + Advanced syllabus coverage',
      'Advanced problem-solving techniques',
      'Concept strengthening workshops',
      'Weekly test series with analysis',
      'Previous year JEE paper solving',
      'Performance analytics & feedback',
    ],
  },
  {
    title: 'NEET Preparation',
    target: 'Class 11–12',
    badge: 'NEET',
    subjects: 'Physics, Chemistry, Biology',
    description: 'NCERT-based Biology focus with full syllabus coverage. Mock tests with detailed analysis.',
    features: [
      'NCERT-based Biology in-depth teaching',
      'Full syllabus coverage — PCB',
      'Diagram-based visual learning',
      'Chapter-wise MCQ practice',
      'Full-length mock tests',
      'Previous year NEET paper analysis',
    ],
  },
  {
    title: 'NDA Preparation',
    target: 'Class 11–12',
    badge: 'NDA',
    subjects: 'Mathematics + GAT (General Ability Test)',
    description: 'Complete NDA exam preparation with Mathematics, GAT, defense exam strategy, and interview guidance.',
    features: [
      'Mathematics — complete NDA syllabus',
      'GAT — General Ability Test preparation',
      'Defense exam strategy & planning',
      'Physical fitness guidance',
      'SSB interview preparation',
      'Mock tests & performance tracking',
    ],
  },
];

const ChetnaPrograms = () => {
  const C = COMPANY.UNITS.CHETNA;

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-chetna-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Programs"
            badgeColor="chetna"
            title={META.CHETNA_PROGRAMS.TITLE}
            description={`Complete academic programs for ${C.CLASSES}. Board exams, JEE, NEET, NDA — all under one roof with demonstrative teaching and hybrid learning support.`}
            align="center"
          />
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROGRAMS.map((program, index) => (
              <ScrollReveal key={program.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="border-t-4 border-t-chetna-500 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge color="chetna">{program.badge}</Badge>
                    <span className="text-xs text-gray-500">{program.target}</span>
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                  <p className="text-sm text-chetna-600 font-medium mb-2">{program.subjects}</p>
                  <CardDescription className="mb-4">{program.description}</CardDescription>
                  <ul className="space-y-2 mb-6 flex-1">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button to={ROUTES.CONTACT} variant="chetna" fullWidth>
                    Enquire Now
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning App ── */}
      <section className="py-16 bg-chetna-50">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal variant="slideUp">
            <span className="text-5xl block mb-4">📱</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {C.DIGITAL_LEARNING.TITLE}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {C.DIGITAL_LEARNING.DESCRIPTION}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {C.DIGITAL_LEARNING.FEATURES.map((feature) => (
                <Badge key={feature} color="gray" className="bg-chetna-100 text-chetna-800 border border-chetna-200">
                  {feature}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Working Hours ── */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-lg text-center">
          <ScrollReveal variant="slideUp">
            <Card padding="lg" className="border-chetna-200">
              <span className="text-4xl block mb-3">🕒</span>
              <h4 className="font-semibold text-gray-900 mb-2">Working Hours</h4>
              <p className="text-gray-600">{C.WORKING_HOURS.WEEKDAYS}</p>
              <p className="text-gray-400 text-sm">{C.WORKING_HOURS.SUNDAY}</p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-chetna-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {C.ADMISSION}
            </h2>
            <p className="text-chetna-200 text-lg mb-4 leading-relaxed">
              Limited seats per batch. Small batch size ensures personal attention. 
              Enroll now to build a strong foundation.
            </p>
            <p className="text-chetna-300 text-xl font-bold mb-2">
              📞 {C.PHONE}
            </p>
            <p className="text-chetna-400 text-sm mb-8">
              📧 {C.EMAIL}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="chetna" size="lg">
                Contact Us
              </Button>
              <Button
                href={`tel:${C.PHONE.replace(/\s/g, '')}`}
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-chetna-900"
              >
                📞 Call Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaPrograms;