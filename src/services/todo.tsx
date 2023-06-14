import axios from "axios";

const BASE_URL = "http://localhost:4000";

function itemPost(itemDescription: string) {
    const body = {
        userId: 8,
        description: itemDescription
    }
	const promise = axios.post(`${BASE_URL}/create-item`, body);
	return promise;
}
function itemDelete(itemId: number) {
	axios.delete(`${BASE_URL}/delete-item`, { data: { id: itemId } });
}
function itemCheck(itemId: number) {
	axios.put(`${BASE_URL}/check-item`,  {id:itemId});
}
function itemEdit(itemId: number, descriptionEdited: string) {
	axios.put(`${BASE_URL}/edit-item`,  {id:itemId, description: descriptionEdited});
}

export {
	itemPost,
    itemDelete,
    itemCheck,
    itemEdit
};