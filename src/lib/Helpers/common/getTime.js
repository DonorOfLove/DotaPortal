export default function getTime(time) {
    return new Date(time * 1000).toISOString().slice(11, 16);
}

