import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: COMPANY.UNITS.TECHTRAINX.PHONE,
    href: `tel:${COMPANY.UNITS.TECHTRAINX.PHONE.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: COMPANY.EMAIL.INFO,
    href: `mailto:${COMPANY.EMAIL.INFO}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: COMPANY.ADDRESS.FULL,
    href: null,
  },
];

const XnavaContact = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-xnava-950 via-gray-950 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-xnava-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <SectionHeading
            eyebrow="Contact"
            eyebrowColor="xnava"
            title={META.CONTACT.TITLE}
            description="Have a question about TechTrainx Labs, Chetna Academy, or Xnava Enterprises? We'd love to hear from you."
            align="center"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal variant="fadeInLeft">
                <h3 className="text-xl font-heading font-bold text-white mb-8">Reach Us At</h3>
                <div className="space-y-6 mb-10">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-xnava-500/10 rounded-xl flex items-center justify-center text-xnava-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-gray-200 font-medium hover:text-xnava-400 transition-colors break-all">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium text-sm leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Credentials */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Business Credentials</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge color="white" size="sm">📋 Partnership Firm</Badge>
                    <Badge color="white" size="sm">🏛️ MSME Certified</Badge>
                    <Badge color="white" size="sm">🧾 GST Registered</Badge>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-xnava-500/5 border border-xnava-500/10 rounded-2xl p-5">
                  <p className="text-sm text-gray-400">
                    <span className="text-xnava-400 font-semibold">Response time:</span> We typically respond within 24 hours on working days.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fadeInRight">
                <h3 className="text-xl font-heading font-bold text-white mb-8">Send us a Message</h3>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default XnavaContact;