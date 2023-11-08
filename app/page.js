
import NavBar from './components/navBar/NavBar'
import Body from './components/firstPage/body/Body'
import Footer from './components/firstPage/footer/Footer'

export default function Home() {
  return (
    <div className='bg-[#c6f2e9] h-screen'>
        <div>
          <NavBar />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}
