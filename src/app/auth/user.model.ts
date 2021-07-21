export class User {
  constructor(private _token: string) {}

  getToken() {
    return this._token;
  }
}
