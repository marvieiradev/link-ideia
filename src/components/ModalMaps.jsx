const ModalMaps = ({ visible, onClose }) => {
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
                        <p className="uppercase text-black-700 text-xl font-bold text-center pt-3 pb-3">NOSSO ENDEREÇO</p>
                    </div>
                </div>

                <div className="flex flex-col items-center px-2">
                    <div className="flex justify-center itens-center md:hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127378.38284364024!2d-38.7406395!3d-3.9009605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0ab5e890d9a6d%3A0x24f419d6de2271b7!2sIDEIA%20CAMISETAS!5e0!3m2!1spt-BR!2sbr!4v1720658639333!5m2!1spt-BR!2sbr" width="320" height="225" loading="lazy"></iframe>
                    </div>

                    <div className="hidden md:flex itens-center justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127378.38284364024!2d-38.7406395!3d-3.9009605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0ab5e890d9a6d%3A0x24f419d6de2271b7!2sIDEIA%20CAMISETAS!5e0!3m2!1spt-BR!2sbr!4v1720658639333!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>

                <div className="flex justify-center p-4">
                    <div className="flex flex-row space-x-4 justify-center lg:justify-start">
                        <a href="https://www.google.com/maps/place/IDEIA+CAMISETAS/@-3.9009605,-38.7406395,12z/data=!4m6!3m5!1s0x7c0ab5e890d9a6d:0x24f419d6de2271b7!8m2!3d-3.900814!4d-38.67674!16s%2Fg%2F11qbs8yyds?entry=ttu" target="_blank" className="bg-black-700 text-white text-center font-bold text-xs px-6 py-3 rounded-xl md:text-md">
                            Ver Mapa Completo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMaps;