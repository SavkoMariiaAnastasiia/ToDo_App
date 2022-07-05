import React from 'react';
import {MyModal, MyModalContent} from "./AppUi";

const Modal = ({children}: any) => {
    return (
        <MyModal>
            <MyModalContent>
                {children}
            </MyModalContent>
        </MyModal>
    );
};

export default Modal;