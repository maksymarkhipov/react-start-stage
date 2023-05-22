
export const getProductLink = (productId: string): string => {
    return `/products/${productId}`;
};

export const getCategoryLink = (categoryTitle: string): string => {
    return `/category/${categoryTitle}`;
};

export const getCompareItemLink = (categoryTitle: string): string => {
    return `compare-list/${categoryTitle}`;
};

export const getPrivacyPolicyLink = (): string => {
    return 'privacy-policy';
};
