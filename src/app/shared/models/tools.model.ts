export interface Tool {
    name: string;
    shortName: string;
    desc: string;
    route: string;
    images: string[];
    text: string[]; // Array of text items
    hov?: boolean | number; // Hovered or Not
}

export const tools: Tool[] = [
    {
        name: 'Spanish Accents Tool',
        shortName: 'Spanish Accents',
        desc: 'Simple, always-visible accents utility for typing spanish accent characters.',
        route: 'accents',
        images: [],
        text: []
    },
    {
        name: 'Lightweight Screenshot Utility',
        shortName: 'Screencapper',
        desc: "Minimal screenshot tool called 'Screencapper'.",
        route: 'screencapper',
        images: [],
        text: []
    },
    {
        name: 'Automatic Definition Finder',
        shortName: 'Definition Finder',
        desc: "Given a list of words, this tool returns a list of definitions using the internet.",
        route: 'definition-finder',
        images: [],
        text: []
    },
    {
        name: 'Secure Text/Password Encrypter',
        shortName: 'Text Encrypter',
        desc: "Simple, lightweight C+Qt program that will encrypt/decrypt text using a provided hash.",
        route: 'encrypter',
        images: [],
        text: []
    },
    {
        name: 'Ad-Free Android Metronome',
        shortName: 'Metronome App',
        desc: "Simple, ad-free Android Metronome app.",
        route: 'metronome',
        images: [],
        text: []
    }
];