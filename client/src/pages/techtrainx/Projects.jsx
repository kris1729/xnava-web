import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
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
    description: 'Multi-vendor venue marketplace with payment integration, admin dashboard, real-time availability calendar.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    week: 'Project 1 — Mid Program',
  },
  {
    title: 'Student Performance Tracker',
    type: 'Full Stack',
    description: 'Dashboard tracking DSA progress, application status, interview rounds, and offer letters in one place.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
    week: 'Project 1 — Mid Program',
  },
  {
    title: 'E-Commerce Admin Panel',
    type: 'Full Stack',
    description: 'Role-based admin panel with inventory management, order tracking, analytics, and CSV exports.',
    stack: ['React', 'Express', 'MongoDB', 'Redis'],
    week: 'Project 1 — Mid Program',
  },
  {
    title: 'Resume Analyzer AI',
    type: 'AI/ML',
    description: 'NLP tool that scores resumes against job descriptions and gives ATS compatibility feedback.',
    stack: ['Python', 'Flask', 'scikit-learn', 'NLP'],
    week: 'Project 2 — Final Phase',
  },
  {
    title: 'Stock Price Predictor',
    type: 'AI/ML',
    description: 'LSTM-based prediction model with interactive Streamlit dashboard for visualization.',
    stack: ['Python', 'TensorFlow', 'Streamlit', 'yFinance'],
    week: 'Project 2 — Final Phase',
  },
  {
    title: 'Sentiment Analysis Tool',
    type: 'AI/ML',
    description: 'Real-time Twitter sentiment analyzer with live dashboard and trend visualization.',
    stack: ['Python', 'FastAPI', 'Transformers', 'React'],
    week: 'Project 2 — Final Phase',
  },
];

const Projects = () => {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-techtrainx-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="Projects"
            badgeColor="techtrainx"
            title={META.TECHTRAINX_PROJECTS.TITLE}
            description={`Every student ships ${COMPANY.UNITS.TECHTRAINX.PROJECTS_COUNT} production-grade projects — one Full Stack, one AI/ML. Deployed live. On GitHub. Resume-ready.`}
            align="center"
          />
        </div>
      </section>

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
                      <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-techtrainx-600 font-medium">{project.week}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build projects like these in {COMPANY.UNITS.TECHTRAINX.DURATION_MONTHS} months
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Each project is deployed and ready to demo in placement interviews. 
              {COMPANY.UNITS.TECHTRAINX.DEMO_DAYS}-day free demo. Start building your portfolio.
            </p>
            <p className="text-techtrainx-400 text-xl font-bold mb-6">
              📞 {COMPANY.UNITS.TECHTRAINX.PHONE}
            </p>
            <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
              View Programs & Pricing
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;