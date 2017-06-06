// TODO: evtl. braucht man ein Polyfill fuer fetch
// Das koennte geeignet sein: https://github.com/matthew-andrews/isomorphic-fetch

// TODO: URL konfigurierbar machen
// const baseUrl = "http://tdmtool.haas-koestlbacher.de/api";
const baseUrl = "http://localhost:3003";

export function getUsers(): Promise<any> {
    return fetch(`${baseUrl}/users`, {credentials: "same-origin"})
        .then(response => response.json());
}
export function getRooms(): Promise<any> {
    return fetch(`${baseUrl}/rooms`, {credentials: "same-origin"})
        .then(response => response.json());
}