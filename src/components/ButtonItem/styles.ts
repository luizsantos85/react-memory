import styled from 'styled-components';

export const Button = styled.div`
   width: 200px;
   height: 50px;
   display: flex;
   /* justify-content: center; */
   align-items: center;
   border-radius: 10px;
   background-color: #1550ff;
   cursor: pointer;
   transition: opacity ease 0.4s;

   &:hover {
      opacity: 0.8;
   }
`;

export const IconArea = styled.div`
   height: inherit;
   display: flex;
   justify-content: center;
   align-items: center;
   border-right: 1px solid rgba(255, 255, 255, 0.2);
   padding: 0 15px;
`;
export const Icon = styled.img`
   height: 20px;
`;

export const Label = styled.div`
   height: inherit;
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   color: #fff;
`;
