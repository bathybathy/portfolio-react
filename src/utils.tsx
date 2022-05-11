import {SiTypescript, SiJavascript, SiHtml5} from "react-icons/si"

export const languageToIcon = (language:string) => {
    switch (language) {
        case "TypeScript":
          return <SiTypescript />;
        case "JavaScript":
          return <SiJavascript />;
        case "HTML":
            return <SiHtml5 />;
        default:
          return '';
      }
}