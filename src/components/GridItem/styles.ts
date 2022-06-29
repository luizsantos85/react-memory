import styled from 'styled-components';

type ContainerProps = {
   showBackground: boolean;
};
type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
   background-color: ${(props) => (props.showBackground ? '#1550ff' : '#e2e3e3')};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 20px;
   /* padding: 15px 5px; */
   height: 100px;
   cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
   width: 50px;
   height: 50px;
   opacity: ${(props) => props.opacity ?? 1}
`;
