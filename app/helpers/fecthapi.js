export async function fetchApi(url, options) {
    try {
        const res = await fetch(url, options)
        return res.json()
    } catch (error) {
        alert ('Error al recibir los datos')
    }
}