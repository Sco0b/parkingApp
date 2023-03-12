export class Place {
  id?: number;
  num: number;
  isLock: boolean;

  // constructor(data: any) {
  //   this.num = data.num;
  //   this.isLock = data.lock;
  // }

  constructor(num: number, isLock: boolean, id?: number) {
    this.num = num;
    this.isLock = isLock;
    this.id = id;
  }
}
