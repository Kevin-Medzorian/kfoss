interface Tool {
    name: string;
    shortName: string;
    route: string;
    imageUrls: string[];
    text: string[];
}

export const tools: Tool[] = [
    {
        name: 'Spanish Accents Tool',
        shortName: 'Spanish Accents',
        route: 'accents',
        imageUrls: [],
        text: []
    }
    //const tools = ['accents', 'metronome', 'definition-finder', 'encrypter', 'screencapper'];
];