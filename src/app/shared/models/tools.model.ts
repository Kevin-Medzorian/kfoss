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
        images: ['accents/accents-1.jpg', 'accents/accents-2.jpg', 'accents/accents-3.jpg'],
        text: [
            'This is a simple accents tool that allows the user to quickly type any common Spanish accent without the need for a number pad. <br> Efficiently type any accent for online quizzes, tests, or simple formal conversations.',
            'This tool uses an always-on-top display driver that allows for complete visibility no matter what program is in use. <br> This project is not finished, and requires support for custom keybindings for each accent.'
        ]
    },
    {
        name: 'Lightweight Screenshot Utility',
        shortName: 'Screencapper',
        desc: "Minimal screenshot tool called 'Screencapper'.",
        route: 'screencapper',
        images: ['screencapper/screencapper-1.jpg', 'screencapper/screencapper-2.jpg'],
        text: [
            'This is an open-source Java snipping tool that attempts to compete with alternatives such as G<a href="https://gyazo.com/en">Gyazo</a> or <a href="https://puush.me/">Puush</a>.',
            'Using the <a href="https://github.com/kwhat/jnativehook">JNativeHook</a> open-source library, this snipping tool takes realtime global input to recognize certain keybinds.',
            'This is <b>not finished</b>, and still requires support to upload to a public image database.'
        ]
    },  
    {
        name: 'Automatic Definition Finder',
        shortName: 'Definition Finder',
        desc: "Given a list of words, this tool returns a list of definitions using the internet.",
        route: 'definition-finder',
        images: ['def-finder/def-finder-1.jpg', 'def-finder/def-finder-2.jpg', 'def-finder/def-finder-3.jpg'],
        text: [
            'This is a simple utility that allows the <b>automatic pairing of English terms with their respective definitions</b> <br> (as used from <a href="https://dictionary.com">Dictionary.com</a>, <a href="https://www.merriam-webster.com/">Merriam-Webster</a>, and <a href="https://google.com">Google</a>)',
            'This uses the <a href="https://jsoup.org/">JSoup</a> open-source library to simplify HTML page inspection.',
            'Enjoy the entire Java project, implemented for the Netbeans IDE. <br> This project is <b>not finished</b>, and requires support for multi-word terms and historical vocabulary.'
        ]
    },
    {
        name: 'Secure Text/Password Encrypter',
        shortName: 'Text Encrypter',
        desc: "Simple, lightweight C+Qt program that will encrypt/decrypt text using a provided hash.",
        route: 'encrypter',
        images: ['encrypter/encrypter-1.jpg', 'encrypter/encrypter-2.jpg'],
        text: [
            'This is a simple, secure, text encryption software developed in C++ with the <a href="https://www.qt.io/">Qt</a> user-interface. <br> Efficiently encrypt/decrypt any piece of text using a secure key.',
            'Enjoy the entire C++ project, implemented for the Netbeans IDE. <br> This uses an open-source SHA256 hashing algorithm, courtesy of the <a href="https://github.com/okdshin/PicoSHA2">Pico</a> GitHub repository.'
        ]
    },
    {
        name: 'Ad-Free Android Metronome',
        shortName: 'Metronome App',
        desc: "Simple, ad-free Android Metronome app.",
        route: 'metronome',
        images: ['metronome/metronome.jpg', 'metronome/android-studio.svg'],
        text: [
            'To all Band Geeks in need: <br> I have made a simple, non-profit, ad-free metronome that works for Android devices.',
            'This app is programmed with Java in <a href="https://developer.android.com/studio">Android Studio.</a>'
        ]
    }
];