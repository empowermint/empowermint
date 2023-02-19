import { Poppins } from '@next/font/google'
import { SkillList } from '@/components/skillList/SkillList'

const inter = Poppins({ weight: ['300'], style: ['normal'], subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <section id='section-hero' className='hero'>
        <h1>James T. Harding</h1>
        <p>Software Engineer</p>
      </section>
      <section id='section-skills' className='colors-secondary full-width skill-list'>
        <SkillList />
      </section>
      <section id='section-projects'>
        <h2>Projects</h2>
      </section>
      <section id='section-contact'>
        <h2>Contact</h2>
      </section>
    </main>
  )
}
