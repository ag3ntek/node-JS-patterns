import ini from 'ini';

export const initStrategy = {
    deserialize: data => ini.parse(data),
    serialize: data => ini.stringify(data)
}

export const jsonStrategy = {
    deserialize: data => JSON.parse(data),
    serialize: data => JSON.stringify(data)
}