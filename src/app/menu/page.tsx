import NavBar from "@/components/NavBar";
import Semicircle from "@/components/Semicircle";

export default function Page() {
    return (
        <div className="flex w-full h-full flex-col">
            <div className="flex h-full flex-col p-20 gap-5">
                <h1>¡Bienvenido Usuario!</h1>
                <div className="flex w-full flex-col gap-5">
                    <div>
                        <h2>Tu salud</h2>
                        <hr/>
                    </div>
                    <div className="flex justify-center">
                        <Semicircle value={100}/>
                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    );
}