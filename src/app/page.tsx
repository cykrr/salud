import Image from "next/image";

export default function Home() {
  return (
      <div className="flex justify-center items-center h-full flex-col w-30">
        <div id="login" className="text-center w-32 h-full flex flex-col justify-center items-center">
          <label>Inicia Sesión</label>
          <div className="h-16"></div>
          <div className="px-10">
              <input 
               type="text" 
               name="user"
               id="user-input"
               placeholder="Usuario"
               className="block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset  sm:text-sm sm:leading-6" 
               />

              <input 
               type="password" 
               name="password"
               id="password-input"
               placeholder="Contraseña"
               className="block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" 
               />
              <div className="h-16"></div>
              <div className="flex justify-center">
                <div className="w-full flex flex-col mx-20 gap-3">
                  <button className="bg-purple-500 hover:bg-purple-400 ease-in duration-100 rounded-2xl p-3 px-5 text-white font-light">Ingresar</button>
                  <button className="bg-purple-500 hover:bg-purple-400 ease-in duration-100 rounded-2xl p-3 px-5 text-white font-light">Registrarse</button>

                </div>  

              </div>

          </div>
         </div>
      </div>
  );
}
