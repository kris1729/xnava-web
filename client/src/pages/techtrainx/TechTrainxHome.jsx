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

const HIGHLIGHTS = [
  { icon: '⏱️', title: '3 Months', description: 'Intensive offline program' },
  { icon: '👥', title: `${COMPANY.UNITS.TECHTRAINX.SEATS} Seats Only`, description: 'Small batch, personal attention' },
  { icon: '🎓', title: 'MNC Mentors', description: 'Learn from industry experts' },
  { icon: '🆓', title: 'Free Demo Week', description: 'Try before you commit' },
];

const CURRICULUM = COMPANY.UNITS.TECHTRAINX.CURRICULUM;

const TechTrainxHome = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 via-white to-techtrainx-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge color="techtrainx" className="mb-4">
                Placement Bootcamp
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 text-balance">
                {COMPANY.UNITS.TECHTRAINX.NAME}
              </h1>
              <p className="text-xl sm:text-2xl text-techtrainx-600 font-semibold italic mb-6">
                &ldquo;{COMPANY.UNITS.TECHTRAINX.TAGLINE}&rdquo;
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                {COMPANY.UNITS.TECHTRAINX.DESCRIPTION} Kickstart with a {COMPANY.UNITS.TECHTRAINX.DEMO_WEEK} — zero risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
                  View Bootcamp Details
                </Button>
                <Button to={ROUTES.CONTACT} variant="outline" size="lg">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <ScrollReveal key={item.title} variant="fadeIn" delay={index * 0.1}>
                <Card padding="lg" className="text-center border-techtrainx-100">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            badge="Curriculum"
            badgeColor="techtrainx"
            title="What You Will Learn"
            description="Everything you need to crack product company interviews."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CURRICULUM.map((item, index) => (
              <ScrollReveal key={item} variant="slideUp" delay={index * 0.15}>
                <Card hover padding="lg" className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-techtrainx-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-techtrainx-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item}</CardTitle>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor CTA */}
      <section className="py-20 bg-techtrainx-900">
        <div className="container-custom text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {COMPANY.UNITS.TECHTRAINX.MENTORS}
            </h2>
            <p className="text-techtrainx-200 text-lg mb-8 max-w-xl mx-auto">
              Only {COMPANY.UNITS.TECHTRAINX.SEATS} seats per batch. First come, first served.
            </p>
            <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
              See Full Bootcamp Details
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TechTrainxHome;