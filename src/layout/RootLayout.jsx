import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'


const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header className='container-fluid'/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout