import { Block, Notify } from "notiflix";
import { createContext, useState } from "react";
import api from '../api';
import { IGitContext } from "./GitContext.models";

export const GitContext = createContext<IGitContext | null>(null);

const GitProvider = ({ children }: any) => {
    const [dataGit, setDataGit] = useState({})
    const [reposGit, setReposGit] = useState([])
    const getInfo = async () =>{
        try {
            const { data } = await api.get('')
            setDataGit(data)
            Block.remove('.homeCard')
        } catch (error) {
            Notify.failure("Ocorreu algum erro ao buscar as informações.")
        }
    };
    const getRepos = async () =>{
        try {
            const { data } = await api.get('/repos')
            setReposGit(data)
            Block.remove('.reposCard')
        } catch (error) {
            Notify.failure("Ocorreu algum erro ao buscar as informações.")
        }
    }
  return <GitContext.Provider value={{getInfo, dataGit, getRepos, reposGit}}>{children}</GitContext.Provider>;
};

export default GitProvider;
