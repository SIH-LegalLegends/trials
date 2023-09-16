import About from "./components/About"
import Accordion from "./components/Accordian"
import Banner from "./components/Banner"
import Card from "./components/Category"
import FAQ from "./components/FAQ"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Vision from "./components/Vision"

function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <hr />
        <Banner />
        <About />
        <Vision />
        <Card />
        <Feed />
        <FAQ />
        <Accordion />
        <Footer />
        {/* <h3 className="text-3xl font-bold text-green-500">Raj Aryan</h3> */}
      </div>
    </>
  )
}

export default App
