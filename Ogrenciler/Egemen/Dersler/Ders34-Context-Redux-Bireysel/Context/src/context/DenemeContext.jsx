import {createContext, useState, useEffect, useContext} from 'react'
import {PropTypes} from 'prop-types'

const DenemeContext = createContext();

export const DenemeProvider = ({children}) => {
    const [deneme, setDeneme] = useState(localStorage.getItem("deneme") || "birinciDeneme")
    useEffect(() => {
        localStorage.setItem("deneme", deneme);
    }, [deneme]);

    const values = {deneme, setDeneme};

  return (
    <DenemeContext.Provider value={values}>
      {children}
    </DenemeContext.Provider>
  )
}

DenemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useDeneme = () => useContext(DenemeContext);
