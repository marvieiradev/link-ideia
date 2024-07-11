const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 gap-3 ">
            <div className="max-w-[200px]">
                <img src="logo.svg" alt="" />
            </div>
            <p className="text-white text-xl">Ideia Camisetas</p>
        </div>
    );
}

export default Logo;