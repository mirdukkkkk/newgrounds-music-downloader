const extractFilename = (url: string) => {
    const match = url.match(/\/(\d+_.+\.mp3)/i);

    return match && match[1];
};

export { extractFilename };
