import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/content'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar links={portfolioData.navLinks} name={portfolioData.name} resumeFile={portfolioData.resumeFile} />
      <main>
        <Hero data={portfolioData} />
        <Experience items={portfolioData.experience} />
        <Education items={portfolioData.education} />
        <Skills categories={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Blogs mediumProfile={portfolioData.mediumProfile} fallbackPosts={portfolioData.fallbackBlogs} />
        <Publications items={portfolioData.publications} />
        <Contact data={portfolioData} />
      </main>
      <Footer name={portfolioData.name} links={portfolioData.socials} />
    </div>
  )
}

export default App
