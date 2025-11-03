export class House {
  title: string;
  price: string;
  location: string;
  image: string;

  constructor(data?: Partial<House>) {
    this.title = data?.title ?? '';
    this.price = data?.price ?? '';
    this.location = data?.location ?? '';
    this.image = data?.image ?? '';
  }
}
