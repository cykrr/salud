'use client'
import Select from "@/components/Select"
import * as React from 'react'
import { useState, useEffect } from 'react'

type Props = {
    children?: React.Element<Child>
    className?: string
}



export const SelectRegionComuna = ({children, className}: Props)=>{
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })
    }, [])


    function get_regions() {
        let options = []
        if (data == null) console.log(null)
        for (let i = 0; i < data['regiones'].length; i++) {
          options.push(<option key={i} value={i}>{data['regiones'][i].region}</option>)
          console.log(data["regiones"][i].region)
        }
        return options
    }

    return(
        <Select className="w-full">
            {data? get_regions():"Cargando"}
        </Select>
    )
}
export default SelectRegionComuna