export interface Product {
    name?: string;
    category?: string;
    version?: string;
    url?: string;
    description?: string;
    widgetsCount?: number;
}

export interface IWidget {
    name: string;
    operation: string;
    controlsCount: number;
    imageUrl: string;
}
