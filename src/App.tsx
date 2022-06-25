import * as C from './App.styles';
import { InfoItem } from './components/InfoItem'
import {ButtonItem} from './components/ButtonItem'
import LogoImage from './assets/devmemory_logo.png';
import Restart from './svgs/restart.svg';

function App() {

   const ResetAndCreateGrid = () =>{}

   return (
      <C.Container>
         <C.Info>
            <C.LogoLink href="">
               <img src={LogoImage} alt="Logomarca" width={200} />
            </C.LogoLink>

            <C.InfoArea>
               <InfoItem label='Tempo' value="00:00"/>
               <InfoItem label='Movimentos' value="0"/>
            </C.InfoArea>

            
            <ButtonItem label="Reiniciar" icon={Restart} onClick={ResetAndCreateGrid}/>
         </C.Info>

         <C.GridArea>***</C.GridArea>
      </C.Container>
   );
}

export default App;
