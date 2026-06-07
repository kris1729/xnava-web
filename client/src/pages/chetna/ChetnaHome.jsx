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

const ChetnaHome = () => {
  const C = COMPANY.UNITS.CHETNA;

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-chetna-900 via-chetna-900 to-chetna-800">
        <div className="container-custom py-20 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
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
              <Badge color="chetna" className="mb-6 text-sm px-4 py-1.5 bg-white/10 text-chetna-100 border border-chetna-400/30">
                STEM & Foundation Institute
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 text-balance"
            >
              {C.NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl text-chetna-200 font-semibold italic mb-3"
            >
              &ldquo;{C.TAGLINE}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg text-chetna-200 mb-2 max-w-2xl mx-auto"
            >
              {C.CLASSES} | JEE • NEET • NDA | CBSE • ICSE • UP Board
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-chetna-300 text-sm mb-8"
            >
              {C.LOCATION}
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {['Classes 5–12', 'JEE', 'NEET', 'NDA', 'CBSE', 'ICSE'].map((badge) => (
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

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Chetna Academy?"
            description="A coaching institute built on demonstrative teaching, personal attention, and complete academic support."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {C.WHY_CHOOSE.map((item, index) => (
              <ScrollReveal key={item.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center border-t-4 border-t-chetna-500 h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEACHING METHODOLOGY ═══════════ */}
      <section className="section-padding bg-chetna-50">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="slideUp">
            <Card padding="lg" className="bg-white border-chetna-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <Badge color="chetna" className="mb-3">Teaching Method</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {C.TEACHING_METHOD.TITLE}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {C.TEACHING_METHOD.DESCRIPTION}
                  </p>
                  <ul className="space-y-2">
                    {C.TEACHING_METHOD.FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-32 h-32 bg-chetna-100 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🧠</span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ DIGITAL LEARNING ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="slideUp">
            <Card padding="lg" className="border-chetna-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
                  <div className="w-32 h-32 bg-chetna-100 rounded-full flex items-center justify-center">
                    <span className="text-6xl">📱</span>
                  </div>
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <Badge color="chetna" className="mb-3">Digital Learning</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {C.DIGITAL_LEARNING.TITLE}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {C.DIGITAL_LEARNING.DESCRIPTION}
                  </p>
                  <ul className="space-y-2">
                    {C.DIGITAL_LEARNING.FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ INFRASTRUCTURE + SUPPORT ═══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal variant="slideLeft">
              <Card padding="lg" className="h-full border-t-4 border-t-chetna-500">
                <CardTitle>Infrastructure & Facilities</CardTitle>
                <ul className="mt-4 space-y-2">
                  {C.INFRASTRUCTURE.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <Card padding="lg" className="h-full border-t-4 border-t-chetna-500">
                <CardTitle>Student Support System</CardTitle>
                <ul className="mt-4 space-y-2">
                  {C.STUDENT_SUPPORT.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-chetna-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ OFFERINGS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="What We Offer" align="center" />
          <ScrollReveal variant="slideUp">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {C.OFFERINGS.map((offering) => (
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
              {C.ADMISSION}
            </h2>
            <p className="text-chetna-200 text-lg mb-4 leading-relaxed">
              {C.LOCATION_DESCRIPTION}
            </p>
            <p className="text-chetna-300 text-xl font-bold mb-2">
              📞 {C.PHONE}
            </p>
            <p className="text-chetna-400 text-sm mb-8">
              📧 {C.EMAIL} &nbsp;|&nbsp; 🕒 {C.WORKING_HOURS.WEEKDAYS}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CHETNA_PROGRAMS} variant="chetna" size="lg">
                View All Programs
              </Button>
              <Button to={ROUTES.CONTACT} size="lg" className="border-2 border-white text-white hover:bg-white hover:text-chetna-900">
                Enroll Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ChetnaHome;