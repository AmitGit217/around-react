class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  _customFetch(url, headers) {
    return fetch(url, headers).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }
  getUserInfo() {
    return this._customFetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    });
  }
  getInitialCards() {
    return this._customFetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    });
  }
  changeLikeCardStatus(id, likeState) {
    if (!likeState) {
      return this._customFetch(`${this.baseUrl}/cards/likes/${id}`, {
        headers: this.headers,
        method: "DELETE",
      });
    } else {
      return this._customFetch(`${this.baseUrl}/cards/likes/${id}`, {
        headers: this.headers,
        method: "PUT",
      });
    }
  }
  deleteCard(id) {
    return this._customFetch(`${this.baseUrl}/cards/${id}`, {
      headers: this.headers,
      method: "DELETE",
    });
  }
}
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "4f091419-1c89-4f29-928b-74f786fd1208",
    "Content-Type": "application/json",
  },
});
