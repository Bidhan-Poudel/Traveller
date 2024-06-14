import React, { ReactNode } from 'react'
import { Footer, HeaderNavBar } from '../home/components'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <HeaderNavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout