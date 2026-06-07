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
    title: 'Board Exam Preparation',
    target: 'Classes 5–10',
    subjects: 'All subjects as per CBSE / UP Board',
    badge: 'Foundation',
    features: [
      'Chapter-wise detailed notes',
      'Weekly tests with progress tracking',
      'Doubt clearing sessions',
      'Previous year paper practice',
      'Revision bootcamps before exams',
    ],
  },
  {
    title: 'Senior Secondary',
    target: 'Classes 11–12',
    subjects: 'Physics, Chemistry, Mathematics / Biology',
    badge: 'Senior',
    features: [
      'Deep conceptual teaching',
      'Board + competitive exam integration',
      'Practical lab sessions',
      'Full-length mock tests',
      'One-on-one mentorship',
    ],
  },
  {
    title: 'JEE Preparation',
    target: 'Classes 11–12',
    subjects: 'Physics, Chemistry, Mathematics',
    badge: 'JEE',
    features: [
      'JEE Main + Advanced syllabus',
      'Problem-solving workshops',
      'Previous year paper analysis',
      'Performance analytics dashboard',
      'Doubt resolution within 24 hours',
    ],
  },
  {
    title: 'NEET Preparation',
    target: 'Classes 11–12',
    subjects: 'Physics, Chemistry, Biology',
    badge: 'NEET',
    features: [
      'NCERT-focused foundation',
      'Diagram-based biology teaching',
      'Chapter-wise MCQ practice',
      'Full syllabus mock tests',
      'Previous year NEET paper breakdown',
    ],
  },
];

const ChetnaPrograms = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-chetna-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Programs"
            badgeColor="chetna"
            title={META.CHETNA_PROGRAMS.TITLE}
            description="Choose the right program for your academic goals. All programs include access to our premium study materials."
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
                  <p className="text-sm text-chetna-600 font-medium mb-3">
                    {program.subjects}
                  </p>
                  <CardDescription className="mb-5 flex-1">
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                  <Button to={ROUTES.CONTACT} variant="chetna" fullWidth>
                    Enquire Now
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials Note ── */}
      <section className="py-16 bg-chetna-50">
        <div className="container-custom max-w-2xl text-center">
          <ScrollReveal variant="slideUp">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Premium Study Materials Included
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every program includes access to our high-quality printed and digital study
              materials — designed to make learning effective and enjoyable.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {COMPANY.UNITS.CHETNA.MATERIALS.map((material) => (
                <Badge key={material} color="gray" className="bg-chetna-100 text-chetna-800 border border-chetna-200">
                  {material}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-chetna-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not sure which program fits best?
            </h2>
            <p className="text-chetna-200 text-lg mb-8 leading-relaxed">
              Talk to our academic counsellor. We&apos;ll help you choose the right path
              based on your child&apos;s goals and current level.
            </p>
            <Button to={ROUTES.CONTACT} variant="chetna" size="lg">
              Contact Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaPrograms;