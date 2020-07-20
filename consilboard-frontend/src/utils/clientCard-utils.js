export async function getClientCard() {
    const response = await fetch('/api/client');
    const data = await response.json()
    return data;
}