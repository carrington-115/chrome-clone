import { appContext, data, imageSearch } from "../types/appTypes";

const appsContent: appContext[] = [
  { logo: "A", title: "Aasales", link: "https://www.aasalesimpex.com" },
  { logo: "G", title: "Gmail", link: "https://www.gmail.com" },
  { logo: "S", title: "SWIMS Company", link: "https://www.swimscompany.com" },
  { logo: "I", title: "Integral University", link: "https://www.iul.ac.in" },
];

const searchSuggestions: data[] = [
  {
    id: "1",
    shortName: "Aasales",
    name: "Aasales Impex",
    description: "Aasales Impex Private Limited",
    url: "https://www.aasalesimpex.com",
    image: "https://www.aasalesimpex.com/images/logo.png",
    category: "Logistics company",
  },
  {
    id: "1",
    shortName: "Aasales",
    name: "Aasales Impex",
    description: "Aasales Impex Private Limited",
    url: "https://www.aasalesimpex.com",
    image: "https://www.aasalesimpex.com/images/logo.png",
    category: "Logistics company",
  },
  {
    id: "1",
    shortName: "Aasales",
    name: "Aasales Impex",
    description: "Aasales Impex Private Limited",
    url: "https://www.aasalesimpex.com",
    image: "https://www.aasalesimpex.com/images/logo.png",
    category: "Logistics company",
  },
];

const imageSuggestions: imageSearch[] = [];

export { appsContent, searchSuggestions, imageSuggestions };
