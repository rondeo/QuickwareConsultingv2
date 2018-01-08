export class Season {
    Year: number;
    NumberOfWins: number;
    NumberOfLosses: number;
    NumberOfTies: number;
}

export class Team {
    Id: number;
    City: string;
    Name: string;
    Conference: string;
    Division: string;
    NumberOfWins: number;
    NumberOfLosses: number;
    NumberOfTies: number;
    IsActive: boolean;
}

export const TEAMS: Team[] = [
{Id: 1, City: 'Arizona', Name: 'Cardinals', Conference: 'NFC', Division: 'West', NumberOfWins: 7, NumberOfLosses: 8, NumberOfTies: 1, IsActive: true},
{Id: 2, City: 'Atlanta', Name: 'Falcons', Conference: 'NFC', Division: 'South', NumberOfWins: 7, NumberOfLosses: 8, NumberOfTies: 1, IsActive: true},
{Id: 3, City:'Baltimore', Name: 'Ravens', Conference: 'AFC', Division: 'North', NumberOfWins: 7, NumberOfLosses: 8, NumberOfTies: 1, IsActive: true},
{Id: 4, City: 'Buffalo', Name: 'Bills', Conference: 'AFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 5, City: 'Carolina', Name: 'Panthers', Conference: 'NFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 6, City: 'Chicago', Name: 'Bears', Conference: 'NFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 7, City: 'Cincinnati', Name: 'Bengals', Conference: 'AFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 8, City: 'Cleveland', Name: 'Browns', Conference: 'AFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 9, City: 'Dallas', Name: 'Cowboys', Conference: 'NFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 10, City: 'Denver', Name: 'Broncos', Conference: 'AFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 11, City: 'Detroit', Name: 'Lions', Conference: 'NFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 12, City: 'Green Bay', Name: 'Packers', Conference: 'NFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 13, City: 'Houston', Name: 'Texans', Conference: 'AFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 14, City: 'Indianapolis', Name: 'Colts', Conference: 'AFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 15, City: 'Jacksonville', Name: 'Jaguars', Conference: 'AFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 16, City: 'Kansas City', Name: 'Chiefs', Conference: 'AFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 17, City: 'Los Angeles', Name: 'Rams', Conference: 'NFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 18, City: 'Miami', Name: 'Dolphins', Conference: 'AFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 19, City: 'Minnesota', Name: 'Vikings', Conference: 'NFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 20, City: 'New England', Name: 'Patriots', Conference: 'AFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 21, City: 'New Orleans', Name: 'Saints', Conference: 'NFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 22, City: 'New York', Name: 'Giants', Conference: 'NFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 23, City: 'New York', Name: 'Jets', Conference: 'AFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 24, City: 'Oakland', Name: 'Raiders', Conference: 'AFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 25, City: 'Philadelphia', Name: 'Eagles', Conference: 'NFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 26, City: 'Pittsburgh', Name: 'Steelers', Conference: 'AFC', Division: 'North', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 27, City: 'San Diego', Name: 'Chargers', Conference: 'AFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 28, City: 'San Francisco', Name: '49ers', Conference: 'NFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 29, City: 'Seattle', Name: 'Seahawks', Conference: 'NFC', Division: 'West', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 30, City: 'Tampa Bay', Name: 'Buccaneers', Conference: 'NFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 31, City: 'Tennessee', Name: 'Titans', Conference: 'AFC', Division: 'South', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true},
{Id: 32, City: 'Washington', Name: 'Redskins', Conference: 'NFC', Division: 'East', NumberOfWins: 7,NumberOfLosses: 8,NumberOfTies: 1, IsActive: true}
];
