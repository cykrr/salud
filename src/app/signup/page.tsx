import Image from "next/image";
import RutInput from "@/components/RutInput"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Select from "@/components/Select"


import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export async function getData() {
  const res = await fetch('https://gist.github.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')
  const data = await res.json()
  return data
}

export default async function Signup() {
  const data = await getData()

  async function get_regions() {
    let options = []
    for (let i = 0; i < data['regiones'].length; i++) {
      options.push(<option key={i} value={i}>{data['regiones'][i].region}</option>)
    }
    return options
  }
  async function get_comunas(region) {
    let options = []
    for (let i = 0; i < data['regiones'][region].comunas.length; i++) {
      options.push(<option key={i} value={i}>{data['regiones'][region].comunas[i]}</option>)
    }
    return options

  }

  return (
      <div className="flex justify-center items-center w-full h-full flex-col w-30 pt-10 lg:px-96">
        <div id="login" className="text-center w-full h-full flex flex-col justify-center items-center">
          <label>Registro</label>
          <div className="px-10">
            <div className="flex flex-row space-x-2.5">
              <Input className="w-full" placeholder={"Usuario"} inputType={"text"}></Input>
              <RutInput className="w-full"></RutInput>
            </div>
            <div className="flex flex-row space-x-2.5">
              <Select className="w-full">
                {get_regions()}
              </Select>
              <Select className="w-full">{get_comunas(0)}</Select>
            </div>
            <div className="flex flex-row space-x-2.5">
              <Input className="w-full" inputType="number" placeholder="Edad"></Input>
              <Select className="w-full">
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </Select>
            </div>
            <Input placeholder="Correo" className="w-full"></Input>
            <Input inputType="password" placeholder="Contraseña" className="w-full"></Input>
            <Input inputType="password" placeholder="Confirmar contraseña" className="w-full"></Input>

          {/* <div className="flex flex-row space-x-2.5 my-2.5">
                <select 
                name="region"
                id="region-input"
                defaultValue="region"
                className="w-full bg-white block rounded-full border-0 py-2.5 pl-7  pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset sm:text-sm sm:leading-6" 
                >
                  <option disabled value="region" className="text-gray-400">Región</option>
                  <option value="Valparaiso">Valparaíso</option>
                  <option value="Santiago">Santiago</option>

                </select>

                <select 
                name="comuna"
                id="comuna-input"
                defaultValue="default"
                className="w-full bg-white rounded-full border-0 py-2.5 pl-7  pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset  sm:text-sm sm:leading-6" 
                >
                  <option disabled value="">Comuna</option>
                  <option value="">Comuna</option>
                </select>

          </div> */}
          {/* <div className="flex flex-row space-x-2.5 my-2.5">
                <input 
                type="number" 
                name="age"
                id="age-input"
                placeholder="Edad"
                className="w-full block rounded-full border-0 py-2.5 pl-7  pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset sm:text-sm sm:leading-6" 
                />

                <select 
                name="sex"
                id="sex-input"
                defaultValue="default"
                className="w-full bg-white rounded-full border-0 py-2.5 pl-7 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset  sm:text-sm sm:leading-6" 
                >
                  <option disabled value="default">Sexo</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
          </div> */}

              {/* <input 
               type="text" 
               name="mail"
               id="mail-input"
               placeholder="Email"
               className="w-full block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" 
               />

              <input 
               type="password" 
               name="password"
               id="password-input"
               placeholder="Contraseña"
               className="w-full block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" 
               />
              <input 
               type="password" 
               name="confirm-password"
               id="confirm-password-input"
               placeholder="Confirmar contraseña"
               className="w-full block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" 
               /> */}
              <div className="flex justify-center">
                <div className="flex flex-col mx-20 gap-3">
                  <Button>Registrarse</Button>
                  
                </div>  

              </div>

          </div>
         </div>
      </div>
  );
}
