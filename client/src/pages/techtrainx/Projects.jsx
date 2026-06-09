import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Card, CardBadge, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PROJECTS = [
  { title: 'Venue Booking Platform', type: 'Full Stack', desc: 'Multi-vendor marketplace with Stripe payments, admin dashboard, real-time calendar.', stack: ['React', 'Node.js', 'MongoDB', 'Stripe'], week: 'Mid Program' },
  { title: 'Student Performance Tracker', type: 'Full Stack', desc: 'Dashboard tracking DSA progress, application status, interview rounds, offers.', stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'], week: 'Mid Program' },
  { title: 'E-Commerce Admin Panel', type: 'Full Stack', desc: 'Role-based admin panel with inventory, order tracking, analytics, CSV exports.', stack: ['React', 'Express', 'MongoDB', 'Redis'], week: 'Mid Program' },
  { title: 'Resume Analyzer AI', type: 'AI/ML', desc: 'NLP tool scoring resumes against job descriptions. ATS compatibility feedback.', stack: ['Python', 'Flask', 'scikit-learn', 'NLP'], week: 'Final Phase' },
  { title: 'Stock Price Predictor', type: 'AI/ML', desc: 'LSTM-based prediction model with interactive Streamlit dashboard.', stack: ['Python', 'TensorFlow', 'Streamlit', 'yFinance'], week: 'Final Phase' },
  { title: 'Sentiment Analysis Tool', type: 'AI/ML', desc: 'Real-time Twitter sentiment analyzer with live dashboard and trends.', stack: ['Python', 'FastAPI', 'Transformers', 'React'], week: 'Final Phase' },
];

const Projects = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-techtrainx-900 via-gray-950 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-techtrainx-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <SectionHeading
            eyebrow="Projects"
            eyebrowColor="techtrainx"
            title={META.TECHTRAINX_PROJECTS.TITLE}
            description={`Every student ships ${COMPANY.UNITS.TECHTRAINX.PROJECTS_COUNT} production-grade projects — one Full Stack, one AI/ML. Deployed live. On GitHub. Resume-ready.`}
            align="center"
          />
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROJECTS.map((p, i) => (
              <ScrollReveal key={p.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className="h-full flex flex-col">
                  <CardBadge color={p.type === 'Full Stack' ? 'techtrainx' : 'purple'}>{p.type}</CardBadge>
                  <CardTitle className="text-white mt-2">{p.title}</CardTitle>
                  <CardDescription className="mb-4 flex-1">{p.desc}</CardDescription>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full font-mono">{tech}</span>
                    ))}
                  </div>
                  <p className="text-xs text-techtrainx-400 font-medium">{p.week}</p>
                </Card>
              </ScrollReveal>
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
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">Build projects like these in {COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months</h2>
            <p className="text-gray-400 text-lg mb-8">Each project adds real weight to your resume — built, deployed, and ready to demo in placement interviews.</p>
            <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">View Bootcamp Details</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;