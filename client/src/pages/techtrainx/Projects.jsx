import { META } from '@/constants/meta';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    type: 'Full Stack',
    stack: 'React, Node.js, MongoDB, Stripe',
    description: 'A complete multi-vendor e-commerce platform with payment integration, admin dashboard, and order tracking.',
  },
  {
    title: 'Placement Preparation Tracker',
    type: 'Full Stack',
    stack: 'React, Express, PostgreSQL, Redis',
    description: 'Track DSA problems solved, company applications, interview status, and offer letters in one dashboard.',
  },
  {
    title: 'Resume Screener AI',
    type: 'AI/ML',
    stack: 'Python, Flask, scikit-learn, NLP',
    description: 'An AI tool that analyzes resumes against job descriptions and gives ATS compatibility scores.',
  },
  {
    title: 'Campus Connect',
    type: 'Full Stack',
    stack: 'Next.js, GraphQL, MongoDB, Socket.io',
    description: 'A social platform for college students to share resources, discuss placements, and form study groups.',
  },
  {
    title: 'Stock Price Predictor',
    type: 'AI/ML',
    stack: 'Python, TensorFlow, Streamlit, yFinance',
    description: 'LSTM-based stock price prediction model with an interactive dashboard for visualization.',
  },
  {
    title: 'CodeReview AI',
    type: 'AI/ML',
    stack: 'Python, FastAPI, OpenAI API, React',
    description: 'Automated code review tool that analyzes GitHub PRs and suggests improvements using LLMs.',
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
            description="Real projects built by our bootcamp students. Each project is production-grade and portfolio-ready."
            align="center"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ScrollReveal key={project.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge color={project.type === 'Full Stack' ? 'techtrainx' : 'purple'}>
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <p className="text-xs text-gray-400 font-mono">{project.stack}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to Build Projects Like These?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join the bootcamp and build 2 production-grade projects for your portfolio.
          </p>
          <Button to={ROUTES.TECHTRAINX_BOOTCAMP} variant="techtrainx" size="lg">
            View Bootcamp Details
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;