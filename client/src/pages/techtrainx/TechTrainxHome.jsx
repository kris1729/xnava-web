import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Logo } from '@/components/ui/Logo';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  {
    icon: '🏫',
    title: 'Offline + Online',
    description: `Offline classroom near Amity University, Lucknow. Online live sessions — study from anywhere in India.`,
  },
  {
    icon: '👨‍🏫',
    title: 'MNC Mentors',
    description: `Direct mentorship from engineers at ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.slice(0, 3).join(', ')} & more.`,
  },
  {
    icon: '📚',
    title: `${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ Problems`,
    description: 'Placement-oriented DSA in Java & C++. Pattern-based approach for every topic.',
  },
  {
    icon: '🏗️',
    title: '2 Live Projects',
    description: 'Full Stack + AI/ML. Deployed and on GitHub. Ready to show in interviews.',
  },
];

const PROGRAMS = [
  {
    badge: '🏫 OFFLINE',
    color: 'techtrainx',
    title: 'Offline Classroom Program',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.FULL_COURSE,
    monthly: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MONTHLY,
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MODE,
    features: [
      'Daily 2-hour offline classes',
      'Face-to-face mentorship',
      'Small batch of 30 students',
      'Same certificates as online',
      '7-day free demo',
    ],
    cta: 'Register for Offline',
  },
  {
    badge: '🌐 ONLINE',
    color: 'techtrainx',
    title: 'Online Live Program',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.FULL_COURSE,
    monthly: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MONTHLY,
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MODE,
    features: [
      'Daily 2-hour live online classes',
      'Same curriculum as offline',
      'Study from anywhere in India',
      'Same 2 certificates',
      '7-day free demo',
    ],
    cta: 'Register for Online',
  },
  {
    badge: '⚡ DSA BOOTCAMP',
    color: 'techtrainx',
    title: '45-Day DSA Bootcamp',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.FULL_COURSE,
    monthly: 'One-time payment',
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.MODE,
    features: [
      `${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems`,
      'Java & C++ language tracks',
      '3 mock interviews included',
      '1 DSA Completion Certificate',
      '7-day free demo',
    ],
    cta: 'Register for DSA Bootcamp',
    highlight: true,
  },
];

const METRICS = [
  { value: COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS, suffix: '+', label: 'DSA Problems' },
  { value: COMPANY.UNITS.TECHTRAINX.MODULES_COUNT, suffix: '+', label: 'Core Modules' },
  { value: COMPANY.UNITS.TECHTRAINX.PROJECTS_COUNT, suffix: '', label: 'Live Projects' },
  { value: COMPANY.UNITS.TECHTRAINX.CERTIFICATES_COUNT, suffix: '', label: 'Certificates' },
];

const TechTrainxHome = () => {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-techtrainx-900 via-techtrainx-900 to-xnava-900">
        <div className="container-custom py-20 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
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
                Placement Bootcamp — Offline & Online
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
              className="text-lg text-techtrainx-200 mb-3 max-w-xl mx-auto"
            >
              {COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months. {COMPANY.UNITS.TECHTRAINX.SEATS} seats. {COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems. 2 projects. 2 certificates.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-techtrainx-300 text-sm mb-8"
            >
              Mentors from {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
                View Programs & Pricing
              </Button>
              <Button
                to={ROUTES.CONTACT}
                size="lg"
                className="border-2 border-techtrainx-300 text-techtrainx-300 hover:bg-techtrainx-300 hover:text-techtrainx-900"
              >
                {COMPANY.UNITS.TECHTRAINX.DEMO_WEEK} — Join Free
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ METRICS ═══════════ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((metric, i) => (
              <div key={metric.label} className="text-center lg:border-r border-gray-200 last:border-r-0">
                <span className="block text-3xl sm:text-4xl font-bold text-techtrainx-600">
                  {metric.value}{metric.suffix}
                </span>
                <span className="text-sm text-gray-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HIGHLIGHTS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What Makes This Different"
            description="Not a generic online course. An intensive program — offline or online — designed to get you hired."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <ScrollReveal key={item.title} variant="fadeIn" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center border-techtrainx-100 h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3 PROGRAMS ═══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            badge="Programs & Pricing"
            badgeColor="techtrainx"
            title="Choose Your Path"
            description={`All programs include ${COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-day free demo. No payment until you experience the training.`}
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROGRAMS.map((program, index) => (
              <ScrollReveal key={program.title} variant="slideUp" delay={index * 0.1}>
                <Card
                  hover
                  padding="lg"
                  className={`h-full flex flex-col border-t-4 ${
                    program.highlight
                      ? 'border-t-techtrainx-500 ring-2 ring-techtrainx-200'
                      : 'border-t-techtrainx-300'
                  }`}
                >
                  <Badge color={program.color} className="mb-3 self-start">
                    {program.badge}
                  </Badge>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="my-4">
                    <span className="text-4xl font-heading font-bold text-techtrainx-600">
                      {program.price}
                    </span>
                    {program.monthly !== 'One-time payment' && (
                      <span className="text-sm text-gray-500 ml-2">
                        or {program.monthly}/mo
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{program.mode}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-techtrainx-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button to={ROUTES.CONTACT} variant={program.highlight ? 'techtrainx' : 'outline'} fullWidth>
                    {program.cta}
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
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
              Learn directly from engineers at {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}. 
              Real professionals. Real experience. Real mentorship.
            </p>
            <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
              Start Your {COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-Day Free Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TechTrainxHome;