import { getJWTToken } from './jwt-utils';

export async function fetchAllClients() {
    const token = getJWTToken();
    const response = await fetch('/api/clients', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function fetchClient(id) {
    const token = getJWTToken();
    const response = await fetch(`/api/clients/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('something went wrong!');
    }
    return await response.json();
}

export async function fetchClientsByQuery(query) {
    const token = getJWTToken();
    const response = await fetch(`/api/clients/search/${query}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('something went wrong!');
    }
    return await response.json();
}


export function putClient(clientname) {
    const token = getJWTToken();
    return fetch('/api/clients', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({clientname: clientname}),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

    export function removeClientFromDb(id) {
        const token = getJWTToken();
        return fetch(`/api/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });



}
