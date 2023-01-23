import Header from './components/Header/index'
import SalesCard from './components/SalesCard/index'
import './index.css'
function App() {
  return (
    <>
      <main>
        <Header />
        <section id="sales">
          <div className="dsmeta-container">
              <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
