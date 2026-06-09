import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const ChetnaHome = () => {
  const C = COMPANY.UNITS.CHETNA;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-chetna-900 via-gray-950 to-xnava-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-chetna-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-xnava-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-24 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Badge color="chetna" size="lg" className="mb-6">STEM & Foundation Institute</Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 text-balance">
              {C.NAME}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl text-chetna-300 font-semibold italic mb-3">
              &ldquo;{C.TAGLINE}&rdquo;
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="text-lg text-chetna-200/70 mb-6">{C.CLASSES} | JEE • NEET • NDA | CBSE • ICSE • UP Board</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mb-10">
              {['Classes 5–12', 'JEE', 'NEET', 'NDA', 'CBSE', 'ICSE'].map((b) => (
                <Badge key={b} color="white" size="sm">{b}</Badge>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">Explore Programs</Button>
              <Button to={ROUTES.CONTACT} variant="ghostDark" size="lg">Get Admission Info</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <SectionHeading title="Why Chetna" gradient="Academy?" description="A coaching institute built on demonstrative teaching, personal attention, and complete academic support." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {C.WHY_CHOOSE.map((item, i) => (
              <ScrollReveal key={item.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className="text-center border-t-2 border-t-chetna-500 h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="fadeInUp">
            <Card variant="dark" padding="lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <Badge color="chetna" size="sm" className="mb-4">Teaching Method</Badge>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{C.TEACHING_METHOD.TITLE}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{C.TEACHING_METHOD.DESCRIPTION}</p>
                  <ul className="space-y-2">
                    {C.TEACHING_METHOD.FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-chetna-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-32 h-32 bg-chetna-500/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🧠</span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Digital Learning */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="fadeInUp">
            <Card variant="dark" padding="lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
                  <div className="w-32 h-32 bg-chetna-500/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl">📱</span>
                  </div>
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <Badge color="chetna" size="sm" className="mb-4">Digital Learning</Badge>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{C.DIGITAL_LEARNING.TITLE}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{C.DIGITAL_LEARNING.DESCRIPTION}</p>
                  <ul className="space-y-2">
                    {C.DIGITAL_LEARNING.FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-chetna-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Infrastructure + Support */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal variant="fadeInLeft">
              <Card variant="dark" padding="lg" className="h-full border-t-2 border-t-chetna-500">
                <CardTitle className="text-white">Infrastructure & Facilities</CardTitle>
                <ul className="mt-4 space-y-2">
                  {C.INFRASTRUCTURE.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-chetna-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal variant="fadeInRight">
              <Card variant="dark" padding="lg" className="h-full border-t-2 border-t-chetna-500">
                <CardTitle className="text-white">Student Support System</CardTitle>
                <ul className="mt-4 space-y-2">
                  {C.STUDENT_SUPPORT.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-chetna-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="What We" gradient="Offer" />
          <ScrollReveal variant="fadeInUp">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {C.OFFERINGS.map((o) => (
                <Card key={o} variant="dark" padding="lg" className="text-center">
                  <svg className="w-8 h-8 text-chetna-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="font-semibold text-white">{o}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-chetna-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-chetna-400/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10 max-w-2xl">
          <ScrollReveal variant="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{C.ADMISSION}</h2>
            <p className="text-chetna-200/70 text-lg mb-4 leading-relaxed">{C.LOCATION_DESCRIPTION}</p>
            <p className="text-chetna-200 text-xl font-bold mb-2">📞 {C.PHONE}</p>
            <p className="text-chetna-300/50 text-sm mb-8">📧 {C.EMAIL} &nbsp;|&nbsp; 🕒 {C.WORKING_HOURS.WEEKDAYS}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">View All Programs</Button>
              <Button to={ROUTES.CONTACT} variant="ghostDark" size="lg">Enroll Now</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaHome;