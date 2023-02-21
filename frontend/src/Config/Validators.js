export const validateEmail = (email) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }
    return true;
}

export const validatePassword = (password) => {
    if (!password || password.length < 6) {
        return false
    }
    return true
}
