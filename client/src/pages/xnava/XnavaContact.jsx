import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: COMPANY.EMAIL.INFO,
    href: `mailto:${COMPANY.EMAIL.INFO}`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: COMPANY.ADDRESS.FULL,
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: COMPANY.PHONE.PRIMARY,
    href: `tel:${COMPANY.PHONE.PRIMARY}`,
  },
];

const XnavaContact = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Contact"
          title={META.CONTACT.TITLE}
          description="Have a question about TechTrainx Labs, Chetna Academy, or Xnava Enterprises? We'd love to hear from you."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal variant="slideLeft">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Reach Us At</h3>
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-xnava-100 rounded-lg flex items-center justify-center text-xnava-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-900 font-medium hover:text-xnava-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal variant="slideRight">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XnavaContact;