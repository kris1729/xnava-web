import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  { icon: '🏫', title: 'Offline + Online', desc: 'Classroom near Amity University or live online — same quality, your choice.' },
  { icon: '👨‍🏫', title: 'MNC Mentors', desc: `Direct mentorship from ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.slice(0, 3).join(', ')} & more.` },
  { icon: '📚', title: `${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ Problems`, desc: 'Placement-oriented DSA in Java & C++. Pattern-based approach.' },
  { icon: '🏗️', title: '2 Live Projects', desc: 'Full Stack + AI/ML. Deployed and on GitHub. Ready to show in interviews.' },
];

const PROGRAMS = [
  {
    badge: '🏫 OFFLINE',
    title: 'Classroom Program',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.FULL_COURSE,
    monthly: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MONTHLY,
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MODE,
    features: ['Daily 2-hour offline classes', 'Face-to-face mentorship', 'Small batch of 30 students', '2 certificates', '7-day free demo'],
  },
  {
    badge: '🌐 ONLINE',
    title: 'Online Live Program',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.FULL_COURSE,
    monthly: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MONTHLY,
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MODE,
    features: ['Daily 2-hour live online classes', 'Same curriculum as offline', 'Study from anywhere in India', 'Same 2 certificates', '7-day free demo'],
  },
  {
    badge: '⚡ DSA BOOTCAMP',
    title: '45-Day DSA Intensive',
    price: COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.FULL_COURSE,
    monthly: 'One-time',
    mode: COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.MODE,
    features: [`${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems`, 'Java & C++ tracks', '3 mock interviews', '1 Certificate', '7-day free demo'],
    highlight: true,
  },
];

const TechTrainxHome = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-techtrainx-900 via-gray-950 to-xnava-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-techtrainx-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-xnava-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-24 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Badge color="techtrainx" size="lg" className="mb-6">Placement Bootcamp</Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 text-balance">
              {COMPANY.UNITS.TECHTRAINX.NAME}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl text-techtrainx-300 font-semibold italic mb-4">
              &ldquo;{COMPANY.UNITS.TECHTRAINX.TAGLINE}&rdquo;
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <Badge color="white" size="sm">{COMPANY.UNITS.TECHTRAINX.SEATS} Seats</Badge>
              <Badge color="white" size="sm">{COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} Months</Badge>
              <Badge color="success" size="sm">Free Demo Week</Badge>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="text-techtrainx-300 text-sm mb-10">
              Mentors from {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">View Programs & Pricing</Button>
              <Button to={ROUTES.CONTACT} variant="ghostDark" size="lg">{COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-Day Free Demo</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <SectionHeading title="What Makes This" gradient="Different" description="Not a generic online course. An intensive program designed to get you hired." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <ScrollReveal key={item.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className="text-center h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <SectionHeading eyebrow="Programs & Pricing" eyebrowColor="techtrainx" title="Choose Your" gradient="Path" description={`All programs include ${COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-day free demo. No payment until you experience the training.`} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROGRAMS.map((p, i) => (
              <ScrollReveal key={p.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className={`h-full flex flex-col ${p.highlight ? 'border-techtrainx-500/50 ring-1 ring-techtrainx-500/20' : ''}`}>
                  <Badge color={p.highlight ? 'techtrainx' : 'gray'} size="sm" className="mb-4 self-start">{p.badge}</Badge>
                  <CardTitle className="text-white text-xl">{p.title}</CardTitle>
                  <div className="my-4">
                    <span className="text-4xl font-heading font-bold text-white">{p.price}</span>
                    {p.monthly !== 'One-time' && <span className="text-sm text-gray-500 ml-2">or {p.monthly}/mo</span>}
                  </div>
                  <p className="text-xs text-gray-500 mb-5">{p.mode}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-techtrainx-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button to={ROUTES.CONTACT} variant={p.highlight ? 'techtrainx' : 'ghostDark'} fullWidth>Register Now</Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor CTA */}
      <section className="relative py-28 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-techtrainx-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10 max-w-2xl">
          <ScrollReveal variant="fadeInUp">
            <div className="w-16 h-16 bg-techtrainx-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👨‍🏫</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{COMPANY.UNITS.TECHTRAINX.MENTORS}</h2>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">Real professionals from {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}.</p>
            <p className="text-techtrainx-300 text-xl font-bold mb-8">📞 {COMPANY.UNITS.TECHTRAINX.PHONE}</p>
            <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">Start Your Free Demo</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TechTrainxHome;