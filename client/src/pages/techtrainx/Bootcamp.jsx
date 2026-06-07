import { useState } from 'react';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const ROADMAP = [
  { week: 'Weeks 1–2', days: 'Days 1–15', title: 'Core Data Structures', topics: 'Arrays, Strings, Linked Lists, Stack, Queue, Hashing, Recursion basics — 100+ problems' },
  { week: 'Weeks 3–4', days: 'Days 16–30', title: 'Advanced DSA', topics: 'Trees, BST, Heaps, Graphs, Sliding Window, Two Pointers, Greedy, Backtracking — 150+ problems' },
  { week: 'Weeks 5–7', days: 'Days 31–45', title: 'Interview Mastery', topics: 'Dynamic Programming, Sorting, Time Complexity analysis, 3 Mock Interviews, remaining 150+ problems' },
];

const FAQS = [
  {
    q: 'What is the difference between Offline and Online programs?',
    a: 'Same curriculum, same certificates, same mentors. Offline is classroom-based near Amity University, Lucknow. Online is live sessions — study from anywhere in India. Offline includes face-to-face interaction; online gives you location flexibility.',
  },
  {
    q: 'Can I switch from online to offline mid-program?',
    a: 'Yes. If seats are available in the offline batch, you can switch. You only pay the difference in fees.',
  },
  {
    q: 'Is the 7-day demo really free?',
    a: 'Absolutely. Attend 7 full days of classes — offline or online — before paying anything. If you do not find value, you walk away with zero cost.',
  },
  {
    q: 'What projects will I build?',
    a: 'Two production-grade projects — one Full Stack MERN application and one AI/ML model. Both are deployed live and added to your GitHub portfolio.',
  },
  {
    q: 'What certificates do I get?',
    a: 'Two certificates: 1) Internship Experience Certificate at Day 45 after your first project, 2) Full Program Completion Certificate at the end listing every skill and module.',
  },
  {
    q: 'Who are the mentors?',
    a: `Working professionals from ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}. Not fresh graduates — real engineers who ship products used by millions.`,
  },
  {
    q: 'Is the 45-Day DSA Bootcamp included in the full program?',
    a: 'The full 3-month program already includes DSA as a module. The separate 45-Day DSA Bootcamp is for students who only want DSA training — focused, fast, and affordable at ₹1,500.',
  },
  {
    q: 'How do I register?',
    a: `Call or WhatsApp ${COMPANY.UNITS.TECHTRAINX.PHONE}. Or visit our center near Amity University, Lucknow. Seats are limited to ${COMPANY.UNITS.TECHTRAINX.SEATS} per batch.`,
  },
];

