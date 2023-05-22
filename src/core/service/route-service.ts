
export const getLinkProduct = (productId: string): string => {
    return `/products/${productId}`;
};

export const getLinkCategory = (categoryTitle: string): string => {
    return `/category/${categoryTitle}`;
};

export const getLinkCompareItem = (categoryTitle: string): string => {
    return `compare-list/${categoryTitle}`;
};

export const getLinkPrivacyPolicy = (): string => {
    return 'privacy-policy';
};
