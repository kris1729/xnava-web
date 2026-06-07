import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Logo } from '@/components/ui/Logo';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const STATS = [
  { value: 400, suffix: '+', label: 'DSA Problems' },
  { value: 30, suffix: '', label: 'Seats Per Batch' },
  { value: 6, suffix: '+', label: 'Core Modules' },
  { value: 2, suffix: '', label: 'Education Units' },
];

const TRUST_BADGES = [
  { label: 'Registered Partnership Firm', icon: '📋' },
  { label: 'MSME Certified', icon: '🏛️' },
  { label: 'GST Registered', icon: '✅' },
];

const HERO_ANIMATION = {
  badge: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1, duration: 0.5 } },
  heading: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.5 } },
  subtitle: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.5 } },
  buttons: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.5 } },
};

const XnavaHome = () => {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-xnava-950 via-xnava-900 to-xnava-800">
        <div className="container-custom py-20 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {TRUST_BADGES.map((badge) => (
                <Badge key={badge.label} color="xnava" className="bg-white/10 text-xnava-100 border border-xnava-400/30 text-xs px-3 py-1">
                  {badge.icon} {badge.label}
                </Badge>
              ))}
            </motion.div>

            <motion.div {...HERO_ANIMATION.badge}>
              <Badge color="xnava" className="mb-6 text-sm px-4 py-1.5">
                Lucknow&apos;s Technology & Education Company
              </Badge>
            </motion.div>

            <motion.h1
              {...HERO_ANIMATION.heading}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 text-balance leading-tight"
            >
              Building India&apos;s Next Generation of Tech Talent
            </motion.h1>

            <motion.p
              {...HERO_ANIMATION.subtitle}
              className="text-lg sm:text-xl text-xnava-200 max-w-2xl mx-auto mb-4 leading-relaxed"
            >
              Two focused units. One mission — producing graduates that companies
              actually want to hire.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xnava-400 text-sm mb-10"
            >
              A Registered Partnership Firm • MSME Certified • Based in Lucknow, India
            </motion.p>

            <motion.div
              {...HERO_ANIMATION.buttons}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" size="lg">
                Explore TechTrainx
              </Button>
              <Button
                to={ROUTES.CHETNA_HOME}
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-xnava-900"
              >
                Chetna Academy
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-16"
            >
              <svg className="w-6 h-6 text-xnava-400 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:border-r border-gray-200 last:border-r-0">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl sm:text-4xl text-xnava-600 block mb-1"
                />
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TWO UNIT CARDS ═══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            badge="Our Units"
            title="Two Units. One Goal."
            description="Career-ready skills for engineers. Strong foundations for school students."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TechTrainx Card */}
            <ScrollReveal variant="slideLeft">
              <Card hover padding="lg" className="border-l-4 border-l-techtrainx-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-techtrainx-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-techtrainx-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Badge color="techtrainx">Placement Bootcamp</Badge>
                </div>
                <CardTitle>{COMPANY.UNITS.TECHTRAINX.NAME}</CardTitle>
                <CardDescription>{COMPANY.UNITS.TECHTRAINX.DESCRIPTION}</CardDescription>
                <ul className="mt-4 space-y-2 flex-1">
                  {COMPANY.UNITS.TECHTRAINX.CURRICULUM.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-techtrainx-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 mb-4">
                  <Badge color="gray">{COMPANY.UNITS.TECHTRAINX.SEATS} Seats</Badge>
                  <Badge color="gray">{COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} Months</Badge>
                  <Badge color="green">Free Demo</Badge>
                </div>
                <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" rightIcon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                }>
                  View Bootcamp
                </Button>
              </Card>
            </ScrollReveal>

            {/* Chetna Card */}
            <ScrollReveal variant="slideRight">
              <Card hover padding="lg" className="border-l-4 border-l-chetna-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-chetna-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-chetna-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <Badge color="chetna">School Education</Badge>
                </div>
                <CardTitle>{COMPANY.UNITS.CHETNA.NAME}</CardTitle>
                <CardDescription>{COMPANY.UNITS.CHETNA.DESCRIPTION}</CardDescription>
                <ul className="mt-4 space-y-2 flex-1">
                  {COMPANY.UNITS.CHETNA.OFFERINGS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 mb-4">
                  <Badge color="gray">{COMPANY.UNITS.CHETNA.CLASSES}</Badge>
                  <Badge color="red">JEE</Badge>
                  <Badge color="red">NEET</Badge>
                  <Badge color="red">NDA</Badge>
                </div>
                <Button to={ROUTES.CHETNA_HOME} variant="chetna" rightIcon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                }>
                  View Programs
                </Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ DARK CTA ═══════════ */}
      <section className="py-20 bg-xnava-900">
        <div className="container-custom text-center max-w-3xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to start your journey?
            </h2>
            <p className="text-xnava-200 text-lg mb-4 leading-relaxed">
              Whether you&apos;re a student looking for placement prep or a parent
              searching for quality school education — we have a place for you.
            </p>
            <p className="text-xnava-400 text-sm mb-8">
              📞 {COMPANY.UNITS.TECHTRAINX.PHONE} &nbsp;|&nbsp; 📧 {COMPANY.EMAIL.INFO}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button to={ROUTES.ABOUT} variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Learn About Us →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaHome;