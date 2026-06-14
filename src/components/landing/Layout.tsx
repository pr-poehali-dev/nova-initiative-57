import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#e8e4d0"
          hoverFillColor="#f0ead8"
        />
      </div>
      <div
        className="absolute inset-0 z-10 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/a9668610-1ae2-4e7f-92c4-d2d026a19e9c.jpg)',
          opacity: 0.18
        }}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}