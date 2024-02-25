export function generateUniqueEmailAddress() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `test+${randomNumber}@qwertyuiopasdfgh.com`;
}