import { createContext, useState } from "react";
import api from '../api';

export interface IGitContext {
    getInfo: () => void,
    dataGit: {
        name?: string,
        avatar_url?: string,
        bio?: string,
        location?: string,
        company?: string,
    },
    getRepos: () => void,
    reposGit: Array <IRepos>,
}

export interface IRepos{
    name: string,
    id: number,
    description: string,
    language: string,
    html_url: string
}

export const GitContext = createContext<IGitContext | null>(null);

const GitProvider = ({ children }: any) => {
    const [dataGit, setDataGit] = useState({})
    const [reposGit, setReposGit] = useState([])
    const getInfo = async () =>{
        try {
            const { data } = await api.get('')
            console.log(data)
            setDataGit(data)
        } catch (error) {
            
        }
    };
    const getRepos = async () =>{
        try {
            const { data } = await api.get('/repos')
            console.log(data)
            setReposGit(data)
        } catch (error) {
            
        }
    }
  return <GitContext.Provider value={{getInfo, dataGit, getRepos, reposGit}}>{children}</GitContext.Provider>;
};

export default GitProvider;
