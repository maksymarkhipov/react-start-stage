
export type ResponseProductDto = {
    id: string
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
};

export type Product = Omit<ResponseProductDto, 'rating'> & {
    rate: number
};

export function fromProductDto (response: ResponseProductDto): Product {
    return {
        id: response.id,
        title: response.title,
        price: response.price,
        category: response.category,
        image: response.image,
        description: response.description,
        rate: response.rating.rate,
    };
}
