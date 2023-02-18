import './globals.css'
import { MainMenu } from '@/components/mainMenu/MainMenu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <MainMenu />
        </header>
        {children}
      </body>
    </html>
  )
}
