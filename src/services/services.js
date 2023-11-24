export const fetchApi = async (url, requestOptions) => {
    try {
        const res = await fetch(url, requestOptions);

        if (!res.ok) {
            throw new Error(res.status);
        }

        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginService = async (userData) => {
    const loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';

    const requestOptions = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    try {
        const data = await fetchApi(loginUrl, requestOptions);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
