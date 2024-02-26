const user = {
    name: "Felipe Bueno de Paula",
    age: 24
}

function getProperty() {
    return user.name
}





















// function getProperty(obj: Record<string, unknown>, key: string) {
//     return obj[key];
// }


// getProperty(user, 'felipe');



















// const vehicle = {
//     vin: "PX014124124",
//     dsn: 14540943
// }

// function getProperty<T extends Record<string, unknown>, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// getProperty(user, 'name');
// getProperty(vehicle, 'dsn');