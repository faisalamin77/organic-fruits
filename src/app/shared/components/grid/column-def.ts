interface ColumnDef {
    field: string;
    headerName: string;
    minWidth: number;
    maxWidth: number;
    sortable: boolean | string;
    filter: boolean | string;
    flex: number;
}

type Partial<T> = { [p in keyof T]?: T[p]; };
type WithOptional<T, K extends keyof T> = Omit<Partial<T>, K> & Pick<T, K>;

export type PartialColumnDef = WithOptional<ColumnDef, 'field'>;

export const ColumnDefaultDef: Partial<ColumnDef> = {
    sortable: true,
    filter: true,
    flex: 2,
    minWidth: 200
};
