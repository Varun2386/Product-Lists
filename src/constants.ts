export const BASEURL = 'https://dummyjson.com'
export interface IProductList {
products: Array<IProduct>,
total: number
}

export interface IProduct {
    id: number,
    title: string,
    description: string,
    images: Array<string>,
    price: number,
    rating:number,
    discountPercentage? : number,
    addedItems: number
}