export default async function API(url, method, data = null) {
    return await fetch(import.meta.env.VITE_API_HOST+url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data != null ? JSON.stringify(data) : null
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
}