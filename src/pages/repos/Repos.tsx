import { useEffect, useContext } from "react";
import { GitContext, IGitContext } from "../../context/GitContext";
import { FullPage, StyledSpan, StyledP  } from "../../GeneralStyles";
import { languageToIcon } from "../../utils";
import { ReposCard, ReposDivItem, ReposGrid, StyledA, StyledH3} from "./Repos.styles";

const Repos = () => {
  const { getRepos, reposGit } = useContext(GitContext) as IGitContext;
  useEffect(() => {
    getRepos();
  }, []);
  return (
    <FullPage>
      <ReposCard>
        <ReposGrid>
          {reposGit.map((repo) => (
            <ReposDivItem key={repo.id}>
              <StyledA href={repo.html_url}><StyledH3>{repo.name}</StyledH3></StyledA>
              <StyledP>{repo.description}</StyledP>
              {repo.language && <StyledSpan>Linguagem: {languageToIcon(repo.language)}</StyledSpan>}
            </ReposDivItem>
          ))}
        </ReposGrid>
      </ReposCard>
    </FullPage>
  );
};

export default Repos;