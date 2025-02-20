import { useState } from 'react'
import Logo from './components/Logo'
import Button from './components/Button'
import './index.css'
import ModalMaps from './components/ModalMaps'

function App() {
  const [showModalMaps, setShowModalMaps] = useState(false)
  const handleOnClose = () => {
    setShowModalMaps(false);
  }

  return (
    <>
      <div className='flex flex-col bg-gradient-to-b from-black-900 to-black-300 h-full w-full relative'>
        <header className='mt-8'>
          <Logo />
        </header>
        <section className='flex flex-col justify-center items-center relative gap-3 px-8 md:px-[16%] lg:px-[32%]'>
          <Button text="atendimento aqui" image="./whatsapp.svg" class="glow mb-3" href="https://wa.me/558585283808" target="_blank" />
          <Button text="instagram" image="./instagram.svg" href="https://www.instagram.com/ideiacamisetas" target="_blank" />
          <Button text="nosso endereço" image="./maps.svg" click={() => { setShowModalMaps(true) }} />
        </section>
        <footer className='flex itens center justify-center fixed inset-x-0 bottom-3'>
          <p className='text-white text-md'>&copy; 2024 - Ideia Camisetas</p>
        </footer>
      </div>
      <ModalMaps onClose={handleOnClose} visible={showModalMaps} />
    </>
  )
}

export default App
