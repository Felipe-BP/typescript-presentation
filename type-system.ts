function validateUser(user: { age?: number }) {
    user.age
    if (user.age && user.age < 18) {
        user.age
        throw new Error()
    }

    return true;
}