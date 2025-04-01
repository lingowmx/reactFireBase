import {Bars3Icon} from '@heroicons/react/24/outline'

interface ButtonMenuProps{
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}


export const ButtonMenu = ({setMenuOpen, menuOpen}: ButtonMenuProps) => {
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div>
      <button 
        className='w-8 h-8 md:hidden'
        onClick={toggleMenu}>
        <Bars3Icon/>
      </button>
    </div>
  )
}
