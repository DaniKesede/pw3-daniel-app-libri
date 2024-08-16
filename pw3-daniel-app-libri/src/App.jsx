import "./App.css"
import CardBooks from '../src/COMPONENTS/CardBooks'
import CapaLivro from './assets/livros/cavernas_aco.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardBooks
        titulo='As Cavernas de Aço'
        autor='Isaac Asimov'
        imagem={CapaLivro}
        />
    </>
  )
}

export default App
