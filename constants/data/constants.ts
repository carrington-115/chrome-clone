import {
  appContext,
  data,
  globalAppContext,
  imageSearch,
} from "../types/appTypes";

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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo temporibus cumque minima, nihil quod cupiditate cum distinctio quos. Temporibus quos asperiores nam sequi in, sint ratione rerum voluptates possimus iste.",
    url: "https://www.aasalesimpex.com",
    image: "/images/search.svg",
    category: "Logistics company",
  },
  {
    id: "1",
    shortName: "Aasales",
    name: "Aasales Impex",
    description: "Aasales Impex Private Limited",
    url: "https://www.aasalesimpex.com",
    image: "/images/search.svg",
    category: "Logistics company",
  },
  {
    id: "1",
    shortName: "Aasales",
    name: "Aasales Impex",
    description: "Aasales Impex Private Limited",
    url: "https://www.aasalesimpex.com",
    image: "/images/search.svg",
    category: "Logistics company",
  },
];

const imageSuggestions: imageSearch[] = [
  {
    id: "1",
    url: "/images/search-image.png",
    description: "Aasales Impex Private Limited",
    link: "aasalesimpex.com",
  },
  {
    id: "1",
    url: "/images/search-image.png",
    description: "Aasales Impex Private Limited",
    link: "aasalesimpex.com",
  },
  {
    id: "1",
    url: "/images/search-image.png",
    description: "Aasales Impex Private Limited",
    link: "aasalesimpex.com",
  },
  {
    id: "1",
    url: "/images/search-image.png",
    description: "Aasales Impex Private Limited",
    link: "aasalesimpex.com",
  },
];

const searchContextData: globalAppContext = {
  showSideBar: false,
  toggleSideBar: (data) => {
    return (searchContextData.showSideBar = data);
  },
};

export { appsContent, searchSuggestions, imageSuggestions, searchContextData };
