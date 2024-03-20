import Header from './header.jsx'
import Footer from './footer.jsx'
import Main from './MainContent.jsx'
import './index.css'

function App() {
  return (
    <>
      <Header title='IA' link='https://google.com/' login={true}/>
      <Main title='IA' posts ={[['Nvidia’s keynote at GTC held some surprises' , " hope you realize this is not a concert,” said Nvidia president Jensen Huang to an audience so large, it filled up the SAP Center in San Jose. "],
                                ['Microsoft hires Inflection founders to run new consumer AI division' , " Microsoft has hired Mustafa Suleyman and Karén Simonyan, co-founders of high-profile AI startup Inflection AI,” said Nvidia president Jensen Huang to an audience so large, it filled up the SAP Center in San Jose. "]
                                ]} />

      <Footer/>
    </>
  )
}

export default App
