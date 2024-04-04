export default function Select({ children, className="" }: Readonly<{ children: React.ReactNode, className: string; }>) {
    return(
        <select 
            className= {className + " block rounded-full border-0 py-1.5 pl-7 my-2.5 md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset  sm:text-sm sm:leading-6"}
        >{children}</select>)
}