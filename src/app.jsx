/** @format */

import { Analytics } from "./components/Analytics/Analytics";
import { FeatureSection } from "./components/feature/feature";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero";
import { Plan } from "./components/Plan/plans";

const App = () => {
  return (
    <main className='min-h-screen flex-col flex '>
      <Header />
      <Hero />
      <FeatureSection />
      <Analytics />
      <Plan />
      <Footer />
    </main>
  );
};
export default App;
