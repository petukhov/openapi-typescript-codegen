export interface Type {
    type: string;
    base: string;
    template: string | null;
    imports: string[];
    isNullable: boolean;
    isEnum: boolean;
}