const Bootcamp = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Programs & Pricing"
            badgeColor="techtrainx"
            title="Complete Bootcamp Details"
            description={`${COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months. ${COMPANY.UNITS.TECHTRAINX.SEATS} seats. ${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems. 2 projects. 2 certificates.`}
            align="center"
          />
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Offline */}
            <ScrollReveal variant="slideUp" delay={0}>
              <Card padding="lg" className="h-full flex flex-col border-t-4 border-t-techtrainx-500">
                <Badge color="techtrainx" className="mb-3 self-start">🏫 OFFLINE</Badge>
                <CardTitle>Offline Classroom Program</CardTitle>
                <p className="text-xs text-gray-500 mb-4">{COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MODE}</p>
                <div className="my-4">
                  <span className="text-4xl font-heading font-bold text-techtrainx-600">
                    {COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.FULL_COURSE}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">full course</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  or <strong>{COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.MONTHLY}</strong>/month
                </p>
                <p className="text-xs text-green-600 font-medium mb-4">
                  Save {COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.SAVINGS} with full course
                </p>
                <ul className="space-y-2 mb-6 flex-1 text-sm text-gray-600">
                  <li className="flex gap-2">✅ Daily 2-hour offline classes</li>
                  <li className="flex gap-2">✅ Face-to-face mentorship</li>
                  <li className="flex gap-2">✅ Small batch of {COMPANY.UNITS.TECHTRAINX.SEATS} students</li>
                  <li className="flex gap-2">✅ All 6 modules + 2 projects</li>
                  <li className="flex gap-2">✅ 2 certificates</li>
                </ul>
                <Button to={ROUTES.CONTACT} variant="techtrainx" fullWidth>
                  Register Offline — {COMPANY.UNITS.TECHTRAINX.PRICING.OFFLINE.FULL_COURSE}
                </Button>
              </Card>
            </ScrollReveal>

            {/* Online */}
            <ScrollReveal variant="slideUp" delay={0.1}>
              <Card padding="lg" className="h-full flex flex-col border-t-4 border-t-techtrainx-400">
                <Badge color="techtrainx" className="mb-3 self-start">🌐 ONLINE</Badge>
                <CardTitle>Online Live Program</CardTitle>
                <p className="text-xs text-gray-500 mb-4">{COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MODE}</p>
                <div className="my-4">
                  <span className="text-4xl font-heading font-bold text-techtrainx-600">
                    {COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.FULL_COURSE}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">full course</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  or <strong>{COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.MONTHLY}</strong>/month
                </p>
                <p className="text-xs text-green-600 font-medium mb-4">
                  Save {COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.SAVINGS} with full course
                </p>
                <ul className="space-y-2 mb-6 flex-1 text-sm text-gray-600">
                  <li className="flex gap-2">✅ Daily 2-hour live online classes</li>
                  <li className="flex gap-2">✅ Same curriculum as offline</li>
                  <li className="flex gap-2">✅ Study from anywhere in India</li>
                  <li className="flex gap-2">✅ All 6 modules + 2 projects</li>
                  <li className="flex gap-2">✅ Same 2 certificates</li>
                </ul>
                <Button to={ROUTES.CONTACT} variant="techtrainx" fullWidth>
                  Register Online — {COMPANY.UNITS.TECHTRAINX.PRICING.ONLINE.FULL_COURSE}
                </Button>
              </Card>
            </ScrollReveal>

            {/* DSA Bootcamp */}
            <ScrollReveal variant="slideUp" delay={0.2}>
              <Card padding="lg" className="h-full flex flex-col border-t-4 border-t-techtrainx-500 ring-2 ring-techtrainx-200">
                <Badge color="techtrainx" className="mb-3 self-start">⚡ DSA BOOTCAMP</Badge>
                <CardTitle>45-Day DSA Bootcamp</CardTitle>
                <p className="text-xs text-gray-500 mb-4">{COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.MODE}</p>
                <div className="my-4">
                  <span className="text-4xl font-heading font-bold text-techtrainx-600">
                    {COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.FULL_COURSE}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">total</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">One-time payment — no monthly fees</p>
                <ul className="space-y-2 mb-6 flex-1 text-sm text-gray-600">
                  <li className="flex gap-2">✅ {COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems</li>
                  <li className="flex gap-2">✅ Java & C++ language tracks</li>
                  <li className="flex gap-2">✅ 3 mock interviews</li>
                  <li className="flex gap-2">✅ 1 DSA Completion Certificate</li>
                  <li className="flex gap-2">✅ {COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-day free demo</li>
                </ul>
                <Button to={ROUTES.CONTACT} variant="techtrainx" fullWidth>
                  Register DSA Bootcamp — {COMPANY.UNITS.TECHTRAINX.PRICING.DSA_BOOTCAMP.FULL_COURSE}
                </Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Learning Roadmap" description="Structured week-by-week. No filler content." align="center" />
          <div className="space-y-4">
            {ROADMAP.map((item, index) => (
              <ScrollReveal key={item.week} variant="slideUp" delay={index * 0.1}>
                <Card padding="lg" className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Badge color="techtrainx" className="text-center min-w-[100px]">{item.week}</Badge>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.topics}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="Your 2 Certificates" description="Real credentials that add weight to your resume." align="center" />
          <div className="space-y-6">
            {COMPANY.UNITS.TECHTRAINX.CERTIFICATES.map((cert, index) => (
              <ScrollReveal key={cert.name} variant="slideUp" delay={index * 0.15}>
                <Card padding="lg" className="border-l-4 border-l-techtrainx-500">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-techtrainx-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-2xl">{index === 0 ? '📜' : '🏆'}</span>
                    </div>
                    <div>
                      <Badge color="techtrainx" className="mb-2">{cert.issued}</Badge>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                      {cert.tracks && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cert.tracks.map((track) => (
                            <Badge key={track} color="gray">{track}</Badge>
                          ))}
                        </div>
                      )}
                      {cert.skills && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} color="gray">{skill}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-techtrainx-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Hired?
            </h2>
            <p className="text-techtrainx-200 text-lg mb-4">
              {COMPANY.UNITS.TECHTRAINX.SEATS} seats per batch. {COMPANY.UNITS.TECHTRAINX.DEMO_DAYS} days free demo. 
              No payment until you experience the training.
            </p>
            <p className="text-techtrainx-300 text-2xl font-bold mb-8">
              📞 {COMPANY.UNITS.TECHTRAINX.PHONE}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
                Call / WhatsApp to Register
              </Button>
              <Button
                href={`tel:${COMPANY.UNITS.TECHTRAINX.PHONE.replace(/\s/g, '')}`}
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-techtrainx-900"
              >
                📞 Call Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

/* ─── FAQ Accordion ─── */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-4 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Bootcamp;