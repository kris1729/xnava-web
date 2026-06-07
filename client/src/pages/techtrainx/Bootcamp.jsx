import { useState } from 'react';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const SNAPSHOT = [
  { icon: '⏱️', label: 'Duration', value: `${COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} Months` },
  { icon: '👥', label: 'Batch Size', value: `${COMPANY.UNITS.TECHTRAINX.SEATS} Students` },
  { icon: '📍', label: 'Mode', value: 'Offline' },
  { icon: '🎁', label: 'Try First', value: 'Free Demo Week' },
];

const ROADMAP = [
  { week: 'Week 1', label: 'Free Demo', topics: 'Experience the teaching style. Meet mentors. Solve real problems. Zero commitment.', highlight: true },
  { week: 'Weeks 2–5', label: 'DSA Intensive', topics: 'Arrays, Strings, Linked Lists, Trees, Graphs, DP, Greedy. 400+ problems. Company-specific patterns.' },
  { week: 'Weeks 6–8', label: 'Core CS', topics: 'Operating Systems, DBMS, Computer Networks, System Design basics. Theory made practical.' },
  { week: 'Weeks 9–10', label: 'Full Stack Project', topics: 'MERN stack. Authentication, payments, deployment. GitHub portfolio ready.' },
  { week: 'Weeks 11–12', label: 'AI/ML + Interviews', topics: 'ML model training. Mock interviews. Resume review. Salary negotiation prep.' },
];

const FEATURES = [
  { title: 'Only 30 Students', description: 'Small batch ensures personal attention. No student gets left behind.' },
  { title: 'Real Projects', description: 'Two production-grade projects go straight to your portfolio and GitHub.' },
  { title: 'MNC Mentors', description: 'Learn from engineers who have shipped products at scale.' },
  { title: 'Free First Week', description: 'Attend the full first week before paying anything. No risk.' },
  { title: '400+ DSA Problems', description: 'Curated problem set covering every pattern asked in interviews.' },
  { title: 'Mock Interviews', description: 'Face realistic technical and HR interviews with detailed feedback.' },
];

const FAQS = [
  { q: 'Is this for freshers or experienced students?', a: 'Designed for pre-final and final year B.Tech, M.Tech, BCA, MCA, and Diploma CS students. If you know basic programming in any one language, you are ready.' },
  { q: 'What if I miss a class?', a: 'All sessions are recorded and shared. You also get access to the learning portal with notes, assignments, and discussion forums.' },
  { q: 'Is there a placement guarantee?', a: 'We guarantee placement preparation — not placement. We give you every tool, skill, and mock interview needed. Results depend on your effort. Our students consistently crack 6+ LPA packages.' },
  { q: 'What projects will I build?', a: 'Every student builds one Full Stack MERN application and one AI/ML model. These are real, deployable projects — not tutorial clones.' },
  { q: 'How is this different from online courses?', a: 'Offline, in-person mentorship. Live doubt resolution. Peer learning with 29 other serious students. Accountability that online courses cannot provide.' },
  { q: 'What do I need to know before joining?', a: 'Basic understanding of any one programming language — C++, Java, or Python. We teach everything else from fundamentals to advanced.' },
  { q: 'Is the free demo week really free?', a: 'Absolutely. Zero payment. Attend the full first week, meet mentors, solve problems. Only continue if you find value.' },
  { q: 'How do I register?', a: 'Use the contact form or visit our center near Amity University, Lucknow. Batch sizes are limited — registrations close once 30 seats fill.' },
];

const Bootcamp = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Bootcamp"
            badgeColor="techtrainx"
            title={META.TECHTRAINX_BOOTCAMP.TITLE}
            description="The complete 12-week journey from basics to job-ready. Limited to 30 students per batch for personalized mentorship."
            align="center"
          />
        </div>
      </section>

      {/* ── Snapshot Bar ── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SNAPSHOT.map((item, i) => (
              <ScrollReveal key={item.label} variant="fadeIn" delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-sm font-medium text-gray-900">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12-Week Roadmap ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="12-Week Learning Roadmap"
            description="Every week is structured. Every topic is planned. No filler content."
            align="center"
          />
          <div className="space-y-4">
            {ROADMAP.map((item, index) => (
              <ScrollReveal key={item.week} variant="slideUp" delay={index * 0.05}>
                <Card
                  padding="lg"
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
                    item.highlight ? 'border-techtrainx-500 bg-techtrainx-50 ring-1 ring-techtrainx-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <Badge color={item.highlight ? 'techtrainx' : 'gray'} className="text-center min-w-[80px]">
                      {item.label}
                    </Badge>
                    {item.highlight && (
                      <span className="text-techtrainx-600 text-xs font-bold animate-pulse">FREE</span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{item.topics}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What's Included"
            description="Everything you need — nothing you don't."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} variant="fadeIn" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center h-full border-t-4 border-t-techtrainx-500">
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Real questions from students who joined before you."
            align="center"
          />
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-techtrainx-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {COMPANY.UNITS.TECHTRAINX.SEATS} seats. One free week to decide.
            </h2>
            <p className="text-techtrainx-200 text-lg mb-8 leading-relaxed">
              The next batch starts soon. Seats fill in days — not weeks.
            </p>
            <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
              Register for Free Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

/* ─── FAQ Accordion Item (internal component) ─── */
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
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-4 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Bootcamp;