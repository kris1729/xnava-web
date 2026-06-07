import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBadge, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PROJECTS = [
  {
    title: 'Venue Booking Platform',
    type: 'Full Stack',
    description: 'Multi-vendor venue marketplace with Stripe payments, admin dashboard, real-time availability calendar.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    week: 'Weeks 9–10',
  },
  {
    title: 'Student Performance Tracker',
    type: 'Full Stack',
    description: 'Dashboard tracking DSA progress, application status, interview rounds, and offer letters in one place.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
    week: 'Weeks 9–10',
  },
  {
    title: 'E-Commerce Admin Panel',
    type: 'Full Stack',
    description: 'Role-based admin panel with inventory management, order tracking, analytics, and CSV exports.',
    stack: ['React', 'Express', 'MongoDB', 'Redis'],
    week: 'Weeks 9–10',
  },
  {
    title: 'Resume Analyzer AI',
    type: 'AI/ML',
    description: 'NLP tool that scores resumes against job descriptions and gives ATS compatibility feedback.',
    stack: ['Python', 'Flask', 'scikit-learn', 'NLP'],
    week: 'Weeks 11–12',
  },
  {
    title: 'Stock Price Predictor',
    type: 'AI/ML',
    description: 'LSTM-based prediction model with interactive Streamlit dashboard for visualization.',
    stack: ['Python', 'TensorFlow', 'Streamlit', 'yFinance'],
    week: 'Weeks 11–12',
  },
  {
    title: 'Sentiment Analysis Tool',
    type: 'AI/ML',
    description: 'Real-time Twitter sentiment analyzer with live dashboard and trend visualization.',
    stack: ['Python', 'FastAPI', 'Transformers', 'React'],
    week: 'Weeks 11–12',
  },
];

const Projects = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Projects"
            badgeColor="techtrainx"
            title={META.TECHTRAINX_PROJECTS.TITLE}
            description="Every student ships two production-grade projects — one Full Stack, one AI/ML. These go straight to GitHub, LinkedIn, and placement interviews."
            align="center"
          />
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ScrollReveal key={project.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="h-full flex flex-col">
                  <CardBadge color={project.type === 'Full Stack' ? 'techtrainx' : 'purple'}>
                    {project.type}
                  </CardBadge>
                  <CardTitle className="mt-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4 flex-1">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{project.week}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build projects like these in 12 weeks
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Each project adds real weight to your resume — built, deployed, and ready
              to demo in placement interviews.
            </p>
            <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
              View Bootcamp Details
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;