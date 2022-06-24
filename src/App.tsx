import React from 'react';
import LogoImage from './assets/devmemory_logo.png';
import * as C from './App.styles';

function App() {
   return (
      <C.Container>
         <C.Info>
            <C.LogoLink href="">
               <img src={LogoImage} alt="Logomarca" width={200} />
            </C.LogoLink>

            <C.InfoArea>...</C.InfoArea>

            <button>Reiniciar</button>
         </C.Info>

         <C.GridArea>***</C.GridArea>
      </C.Container>
   );
}

export default App;
