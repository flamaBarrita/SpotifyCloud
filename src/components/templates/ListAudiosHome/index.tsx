'use client'

import { Header } from '../../organisms/Header'
import { HomeListLogged } from '../../organisms/HomeListLogged'
// import { HomeListSignIn } from '@/components/organisms/HomeListSignIn' // Ya no lo necesitamos aquí

export function ListAudiosHome() {
  // Eliminamos la dependencia del AuthContext antiguo porque AWS ya nos protegió
  
  return (
    <main className="flex flex-1 flex-col bg-neutral-900 overflow-y-auto">
      <Header />
      {/* Forzamos a mostrar siempre la lista de canciones */}
      <HomeListLogged />
    </main>
  )
}