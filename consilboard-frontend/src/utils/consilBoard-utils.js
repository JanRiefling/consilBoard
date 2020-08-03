import {getJWTToken} from "./jwt-utils";

export function putConsilBoard(consilBoardName) {
    const token = getJWTToken();
    return fetch('/api/consilboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({consilBoardName: consilBoardName}),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function getConsilBoard() {
    const token = getJWTToken();
    return fetch('/api/consilboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function getConsilBoardClients() {
    const token = getJWTToken();
    return fetch('/api/consilboard/clientarray', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }
        return response.json();
    });
}

export function putClientToConsilBoard(client) {
    const token = getJWTToken();
    return fetch('/api/consilboard/clientarray', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(client),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function removeClientFromConsilBoard(client) {
    const token = getJWTToken();
    return fetch('/api/consilboard/clientarray', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(client),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

