import { Poppins } from '@next/font/google'
import { SkillList } from '@/components/skillList/SkillList'
import { ProjectsList } from '@/components/projectsList/ProjectsList' 
import { IconMail } from '@tabler/icons-react'

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
        <ProjectsList />
      </section>
      <section id='section-contact' className='colors-secondary full-width-bleed center'>
        <div>
          <h2>Contact</h2>
          <IconMail />
          <p>j.t.harding@gmail.com</p>
        </div>
      </section>
    </main>
  )
}
