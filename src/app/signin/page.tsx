import Image from "next/image";
import Input from "@/views/Input"
import Button from "@/views/Button"

export default function Login() {
  return (
      <div className="flex justify-center items-center h-full flex-col w-30">
        <div id="login" className="text-center w-32 h-full flex flex-col justify-center items-center">
          <label>Inicia Sesión</label>
          <div className="h-16"></div>
          <div className="px-10">
              <Input input_type={"text"} placeholder={"Usuario"}/>
              <Input input_type={"password"} placeholder={"Contraseña"}/>

              <div className="h-16"></div>
              <div className="flex justify-center">
                <div className="w-full flex flex-col mx-20 gap-3">
                  <Button>Iniciar Sesión</Button>
                  <Button>Registrarse</Button>


                </div>  

              </div>

          </div>
         </div>
      </div>
  );
}
