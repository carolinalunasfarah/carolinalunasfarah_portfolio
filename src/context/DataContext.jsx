import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const archDataUrl = "/data/architecture.json";
    const fsDataUrl = "/data/fullstack.json";

    const [archData, setArchData] = useState([]);
    const [fsData, setFsData] = useState([]);

    useEffect(() => {
        const fetchData = async (url, setData) => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error(`Error trying to get data from ${url}:`, error);
            }
        };

        fetchData(archDataUrl, setArchData);
        fetchData(fsDataUrl, setFsData);
    }, []);

    return (
        <DataContext.Provider value={{ archData, fsData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
