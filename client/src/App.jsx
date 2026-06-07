import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { ROUTES } from './constants/routes';
import XnavaHome from './pages/xnava/XnavaHome';
import XnavaAbout from './pages/xnava/XnavaAbout';
import XnavaContact from './pages/xnava/XnavaContact';
import TechTrainxHome from './pages/techtrainx/TechTrainxHome';
import Bootcamp from './pages/techtrainx/Bootcamp';
import Projects from './pages/techtrainx/Projects';
import ChetnaHome from './pages/chetna/ChetnaHome';
import ChetnaPrograms from './pages/chetna/ChetnaPrograms';
import NotFound from './pages/shared/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Routes>
          <Route path={ROUTES.HOME} element={<XnavaHome />} />
          <Route path={ROUTES.ABOUT} element={<XnavaAbout />} />
          <Route path={ROUTES.CONTACT} element={<XnavaContact />} />
          <Route path={ROUTES.TECHTRAINX_HOME} element={<TechTrainxHome />} />
          <Route path={ROUTES.TECHTRAINX_BOOTCAMP} element={<Bootcamp />} />
          <Route path={ROUTES.TECHTRAINX_PROJECTS} element={<Projects />} />
          <Route path={ROUTES.CHETNA_HOME} element={<ChetnaHome />} />
          <Route path={ROUTES.CHETNA_PROGRAMS} element={<ChetnaPrograms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default App;