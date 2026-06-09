import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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

const TRUST_BADGES = ['Registered Partnership', 'MSME Certified', 'GST Registered'];

const HERO_STAGGER = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const XnavaHome = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Dark, full-bleed, floating orbs
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-xnava-950 via-gray-950 to-gray-950 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-xnava-600/15 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-xnava-500/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
          <div className="absolute -bottom-40 right-1/4 w-[350px] h-[350px] bg-xnava-400/6 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container-custom relative z-10 py-24 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges */}
            <motion.div
              {...HERO_STAGGER}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {TRUST_BADGES.map((badge) => (
                <Badge key={badge} color="white" size="sm">
                  {badge}
                </Badge>
              ))}
            </motion.div>

            {/* Eyebrow */}
            <motion.div {...HERO_STAGGER} transition={{ delay: 0.15, duration: 0.5 }}>
              <Badge color="xnava" size="md" className="mb-6">
                Lucknow&apos;s Technology & Education Company
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...HERO_STAGGER}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white mb-6 text-balance leading-tight"
            >
              Building India&apos;s{' '}
              <span className="bg-gradient-to-r from-xnava-400 to-xnava-200 bg-clip-text text-transparent">
                Next Generation
              </span>{' '}
              of Tech Talent
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...HERO_STAGGER}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Two focused units. One mission — producing graduates that companies actually want to hire.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...HERO_STAGGER}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" size="lg">
                Explore TechTrainx
              </Button>
              <Button to={ROUTES.CHETNA_HOME} variant="ghostDark" size="lg">
                Chetna Academy
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-20"
            >
              <div className="w-5 h-8 border-2 border-gray-600 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-2 bg-xnava-400 rounded-full mt-1.5 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════ */}
      <section className="bg-gray-900 border-y border-gray-800 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center lg:border-r border-gray-800 last:border-r-0">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl sm:text-5xl bg-gradient-to-r from-xnava-400 to-xnava-200 bg-clip-text text-transparent block mb-2"
                />
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TWO UNIT CARDS
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Units"
            eyebrowColor="xnava"
            title="Two Verticals."
            gradient="One Mission."
            description="Career-ready skills for engineers. Strong academic foundations for school students."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TechTrainx Card */}
            <ScrollReveal variant="fadeInLeft">
              <Card hover variant="dark" padding="lg" className="border-t-2 border-t-techtrainx-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-techtrainx-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-techtrainx-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Badge color="techtrainx">Placement Bootcamp</Badge>
                </div>
                <CardTitle className="text-white">{COMPANY.UNITS.TECHTRAINX.NAME}</CardTitle>
                <CardDescription>{COMPANY.UNITS.TECHTRAINX.DESCRIPTION}</CardDescription>
                <ul className="mt-6 space-y-3 flex-1">
                  {COMPANY.UNITS.TECHTRAINX.CURRICULUM.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-techtrainx-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2 mb-6">
                  <Badge color="gray" size="sm">{COMPANY.UNITS.TECHTRAINX.SEATS} Seats</Badge>
                  <Badge color="gray" size="sm">{COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} Months</Badge>
                  <Badge color="success" size="sm">Free Demo</Badge>
                </div>
                <Button to={ROUTES.TECHTRAINX_HOME} variant="techtrainx" rightIcon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                }>
                  View Bootcamp
                </Button>
              </Card>
            </ScrollReveal>

            {/* Chetna Card */}
            <ScrollReveal variant="fadeInRight">
              <Card hover variant="dark" padding="lg" className="border-t-2 border-t-chetna-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-chetna-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-chetna-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <Badge color="chetna">School Education</Badge>
                </div>
                <CardTitle className="text-white">{COMPANY.UNITS.CHETNA.NAME}</CardTitle>
                <CardDescription>{COMPANY.UNITS.CHETNA.DESCRIPTION}</CardDescription>
                <ul className="mt-6 space-y-3 flex-1">
                  {COMPANY.UNITS.CHETNA.OFFERINGS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-chetna-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2 mb-6">
                  <Badge color="gray" size="sm">{COMPANY.UNITS.CHETNA.CLASSES}</Badge>
                  <Badge color="gray" size="sm">JEE</Badge>
                  <Badge color="gray" size="sm">NEET</Badge>
                  <Badge color="gray" size="sm">NDA</Badge>
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

      {/* ═══════════════════════════════════════════
          DARK CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-28 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-xnava-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10 max-w-3xl">
          <ScrollReveal variant="fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re a student looking for placement prep or a parent searching for quality education — we have a place for you.
            </p>
            <p className="text-gray-500 text-sm mb-10">
              📞 {COMPANY.UNITS.TECHTRAINX.PHONE} &nbsp;|&nbsp; 📧 {COMPANY.EMAIL.INFO}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button to={ROUTES.ABOUT} variant="ghostDark" size="lg">
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