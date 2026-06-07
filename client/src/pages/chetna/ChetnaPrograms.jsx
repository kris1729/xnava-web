import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';

const PROGRAMS = [
  {
    title: 'Board Exam Preparation',
    target: 'Classes 9–12',
    subjects: 'All subjects as per CBSE / UP Board',
    features: [
      'Chapter-wise detailed notes',
      'Weekly tests and progress tracking',
      'Doubt clearing sessions',
      'Previous year paper practice',
      'Revision bootcamps before exams',
    ],
    icon: '📝',
  },
  {
    title: 'JEE Coaching Program',
    target: 'Classes 11–12',
    subjects: 'Physics, Chemistry, Mathematics',
    features: [
      'Concept-based teaching approach',
      'Problem-solving workshops',
      'Full-length mock tests',
      'Performance analytics',
      'One-on-one mentorship',
    ],
    icon: '⚛️',
  },
  {
    title: 'NEET Coaching Program',
    target: 'Classes 11–12',
    subjects: 'Physics, Chemistry, Biology (Botany + Zoology)',
    features: [
      'NCERT-focused foundation',
      'Diagram-based biology teaching',
      'Chapter-wise MCQs',
      'Full syllabus mock tests',
      'Previous year NEET paper analysis',
    ],
    icon: '🧬',
  },
  {
    title: 'Foundation Program',
    target: 'Classes 5–8',
    subjects: 'Mathematics, Science, English',
    features: [
      'Build strong fundamentals',
      'Activity-based learning',
      'Regular assessments',
      'Parent-teacher meetings',
      'Olympiad preparation',
    ],
    icon: '🏗️',
  },
];

const ChetnaPrograms = () => {
  return (
    <>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROGRAMS.map((program, index) => (
              <ScrollReveal key={program.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="border-t-4 border-t-chetna-500 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{program.icon}</span>
                    <div>
                      <CardTitle>{program.title}</CardTitle>
                      <Badge color="chetna" className="mt-1">
                        {program.target}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    Subjects: {program.subjects}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-chetna-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-chetna-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Program Fits Best?
          </h2>
          <p className="text-chetna-200 text-lg mb-8">
            Talk to our academic counselor. We&apos;ll help you choose the right path.
          </p>
          <Button to={ROUTES.CONTACT} variant="chetna" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default ChetnaPrograms;