export class Product {
  constructor(
    public image: string,
    public title: string,
    public info: string,
    public price: number,
    public id: number,
    public userId: number,
    public isDel: boolean = false,
    public isEdit: boolean = false
  ) {}
}
