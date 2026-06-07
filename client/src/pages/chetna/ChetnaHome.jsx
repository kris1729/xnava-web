import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Board Exam Prep',
    description: 'Comprehensive coverage of CBSE and UP Board syllabi with chapter-wise tests and revision plans.',
    icon: '📚',
  },
  {
    title: 'JEE Coaching',
    description: 'Systematic Physics, Chemistry, and Mathematics coaching with problem-solving techniques and mock tests.',
    icon: '🔬',
  },
  {
    title: 'NEET Coaching',
    description: 'Biology-focused preparation with in-depth Botany and Zoology coverage plus Physics and Chemistry.',
    icon: '🩺',
  },
  {
    title: 'Study Materials',
    description: 'High-quality printed and digital study materials designed by subject matter experts.',
    icon: '📖',
  },
];

const ChetnaHome = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-chetna-50 via-white to-chetna-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge color="chetna" className="mb-4">
                School Education
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 text-balance">
                {COMPANY.UNITS.CHETNA.NAME}
              </h1>
              <p className="text-xl sm:text-2xl text-chetna-600 font-semibold mb-6">
                Excellence in School Education
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                {COMPANY.UNITS.CHETNA.DESCRIPTION}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">
                  Explore Programs
                </Button>
                <Button to={ROUTES.CONTACT} variant="outline" size="lg">
                  Get Admission Info
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What We Offer"
            description={`For ${COMPANY.UNITS.CHETNA.CLASSES} students — board exams, competitive exams, and more.`}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center border-t-4 border-t-chetna-500">
                  <span className="text-4xl block mb-4">{feature.icon}</span>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal variant="slideUp">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Premium Study Materials
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  We produce high-quality materials that students actually enjoy studying from.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {COMPANY.UNITS.CHETNA.MATERIALS.map((material) => (
                    <div key={material} className="flex items-center gap-3 p-4 bg-chetna-50 rounded-xl">
                      <svg className="w-6 h-6 text-chetna-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-gray-900">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-chetna-900">
        <div className="container-custom text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build a Strong Foundation
            </h2>
            <p className="text-chetna-200 text-lg mb-8 max-w-xl mx-auto">
              Classes 5–12. Boards. JEE. NEET. Everything your child needs to excel.
            </p>
            <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">
              View All Programs
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaHome;