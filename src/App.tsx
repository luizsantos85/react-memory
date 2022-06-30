import * as C from './App.styles';
import { useEffect, useState } from 'react';
import { InfoItem } from './components/InfoItem';
import { ButtonItem } from './components/ButtonItem';
import LogoImage from './assets/devmemory_logo.png';
import Restart from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

function App() {
   const [playing, setPlaying] = useState<boolean>(false);
   const [timeElapsed, setTimeElapsed] = useState<number>(0);
   const [moveCount, setMoveCount] = useState<number>(0);
   const [shownCount, setShowncount] = useState<number>(0);
   const [gridItems, setGridItems] = useState<GridItemType[]>([]);

   useEffect(() => ResetAndCreateGrid(), []);

   useEffect(() => {
      const timer = setInterval(() => {
         if (playing) setTimeElapsed(timeElapsed + 1);
      }, 1000);
      return () => clearInterval(timer);
   }, [playing, timeElapsed]);

   const ResetAndCreateGrid = () => {
      //passo 1 - resetar o jogo
      setTimeElapsed(0);
      setMoveCount(0);
      setShowncount(0);

      //passo 2 - criar o grid e começar o jogo
      //cria grid vazio
      let tmpGrid: GridItemType[] = [];
      for (let i = 0; i < items.length * 2; i++) {
         tmpGrid.push({
            item: null,
            shown: false,
            permanentShown: false,
         });
      }

      //preencher o grid
      for (let w = 0; w < 2; w++) {
         for (let i = 0; i < items.length; i++) {
            let pos = -1;
            while (pos < 0 || tmpGrid[pos].item !== null) {
               pos = Math.floor(Math.random() * (items.length * 2));
            }
            tmpGrid[pos].item = i;
         }
      }

      setGridItems(tmpGrid);

      setPlaying(true);
   };

   const handleItemClick = (index: number) => {
      if (playing && index !== null && shownCount < 2) {
         let tmpGrid = [...gridItems];
         if (
            tmpGrid[index].permanentShown === false &&
            tmpGrid[index].shown === false
         ) {
            tmpGrid[index].shown = true;
            setShowncount(shownCount + 1);
         }
         setGridItems(tmpGrid);
      }
   };

   return (
      <C.Container>
         <C.Info>
            <C.LogoLink href="">
               <img src={LogoImage} alt="Logomarca" width={200} />
            </C.LogoLink>

            <C.InfoArea>
               <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
               <InfoItem label="Movimentos" value="0" />
            </C.InfoArea>

            <ButtonItem
               label="Reiniciar"
               icon={Restart}
               onClick={ResetAndCreateGrid}
            />
         </C.Info>

         <C.GridArea>
            <C.Grid>
               {gridItems.map((item, index) => (
                  <GridItem
                     key={index}
                     item={item}
                     onClick={() => handleItemClick(index)}
                  />
               ))}
            </C.Grid>
         </C.GridArea>
      </C.Container>
   );
}

export default App;
