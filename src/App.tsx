import React from 'react';
import './App.scss';
import Portal from "./Components/Portal/Portal";
import ClickAwayListener from "./Components/ClickAwayListener/ClickAwayListener";
import {Modal} from "./Components/Modal/ModalComponent";

function App() {
    const container = React.useRef(null);
    const [show, setShow] = React.useState(true);


    const close = () => {
        setShow(false);
    };

    const open = () => {
        setShow(true);
    };

    return (
        <div className="App">
            <button onClick={open}>Hello</button>
            <Modal theme='primary' isOpen={show} onClose={close}>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet architecto, consectetur distinctio doloribus error eum eveniet ex labore libero magnam natus nobis odio officia, provident temporibus voluptatibus. Aliquid aspernatur atque consectetur cum doloribus exercitationem id illo ipsa porro similique. Consectetur ducimus ipsam itaque quae quis saepe similique, tempora vitae. Adipisci amet animi at atque consequatur culpa cum deserunt eos facere, hic in ipsa ipsam ipsum labore maiores nisi odio officiis quas reiciendis repellat reprehenderit saepe sapiente sed sequi tempora totam vel veritatis! A doloremque dolores, ducimus esse illo ipsa maxime omnis quae quod ratione reiciendis veritatis voluptate voluptatum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet architecto, consectetur distinctio doloribus error eum eveniet ex labore libero magnam natus nobis odio officia, provident temporibus voluptatibus. Aliquid aspernatur atque consectetur cum doloribus exercitationem id illo ipsa porro similique. Consectetur ducimus ipsam itaque quae quis saepe similique, tempora vitae. Adipisci amet animi at atque consequatur culpa cum deserunt eos facere, hic in ipsa ipsam ipsum labore maiores nisi odio officiis quas reiciendis repellat reprehenderit saepe sapiente sed sequi tempora totam vel veritatis! A doloremque dolores, ducimus esse illo ipsa maxime omnis quae quod ratione reiciendis veritatis voluptate voluptatum.</p>
                    <p>My Friend</p>
                </div>
            </Modal>
            <div ref={container} className={"Placeholder"}/>
        </div>
    );
}

export default App;
