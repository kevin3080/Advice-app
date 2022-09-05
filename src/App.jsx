import { useFetchApi } from './Hooks/useFetchApi'
import './Styles/App.scss'


function App() {
  
  const {id, advice, random} = useFetchApi()

  

  return (
    <>
    <section>
      <div>

        <span>ADVICE #{id}</span>
        <blockquote>"{advice}"</blockquote>
      </div>
      <button onClick={random}></button>
    </section>

  </>
  )
}

export default App
