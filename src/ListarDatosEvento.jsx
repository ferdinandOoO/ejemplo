import { useEffect, useState } from "react";

function listarDatos(){
    const [datos,setDatos] = useState([])
    useEffect(()=> {
        fetch("src/datosEvento.json")
        .then(response=>response.json())
        .then(losdatos=>{setDatos(losdatos)})
    },[])
    return datos
}
export default function DatosEvento(){
    const eventos = listarDatos()
    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Telefono</th>
                <th>Correo</th>
            </tr>
            {eventos.map(e => (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.nombre}</td>
                    <td>{e.usuario}</td>
                    <td>{e.telefono}</td>
                    <td>{e.correo}</td>
                </tr>
            ))}
        </table>
    )
}