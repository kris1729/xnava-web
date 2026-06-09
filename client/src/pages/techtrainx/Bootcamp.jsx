import { useState } from 'react';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const SNAPSHOT = [
  { icon: '⏱️', label: 'Duration', value: `${COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} Months` },
  { icon: '👥', label: 'Batch Size', value: `${COMPANY.UNITS.TECHTRAINX.SEATS} Students` },
  { icon: '📍', label: 'Mode', value: 'Offline + Online' },
  { icon: '🎁', label: 'Try First', value: 'Free Demo Week' },
];

const ROADMAP = [
  { week: 'Weeks 1–2', title: 'Core Data Structures', topics: 'Arrays, Strings, Linked Lists, Stack, Queue, Hashing, Recursion — 100+ problems' },
  { week: 'Weeks 3–4', title: 'Advanced DSA', topics: 'Trees, BST, Heaps, Graphs, Sliding Window, Two Pointers, Greedy, Backtracking — 150+ problems' },
  { week: 'Weeks 5–6', title: 'Full Stack Project', topics: 'MERN stack application — authentication, payments, deployment. GitHub portfolio ready.' },
  { week: 'Weeks 7–8', title: 'AI/ML Project', topics: 'Model training, data pipeline, deployment. Real-world dataset. Production-grade output.' },
  { week: 'Weeks 9–12', title: 'Interview Mastery', topics: 'Mock interviews, resume building, communication training, salary negotiation, placement drive prep.' },
];

const FEATURES = [
  { title: 'Only 30 Students', desc: 'Small batch ensures personal attention. No student gets left behind.' },
  { title: 'Real Projects', desc: 'Two production-grade projects go straight to your portfolio and GitHub.' },
  { title: 'MNC Mentors', desc: 'Learn from engineers who have shipped products at scale.' },
  { title: 'Free First Week', desc: 'Attend the full first week before paying anything. No risk.' },
  { title: '400+ DSA Problems', desc: 'Curated problem set covering every pattern asked in interviews.' },
  { title: 'Mock Interviews', desc: 'Face realistic technical and HR interviews with detailed feedback.' },
];

const FAQS = [
  { q: 'Is this for freshers or experienced students?', a: 'Designed for pre-final and final year B.Tech, M.Tech, BCA, MCA, and Diploma CS students. Basic programming knowledge in any one language is enough.' },
  { q: 'Can I switch from online to offline mid-program?', a: 'Yes. If seats are available in the offline batch, you can switch. You only pay the difference in fees.' },
  { q: 'Is the 7-day demo really free?', a: 'Absolutely. Attend 7 full days of classes — offline or online — before paying anything. If you do not find value, you walk away with zero cost.' },
  { q: 'What projects will I build?', a: 'Two production-grade projects — one Full Stack MERN application and one AI/ML model. Both are deployed live and added to your GitHub portfolio.' },
  { q: 'What certificates do I get?', a: 'Two certificates: Internship Experience Certificate at Day 45 after your first project, and Full Program Completion Certificate at the end listing every skill and module.' },
  { q: 'Who are the mentors?', a: `Working professionals from ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}. Not fresh graduates — real engineers who ship products used by millions.` },
  { q: 'Is the DSA Bootcamp included?', a: 'The full 3-month program includes DSA as a module. The separate 45-Day DSA Bootcamp at ₹1,500 is for students who only want focused DSA training.' },
  { q: 'How do I register?', a: `Call or WhatsApp ${COMPANY.UNITS.TECHTRAINX.PHONE}. Or visit our center near Amity University, Lucknow. Seats are limited to ${COMPANY.UNITS.TECHTRAINX.SEATS} per batch.` },
];

const Bootcamp = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-techtrainx-900 via-gray-950 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-techtrainx-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <SectionHeading
            eyebrow="Bootcamp Details"
            eyebrowColor="techtrainx"
            title="Complete Program"
            gradient="Breakdown"
            description={`${COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months. ${COMPANY.UNITS.TECHTRAINX.SEATS} seats. ${COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems. 2 projects. 2 certificates.`}
            align="center"
          />
        </div>
      </section>

      {/* Snapshot Bar */}
      <section className="bg-gray-900 border-y border-gray-800 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SNAPSHOT.map((item, i) => (
              <ScrollReveal key={item.label} variant="fadeInUp" delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-sm font-medium text-gray-200">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Learning" gradient="Roadmap" description="Structured week-by-week. No filler content." />
          <div className="space-y-4">
            {ROADMAP.map((item, i) => (
              <ScrollReveal key={item.week} variant="fadeInUp" delay={i * 0.05}>
                <Card variant="dark" padding="lg" className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Badge color="techtrainx" size="md" className="text-center min-w-[100px] shrink-0">{item.week}</Badge>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.topics}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="What's" gradient="Included" description="Everything you need — nothing you don't." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className="text-center h-full border-t-2 border-t-techtrainx-500">
                  <CardTitle className="text-white">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="Your" gradient="2 Certificates" description="Real credentials that add weight to your resume." />
          <div className="space-y-6">
            {COMPANY.UNITS.TECHTRAINX.CERTIFICATES.map((cert, i) => (
              <ScrollReveal key={cert.name} variant="fadeInUp" delay={i * 0.15}>
                <Card variant="dark" padding="lg" className="border-l-2 border-l-techtrainx-500">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-techtrainx-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-2xl">{i === 0 ? '📜' : '🏆'}</span>
                    </div>
                    <div>
                      <Badge color="techtrainx" size="sm" className="mb-2">{cert.issued}</Badge>
                      <CardTitle className="text-white">{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Frequently Asked" gradient="Questions" description="Real questions from students who joined before you." />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-techtrainx-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10 max-w-2xl">
          <ScrollReveal variant="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{COMPANY.UNITS.TECHTRAINX.SEATS} seats. One free week to decide.</h2>
            <p className="text-gray-400 text-lg mb-4">The next batch starts soon. Seats fill in days — not weeks.</p>
            <p className="text-techtrainx-300 text-xl font-bold mb-8">📞 {COMPANY.UNITS.TECHTRAINX.PHONE}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">Register for Free Demo</Button>
              <Button href={`tel:${COMPANY.UNITS.TECHTRAINX.PHONE.replace(/\s/g, '')}`} variant="ghostDark" size="lg">📞 Call Now</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

/* FAQ Accordion Item */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-800/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-4 text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Bootcamp;