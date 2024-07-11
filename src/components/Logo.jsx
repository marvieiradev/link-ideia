const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 gap-3">
            <div className="max-w-[220px]">
                <img src="./logo-branco.svg" alt="" />
            </div>
            <p className="text-white text-md font-light italic mt-1">Fardamento para o seu negócio</p>
        </div>
    );
}

export default Logo;