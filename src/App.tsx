import { useState } from 'react'
import { Habits } from './components/Habits'

import './styles/global.css'

function App () {

  const [count, setCount] = useState(0)

  const handleSetCount = () => {
    setCount(count + 1)
  }

  return (
    <div className=''>
      <Habits count={count} setCount={handleSetCount} />
    </div>
  )
}

export default App
