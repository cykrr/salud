import Link from 'next/link'
export default function Homepage() {
    return (
        <div>
            <p>Prueba</p>
            <Link href="/signin">Iniciar sesión</Link><br/>
            <Link href="/signup">Registrarse</Link><br/>
            <Link href="/terms_conditions">Términos y Condiciones</Link><br/>
            <Link href="/menu">Menú</Link><br/>
            <Link href="/add_food">Agregar alimento</Link>
        </div>
    )
}