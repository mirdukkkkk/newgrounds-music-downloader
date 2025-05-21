const parseSongData = (html: string) => {
    const urlMatch = html.match(/embedController\(\[.*?"url":"([^"]+)/);
    if (!urlMatch) throw new Error("Audio URL not found");

    const url = urlMatch[1].replace(/\\\//g, "/").split("?")[0];

    const titleMatch = html.match(/<title>([^<]+)</);
    const title = titleMatch ? titleMatch[1] : "Unknown Track";

    return { url, title };
};

export { parseSongData };
