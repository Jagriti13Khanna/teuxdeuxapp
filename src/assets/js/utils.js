export const generateRandomID = () => {
    const generator = 99999;
    return Math.ceil(Math.random() * generator);
}