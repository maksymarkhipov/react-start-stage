
export interface IResponseProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export function ResponseProductToProduct(response: IResponseProduct): IProduct {
    return {
        id: response.id,
        title: response.title,
        price: response.price,
        category: response.category,
        image: response.image,
    };
}