import { createContext, useContext, useState} from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [especialidad,setEspecialidad]=useState("")
    //const [medico,setMedico]=useState("")

   // setVariable("zapato")

    //console.log(variable)

    function recolectarDatos(especialidad){
        setEspecialidad(especialidad)
        
        //setMedico(medico)
        
    }

    console.log("en contexto " + especialidad)

    return (
        <CartContext.Provider value={{recolectarDatos,especialidad}}>           
            {children}
        </CartContext.Provider>
    )

}



export default CartContextProvider