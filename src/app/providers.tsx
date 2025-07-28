// app/providers.tsx
'use client'

import { ReactNode } from 'react'
import ModalWrapperRoot from '@/widgets/modals/ModalWrapperRoot/ModalWrapperRoot'


export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
        <ModalWrapperRoot/>
        {children}
    </>
        
      
  )
}
