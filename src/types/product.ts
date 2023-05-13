
export type ResponseProductDto = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
};

export function FromProductDto(response: ResponseProductDto): Product {
    return {
        id: response.id,
        title: response.title,
        price: response.price,
        category: response.category,
        image: response.image,
    };
}