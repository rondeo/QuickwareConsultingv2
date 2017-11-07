export interface IFunkoCollection {
    Funkos: IFunkoDetail[];
}

export class IFunkoDetail {
    Id: number;
    Number: number;
    Category: string;
    Title: string;
    IsExclusive: boolean;
}

export const FUNKO_COLLECTION_MOCK_DATA: IFunkoCollection = {
    Funkos: [
        {
            Id: 1,
            Number: 21,
            Category: 'Assassin\'s Creed',
            Title: 'Ezio',
            IsExclusive: false,
        },
        {
            Id: 2,
            Number: 146,
            Category: 'Marvel',
            Title: 'Spider-Gwen',
            IsExclusive: false,
        },
        {
            Id: 3,
            Number: 111,
            Category: 'Marvel',
            Title: 'Deadpool',
            IsExclusive: false,
        },
        {
            Id: 4,
            Number: 159,
            Category: 'Pinky and the Brain',
            Title: 'Pinky',
            IsExclusive: false,
        },
        {
            Id: 5,
            Number: 160,
            Category: 'Pinky and the Brain',
            Title: 'The Brain',
            IsExclusive: false,
        },
        {
            Id: 6,
            Number: 144,
            Category: 'Marvel',
            Title: 'Squirrel Girl',
            IsExclusive: true,
        },
        {
            Id: 7,
            Number: 97,
            Category: 'Suicide Squad',
            Title: 'Harley Quinn',
            IsExclusive: false,
        }
    ]
};

export const FUNKO_COLLECTION_CATEGORIES_MOCK_DATA: string[] = [
    '',
    'Assassin\'s Creed',
    'Marvel',
    'D.C.',
    'Pinky and the Brain'
];
