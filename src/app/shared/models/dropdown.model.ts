import { tools } from "./tools.model";

interface Menu {
    text:   string;
    route:  string;
}

export const menu: Menu[] = [
    // None defined 
];

tools.forEach(t => menu.push({text: t.shortName, route: t.route}));