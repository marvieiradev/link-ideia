const Modal = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    return (
        <div id="container" onClick={handleOnClose} className="fixed top-10 z-30 inset-0 bg-dark bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white text-black-700 p-2 rounded-xl max-w-[90%]">

                <div className="flex flex-row items-center justify-center relative">
                    <div className="absolute right-1 top-1 w-[14px] md:w-[20px]" onClick={onClose}>
                        <img src="./close.svg" alt="" />
                    </div>
                    <div>
                        <p className="uppercase text-black-700 text-xl font-bold text-center pt-3 pb-3">{/*AQUI FICA O TITULO*/}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center px-2">
                    {/*AQUI FICA O CONTEÚDO*/}
                </div>

                <div className="flex justify-center p-4">
                    {/*
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href=AQUI FICA O LINK target="_blank" className="bg-black-700 text-white text-center font-bold text-xs px-6 py-3 rounded-xl md:text-md">
                            TEXTO DO BOTÃO
                        </a>
                        </div>
                    */}
                </div>
            </div>
        </div>
    );
}

export default Modal;