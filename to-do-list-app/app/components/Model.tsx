import React from 'react';

interface ModelProps {
    modelOpen: boolean;
    setModelOpen: (open : boolean) => boolean | void;
    children : React.ReactNode;
}

const Model: React.FC<ModelProps> = ({ modelOpen ,setModelOpen, children }) => {

    return (
        <>
            <div className={`modal ${modelOpen ? "modal-open" : ""}`}>

                <div className="modal-box relative">
                    <label onClick={() => setModelOpen(false) } htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        x
                    </label>
                    {children}
                </div>

            </div >
        </>
    );
};

export default Model;
