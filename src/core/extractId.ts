const extractSongId = (input: string) => {
    if (/^\d+$/.test(input)) {
        return input;
    }

    const urlPattern = /newgrounds\.com\/audio\/listen\/(\d+)/i;
    const match = input.match(urlPattern);

    return match && match[1];
};

export { extractSongId };
