import React,{useState} from 'react';
import styled from 'styled-components';
interface ModalProps {
    visible: boolean;
    children: any;
    SetVisible: ()=>void;
}
function Modal({visible,children,SetVisible}:ModalProps){
    // const [visible,SetVisible]=useState(true);
    // console.log(visible);
    return (
        <>
        <ModaOver visible={visible} onClick={SetVisible}/>
            <ModalInner visible={visible}>
                {children}
            </ModalInner>
        </>
    );
}
interface ModalOverlay{
    visible: boolean;
}
const ModaOver = styled.div<ModalOverlay>`
    position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
  z-index:1;
  display: ${({visible}) => (visible ? 'block' : 'none')};
`;

const ModalInner=styled.div<ModalOverlay>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 480px;
    z-index:1;
    
    max-width: 580px;
    margin: 0 auto;
    padding: 40px 20px;

    display: ${({visible}) => (visible ? 'flex' : 'none')};
    flex-direction: column;

    animation-name: modal;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    /* animation-iteration-count: infinite;반복 */
    @keyframes modal {
        from {top: 0%;}
        to {top:50%;left: 50%;transform: translate(-50%,-50%);}
    }
`
export default Modal;