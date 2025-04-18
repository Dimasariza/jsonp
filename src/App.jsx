import './App.css'
import { Button } from '@components/ui/button'
import JSONFormatter from '@pages/JSONFormatter'

function App() {

  return (
    <>
      <Button variant="outline" color="red">Click me</Button>
      <JSONFormatter />
    </>
  )
}

export default App
