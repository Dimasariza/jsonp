import './App.css'
import Header from '@components/customs/header/header'
import Footer from '@components/customs/footer/footer'
import PageContent from '@pages/content'

function App() {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='flex flex-col h-full w-3/4 justify-center'>
        <Header />
        <PageContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
