import React ,{ useState }from 'react'
import Sidebar from './../components/Sidebar/index';
import Navbar from './../components/Navbar/index';
import HeroSection from './../components/HeroSection/index';


const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = ()=> {
        setIsOpen(!isOpen);
    }
    return (
        <>
        {/* porque se pasan las dos cosas? porque isOpen? (porque es la variable que importa?) */}
        {/* porque cuando hago click en el cuerpo tambien se abre el sidebar */}

          <Sidebar isOpen={isOpen}  toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <HeroSection/>
        </>
    )
}

export default Home
