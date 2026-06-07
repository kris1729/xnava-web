import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Logo } from '@/components/ui/Logo';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'DSA Mastery',
    description: '400+ handpicked problems covering arrays to dynamic programming.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Full Stack Project',
    description: 'Build a production-grade MERN app with deployment and CI/CD.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI/ML Project',
    description: 'Train and deploy a machine learning model with a real-world dataset.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'MNC Mentors',
    description: 'Learn directly from engineers working at top product companies.',
  },
];

const METRICS = [
  { value: COMPANY.UNITS.TECHTRAINX.SEATS, label: 'Seats' },
  { value: COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS, label: 'Months' },
  { value: 'Free', label: 'Demo Week' },
];

const TechTrainxHome = () => {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-techtrainx-900 via-techtrainx-900 to-xnava-900">
        <div className="container-custom py-20 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* ── TechTrainx Logo ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mb-6"
            >
              <Logo unit="techtrainx" variant="white" size="lg" asLink={false} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Badge color="techtrainx" className="mb-6 text-sm px-4 py-1.5">
                Placement Bootcamp
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 text-balance"
            >
              {COMPANY.UNITS.TECHTRAINX.NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl text-techtrainx-300 font-semibold italic mb-4"
            >
              &ldquo;{COMPANY.UNITS.TECHTRAINX.TAGLINE}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg text-techtrainx-200 mb-8 max-w-xl mx-auto"
            >
              {COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months. {COMPANY.UNITS.TECHTRAINX.SEATS} seats. Real projects. Real placements.
            </motion.p>

            {/* Metric Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-6 sm:gap-10 mb-10"
            >
              {METRICS.map((metric) => (
                <div key={metric.label} className="text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span className="text-sm text-techtrainx-300">{metric.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
                Register Interest
              </Button>
              <Button
                to={ROUTES.TECHTRAINX_BOOTCAMP}
                size="lg"
                className="border-2 border-techtrainx-300 text-techtrainx-300 hover:bg-techtrainx-300 hover:text-techtrainx-900"
              >
                View Curriculum
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ HIGHLIGHTS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What Makes This Different"
            description="Not a generic online course. An intensive, offline program designed to get you hired."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <ScrollReveal key={item.title} variant="fadeIn" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center border-techtrainx-100 h-full">
                  <div className="w-12 h-12 bg-techtrainx-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-techtrainx-600">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CURRICULUM ═══════════ */}
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
            {COMPANY.UNITS.TECHTRAINX.CURRICULUM.map((item, index) => (
              <ScrollReveal key={item} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-techtrainx-100 rounded-lg flex items-center justify-center shrink-0">
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
          <div className="text-center mt-10">
            <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="outline" size="lg">
              See Full 12-Week Roadmap →
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ MENTOR CTA ═══════════ */}
      <section className="py-20 bg-techtrainx-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <div className="w-16 h-16 bg-techtrainx-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-techtrainx-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {COMPANY.UNITS.TECHTRAINX.MENTORS}
            </h2>
            <p className="text-techtrainx-200 text-lg mb-8 leading-relaxed">
              Not fresh graduates repeating theory. Seasoned engineers who have
              shipped products used by millions — now training the next wave of talent
              in Lucknow.
            </p>
            <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
              Register for Free Demo Week
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TechTrainxHome;