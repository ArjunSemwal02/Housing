export class House {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;

  constructor(data?: Partial<House>) {
    this.id = data?.id ?? 0;
    this.title = data?.title ?? '';
    this.price = data?.price ?? '';
    this.location = data?.location ?? '';
    this.image = data?.image ?? '';
  }
}
