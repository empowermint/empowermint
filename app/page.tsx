import { Poppins } from '@next/font/google'
import { SkillList } from '@/components/skillList/SkillList'

const inter = Poppins({ weight: ['300'], style: ['normal'], subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <section className='hero'>
        <h1>James T. Harding</h1>
        <p>Software Engineer</p>
      </section>
      <section className='colors-secondary full-width skill-list'>
        <SkillList />
      </section>
      <section>
        <h2>Projects</h2>
      </section>
    </main>
  )
}
