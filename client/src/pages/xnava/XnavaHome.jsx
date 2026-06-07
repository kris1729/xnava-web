import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { motion } from 'framer-motion';

const STATS = [
  { value: 2, suffix: '+', label: 'Educational Units' },
  { value: 30, suffix: '+', label: 'Mentors & Faculty' },
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 95, suffix: '%', label: 'Success Rate' },
];

const XnavaHome = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-xnava-50 via-white to-xnava-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 text-balance leading-tight">
                {META.HOME.TITLE}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
                {COMPANY.TAGLINE}. Two specialized units — one for engineering placements, one for school excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" size="lg">
                  Explore TechTrainx Labs
                </Button>
                <Button to={ROUTES.CHETNA_HOME} variant="chetna" size="lg">
                  Explore Chetna Academy
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <ScrollReveal key={stat.label} variant="fadeIn">
                <div className="text-center">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl sm:text-4xl lg:text-5xl text-xnava-600 block mb-2"
                  />
                  <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Units */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Units"
            title="Two Verticals. One Mission."
            description="Building careers through skills and strengthening foundations through education."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TechTrainx */}
            <ScrollReveal variant="slideLeft">
              <Card hover padding="lg" className="border-l-4 border-l-techtrainx-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-techtrainx-100 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-techtrainx-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle>{COMPANY.UNITS.TECHTRAINX.NAME}</CardTitle>
                </div>
                <CardDescription className="mb-1">
                  <span className="block text-techtrainx-600 font-semibold italic mb-2">
                    &ldquo;{COMPANY.UNITS.TECHTRAINX.TAGLINE}&rdquo;
                  </span>
                </CardDescription>
                <CardDescription>{COMPANY.UNITS.TECHTRAINX.DESCRIPTION}</CardDescription>
                <div className="mt-6">
                  <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" size="md">
                    Learn More
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Chetna */}
            <ScrollReveal variant="slideRight">
              <Card hover padding="lg" className="border-l-4 border-l-chetna-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-chetna-100 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-chetna-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle>{COMPANY.UNITS.CHETNA.NAME}</CardTitle>
                </div>
                <CardDescription>{COMPANY.UNITS.CHETNA.DESCRIPTION}</CardDescription>
                <p className="text-sm text-gray-500 mt-3">For {COMPANY.UNITS.CHETNA.CLASSES}</p>
                <div className="mt-6">
                  <Button to={ROUTES.CHETNA_HOME} variant="chetna" size="md">
                    Learn More
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-xnava-900">
        <div className="container-custom text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Your Future?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re an engineering student looking for placement or a school student aiming for IIT/NEET — we have the right program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="primary" size="lg">
                Contact Us
              </Button>
              <Button to={ROUTES.ABOUT} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-xnava-900">
                About Xnava
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaHome;