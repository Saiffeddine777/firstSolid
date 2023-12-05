import { createSignal } from 'solid-js'


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
