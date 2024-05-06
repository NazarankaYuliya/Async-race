import { Winner } from '../../models/winners.interfaces';

export interface WinnersState {
    winners: Winner[];
    totalCount: string;
    page: number;
    limit: number;
    sort: string;
    order: string;
    loading: boolean;
    error: string;
}

export const winnersState: WinnersState = {
    winners: [],
    totalCount: '0',
    page: 1,
    limit: 10,
    sort: 'id',
    order: 'ASC',
    loading: false,
    error: '',
};
