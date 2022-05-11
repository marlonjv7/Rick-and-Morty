const data = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data?.results
}

export default data;