import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';

const SCHEDULE = [
  { week: 'Week 1', topic: 'Free Demo — Experience the teaching style, meet mentors, solve problems', highlight: true },
  { week: 'Weeks 2–5', topic: 'DSA Intensive — 400+ problems, patterns, company-specific preparation' },
  { week: 'Weeks 6–8', topic: 'Core CS — OS, DBMS, Computer Networks, System Design basics' },
  { week: 'Weeks 9–10', topic: 'Full Stack Project — MERN stack, deployment, GitHub portfolio' },
  { week: 'Weeks 11–12', topic: 'AI/ML Project + Mock Interviews + Resume Building' },
];

const FAQS = [
  {
    question: 'Who is this bootcamp for?',
    answer: 'B.Tech, M.Tech, BCA, MCA, and Diploma (CS) students in their pre-final or final year who want to crack product company placements.',
  },
  {
    question: 'Is it really offline?',
    answer: 'Yes. 100% offline at our Lucknow center near Amity University. We believe in-person learning delivers the best results for placement preparation.',
  },
  {
    question: 'What if I miss the demo week?',
    answer: 'Demo week is the entry point for every batch. If you miss it, you can join the next batch. We announce new batches regularly.',
  },
  {
    question: 'Are there any prerequisites?',
    answer: 'Basic understanding of any one programming language (C++, Java, or Python) is enough. We build everything else from the ground up.',
  },
];

const Bootcamp = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Bootcamp"
            badgeColor="techtrainx"
            title={META.TECHTRAINX_BOOTCAMP.TITLE}
            description="A complete 3-month journey from basics to job-ready. Limited to 30 students per batch for personalized mentorship."
            align="center"
          />
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">12-Week Roadmap</h3>
          <div className="space-y-4">
            {SCHEDULE.map((item, index) => (
              <ScrollReveal key={item.week} variant="slideUp" delay={index * 0.1}>
                <Card
                  padding="lg"
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
                    item.highlight ? 'border-techtrainx-500 bg-techtrainx-50' : ''
                  }`}
                >
                  <Badge color={item.highlight ? 'techtrainx' : 'gray'} className="shrink-0 text-center">
                    {item.week}
                  </Badge>
                  <p className="text-gray-700">{item.topic}</p>
                  {item.highlight && (
                    <span className="text-techtrainx-600 text-sm font-medium">🎉 Free</span>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="What's Included" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {COMPANY.UNITS.TECHTRAINX.CURRICULUM.map((item, index) => (
              <ScrollReveal key={item} variant="fadeIn" delay={index * 0.15}>
                <Card hover padding="lg" className="text-center">
                  <div className="w-12 h-12 bg-techtrainx-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-techtrainx-600 text-xl font-bold">{index + 1}</span>
                  </div>
                  <CardDescription className="font-medium text-gray-900">{item}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <ScrollReveal key={faq.question} variant="slideUp" delay={index * 0.1}>
                <Card padding="lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-techtrainx-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Hired?</h2>
          <p className="text-techtrainx-200 text-lg mb-8">
            {COMPANY.UNITS.TECHTRAINX.SEATS} seats. {COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months. One goal — your placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to={ROUTES.CONTACT} variant="techtrainx" size="lg">
              Enroll Now
            </Button>
            <Button to={ROUTES.TECHTRAINX_PROJECTS} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-techtrainx-900">
              See Student Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bootcamp;