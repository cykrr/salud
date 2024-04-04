export default function Input({input_type = "", placeholder = "", className = ""}) {
    return(
        <input 
        type={input_type}
        placeholder={placeholder}
        className={className + " block rounded-full border-0 py-1.5 pl-7 my-2.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:outline-none focus:ring-inset  sm:text-sm sm:leading-6"}
        />
    )
}