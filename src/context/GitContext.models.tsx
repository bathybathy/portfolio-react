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