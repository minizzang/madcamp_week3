import ReactDom from 'react-dom';

const PopupDom = ({children}) => {
    const el = document.getElementById("background_effect");
    return ReactDom.createPortal(children, el);
};

export default PopupDom;