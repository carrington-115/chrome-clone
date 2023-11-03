import { appContext, data, imageSearch } from "../types/appTypes";

const appsContent: appContext[] = [
  { logo: "A", title: "Aasales", link: "https://www.aasalesimpex.com" },
  { logo: "G", title: "Gmail", link: "https://www.gmail.com" },
  { logo: "S", title: "SWIMS Company", link: "https://www.swimscompany.com" },
  { logo: "I", title: "Integral University", link: "https://www.iul.ac.in" },
];

const searchSuggestions: data[] = [];

const imageSuggestions: imageSearch[] = [];

export { appsContent, searchSuggestions, imageSuggestions };
