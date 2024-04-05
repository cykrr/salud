import NavBar from "@/components/NavBar"
import CloseButton from "@/components/CloseButton"
import Select from "@/components/Select"
import InputUnit from "@/components/InputUnit"
import Button from "@/components/Button"

export default function Page() {
    return (
        <div className="flex w-full h-full flex-col">
            <div className="flex h-full flex-col p-20 gap-8">
                <div className="flex justify-between items-center">
                    <h1>Selecionar ejercicio</h1>
                    <CloseButton/>
                </div>
                <div className="flex flex-col gap-2">
                    <Select></Select>
                    <InputUnit className="" inputType="number" placeholder="Tiempo/repeticiones" unit="min/rep."/>
                </div>
                <Button>Agregar</Button>
            </div>
            <NavBar/>
        </div>
    );
}