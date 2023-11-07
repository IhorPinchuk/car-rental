import { createContext, useContext, useState } from "react";

const SelectCarBrandContext = createContext();

export const useSelectCarBrand = () => useContext(SelectCarBrandContext);

export const SelectCarBrandProvider = ({children}) => {
    const [filterCarBrand, setFilterCarBrand] = useState('');

    return (
        <SelectCarBrandContext.Provider value={{ filterCarBrand, setFilterCarBrand }}>
            {children}
        </SelectCarBrandContext.Provider>
    )
}