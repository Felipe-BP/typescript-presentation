type UserResponse = {
    id: number;
    name: string;
    age: number;
}

type PostUserBody = Omit<UserResponse, 'id'>

type VehiclesResponse = {
    id: number;
    vin: number | string;
}

type EndpointMap = {
    '/users': {
        get: UserResponse,
        post: PostUserBody,
    },
    '/vehicles': {
        get: VehiclesResponse,
    }
}

type FilterPostEndpoint<T> = {
    [K in keyof T as 'post' extends keyof T[K] ? K : never]: T[K];
}

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

type FilterEndpoints<T, TMethod extends Method> = {
    [K in keyof T as TMethod extends keyof T[K] ? K : never]: T[K];
}

type EndpointsWithPostOnly = FilterPostEndpoint<EndpointMap>;


async function get<TEndpoint extends keyof EndpointMap>(url: TEndpoint): Promise<EndpointMap[TEndpoint]['get']> {
    const response = await fetch(url);

    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
}

async function post<TEndpoint extends keyof EndpointsWithPostOnly, TBody extends EndpointsWithPostOnly[TEndpoint]['post']>(url: TEndpoint, data: TBody) {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

(async () => {
    const userResponse = await get('/users').catch(err => console.error(err));
    const vehiclesResponse = await get('/vehicles').catch(err => console.error(err));
    await post('/users', {
        name: "",
        age: 10
    })
    if (vehiclesResponse) {
        vehiclesResponse.id
    }
})

export const api = {
    get,
    post,
}