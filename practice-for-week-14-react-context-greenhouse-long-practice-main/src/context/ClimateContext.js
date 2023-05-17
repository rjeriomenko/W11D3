import { createContext, useContext, useState } from "react";

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

const ClimateContext = createContext();

const useClimateContext = () => useContext(ClimateContext);

const ClimateProvider = ({children}) => {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(0.4);

    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity}}>
            {children}
        </ClimateContext.Provider>
    );
}

export default ClimateProvider
export {useClimateContext}