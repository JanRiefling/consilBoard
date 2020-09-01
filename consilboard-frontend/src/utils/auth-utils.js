export async function performLogin(username, password) {
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    if (response.status !== 200) {
        throw new Error(`failed to login: ${response.statusText}`);
    }

    return await response.text();
}

export async function performSignUp(username, password) {
    const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    if (response.status !== 200) {
        throw new Error(`failed to fetch object: ${response.statusText}`);
    }

    return await response.json();
}