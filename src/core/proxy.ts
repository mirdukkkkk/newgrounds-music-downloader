type proxyResponse = {
    contents: string;
    status: {
        url: string;
        content_type: string;
        http_code: number;
        response_time: number;
        content_length: number;
    };
};

const proxyURL = "api.allorigins.win";

const passProxy = async (id: number): Promise<proxyResponse> => {
    try {
        const url = `https://${proxyURL}/get?url=${encodeURIComponent(`https://www.newgrounds.com/audio/listen/${id}`)}`;
        const response = await fetch(url);

        return response.json();
    } catch (error) {
        throw error;
    }
};

export { type proxyResponse, proxyURL, passProxy };
