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

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Board-Focused',
    description: 'Complete coverage of CBSE and UP Board syllabi with chapter-wise tests and revision plans.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'JEE + NEET Integrated',
    description: 'Competitive exam preparation woven into the curriculum — not a separate add-on.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Premium Materials',
    description: 'High-quality printed and digital study materials — designed by subject matter experts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Faculty',
    description: 'Experienced teachers who specialise in making complex concepts simple and memorable.',
  },
];

const TRUST_BADGES = ['Classes 5–12', 'JEE Coaching', 'NEET Coaching', 'Board Prep'];

const ChetnaHome = () => {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-chetna-900 via-chetna-900 to-chetna-800">
        <div className="container-custom py-20 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* ── Chetna Logo ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mb-6"
            >
              <Logo unit="chetna" variant="white" size="lg" asLink={false} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Badge color="chetna" className="mb-6 text-sm px-4 py-1.5">
                School Education
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 text-balance"
            >
              {COMPANY.UNITS.CHETNA.NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl text-chetna-200 font-semibold mb-4"
            >
              {COMPANY.UNITS.CHETNA.TAGLINE}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg text-chetna-200 mb-6 max-w-xl mx-auto"
            >
              {COMPANY.UNITS.CHETNA.CLASSES}. Board exams. JEE. NEET. One institute. Complete preparation.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {TRUST_BADGES.map((badge) => (
                <Badge key={badge} color="chetna" className="bg-white/10 text-chetna-100 border border-chetna-400/30">
                  {badge}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">
                Explore Programs
              </Button>
              <Button
                to={ROUTES.CONTACT}
                size="lg"
                className="border-2 border-chetna-300 text-chetna-300 hover:bg-chetna-300 hover:text-chetna-900"
              >
                Get Admission Info
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Chetna Academy"
            description={`For ${COMPANY.UNITS.CHETNA.CLASSES} students — everything you need to excel.`}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="flex gap-4 border-t-4 border-t-chetna-500">
                  <div className="w-12 h-12 bg-chetna-100 rounded-xl flex items-center justify-center shrink-0 text-chetna-600">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STUDY MATERIALS ═══════════ */}
      <section className="section-padding bg-chetna-50">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="slideUp">
            <Card padding="lg" className="bg-white border-chetna-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <Badge color="chetna" className="mb-3">Premium Materials</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Study materials students actually enjoy
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We invest heavily in creating study materials that are clear, visually
                    engaging, and exam-focused. Every chapter is designed by subject matter
                    experts who understand exactly what boards and competitive exams demand.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {COMPANY.UNITS.CHETNA.MATERIALS.map((material) => (
                      <Badge key={material} color="gray" className="bg-chetna-100 text-chetna-800 border border-chetna-200">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-40 h-52">
                    <div className="absolute top-0 left-0 w-36 h-48 bg-chetna-600 rounded-lg shadow-lg rotate-[-6deg]" />
                    <div className="absolute top-2 left-2 w-36 h-48 bg-chetna-500 rounded-lg shadow-lg rotate-[-3deg]" />
                    <div className="absolute top-4 left-4 w-36 h-48 bg-white rounded-lg shadow-xl flex items-center justify-center border-2 border-chetna-200">
                      <svg className="w-12 h-12 text-chetna-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ OFFERINGS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="What We Offer"
            align="center"
          />
          <ScrollReveal variant="slideUp">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {COMPANY.UNITS.CHETNA.OFFERINGS.map((offering) => (
                <Card key={offering} padding="lg" className="text-center border-chetna-200">
                  <svg className="w-8 h-8 text-chetna-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-gray-900">{offering}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 bg-chetna-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build a Strong Foundation
            </h2>
            <p className="text-chetna-200 text-lg mb-8 leading-relaxed">
              Admissions open for the upcoming academic session. Limited seats per batch
              to ensure individual attention.
            </p>
            <Button to={ROUTES.CONTACT} variant="chetna" size="lg">
              Enquire Now
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaHome;