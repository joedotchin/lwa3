import axios from 'axios';

export type breaches = {
    data: breach[];
}

export type breach = {
    AddedDate: string,
    BreachDate: string,
    Description: string,
    Domain: string,
    IsFabricated: boolean,
    IsRetired: boolean,
    IsSensitive: boolean,
    IsSpamList: boolean,
    IsVerified: boolean,
    LogoPath: string,
    ModifiedDate: string,
    Name: string,
    PwnCount: number,
    Title: string
}

export const getBreaches = async (account: string): Promise<breaches> => {
    // return await axios.get<breach[]>(`http://localhost:3000/api/breaches?account=${account}`);
    return await axios.get<breach[]>(`https://9u351dm8j0.execute-api.us-east-1.amazonaws.com/dev/api/breaches?account=${account}`);
}