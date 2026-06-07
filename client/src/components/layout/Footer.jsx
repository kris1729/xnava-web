import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

const QUICK_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Contact', to: ROUTES.CONTACT },
];

const UNIT_LINKS = [
  { label: COMPANY.UNITS.TECHTRAINX.NAME, to: ROUTES.TECHTRAINX_HOME },
  { label: `${COMPANY.UNITS.TECHTRAINX.NAME} Bootcamp`, to: ROUTES.TECHTRAINX_BOOTCAMP },
  { label: COMPANY.UNITS.CHETNA.NAME, to: ROUTES.CHETNA_HOME },
  { label: `${COMPANY.UNITS.CHETNA.NAME} Programs`, to: ROUTES.CHETNA_PROGRAMS },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={ROUTES.HOME} className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-white">
                Xnava<span className="text-xnava-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {COMPANY.TAGLINE}
            </p>
            <p className="text-sm text-gray-500">{COMPANY.ADDRESS.FULL}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Units */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Units</h4>
            <ul className="space-y-3">
              {UNIT_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get updates on new batches, programs, and announcements.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {COMPANY.NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY.EMAIL.INFO}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {COMPANY.EMAIL.INFO}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};