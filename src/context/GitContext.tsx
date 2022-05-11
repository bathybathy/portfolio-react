import { createContext, useState } from "react";
import api from '../api';

export interface IGitContext {
    getInfo: () => void,
    dataGit: {
        name?: string,
        avatar_url?: string,
        bio?: string
    }
}

export const GitContext = createContext<IGitContext | null>(null);

const GitProvider = ({ children }: any) => {
    const [dataGit, setDataGit] = useState({})
    const getInfo = async () =>{
        try {
            const { data } = await api.get('')
            console.log(data)
            setDataGit(data)
        } catch (error) {
            
        }
    }
  return <GitContext.Provider value={{getInfo, dataGit}}>{children}</GitContext.Provider>;
};

export default GitProvider;
