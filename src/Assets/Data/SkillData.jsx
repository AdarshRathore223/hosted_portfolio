import { BiLogoReact,BiLogoTypescript } from "react-icons/bi";
import { FaSass,FaGithub,} from 'react-icons/fa';
import {AiFillCode} from 'react-icons/ai';
import { SiMysql } from "react-icons/si";
const SkillData = [
    {   
      img:<BiLogoReact size={50} color="Black"/>,
      Title:'React',
      Description:"React lets you build user interfaces out of individual pieces called components.", 
      link:"https://react.dev/",
    },
    {   
      img:<FaSass size={50} color="#cf649a" />,
      Title:'Sass',
      Description:"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
      link:"https://sass-lang.com/", 
    },
    {   
      img:<SiMysql size={50} color="Black" />,
      Title:'Mysql',
      Description:"MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle.",
      link:"https://sass-lang.com/", 
    },
    {   
      img:<FaGithub size={50} color="Black"/>,
      Title:'Github',
      Description:"GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.",
      
    },
    {   
      img:<BiLogoTypescript size={50} color="#3178c6"/>,
      Title:'Typescript',
      Description:"TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. ",
      link:"https://www.typescriptlang.org/",
    },
    {   
      img:<AiFillCode size={50} color="Black"/>,
      Title:'Programming',
      Description:"C/C++, JavaScript, Python, Java",
      link:"https://www.typescriptlang.org/",
    },
  ]

  export default SkillData;