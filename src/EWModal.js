import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./index.css";

const PrivacyModal = () => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <div>
            <h2>Erica, an amazing companion!</h2>
            <br/>
            <p>
            Erica, our beloved companion, lived a life filled with boundless joy and happiness. 
            From frolicking in sunlit meadows to chasing playful butterflies, her days were a symphony of exuberance. 
            With every wag of her tail, Erica radiated infectious happiness, leaving an indelible mark on the hearts she touched. 
            Her spirit, forever etched in the memories of those fortunate enough to share in her joyous existence, 
            continues to inspire warmth and gratitude.
            </p>
            <br/>
            <p>Missing you forever,</p>
            <br/>
            <p>Thaleia</p>
            <p>Big Sister</p>
        </div>
    );
    return (
        <>
            <button className="EWModal" onClick={() => setOpen(true)}>
                Eternal Words
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;