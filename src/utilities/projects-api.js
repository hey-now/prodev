import sendRequest from "./send-request";
const BASE_URL = '/api/projects';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }

export async function create(project) {
    return sendRequest(BASE_URL, "POST", project);
}
// export async function deleteNote(id) {
//     return sendRequest(`${BASE_URL}/${id}`, "DELETE");
// }
// export async function updateNote(id, noteFormData) {
//     return sendRequest(`${BASE_URL}/update/${id}`, "PUT", noteFormData);