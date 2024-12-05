import Customer from './Customer'
import Error from './Error'
function App() {
  return (
    <div>
      <Error>
        <Customer name='' />
      </Error>
      <Error>
        <Customer name='Syed Umair Hussain' />
      </Error>
    </div>
  )
}
export default App
