import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Modal.css';

const Modal = ({ isOpen, onClose, ModalChild }) => {
    console.log("My modal child: " + ModalChild);
    return (
        <div className={`${ isOpen ? '' : styles.Hidden }`}>
            <div className={ styles.Modal }>
                <div className={ styles.Close } onClick={ onClose }></div>
                { ModalChild }
            </div>
        </div>
    );
};

Modal.Title = ({ ModalChild }) => {
    return <div className={ styles.Title}>{ ModalChild }</div>
}

Modal.Body = ({ ModalChild }) => {
    return <div className={ styles.Body }>{ ModalChild }</div>
}

Modal.Footer = ({ ModalChild }) => {
    return <div className={ styles.Footer }>{ ModalChild }</div>
}

Modal.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool
};

Modal.defaultProps = {
    isOpen: false,
    ModalChild: 'debug'
};

export default Modal;