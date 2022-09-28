export interface Speaker {
    accountId?: string;
    pageNumber?: number;
    pageSize?: number;
    filter?: string | undefined;
    includeDeleted?: boolean | undefined;
    name?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    preferredName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    isAccountSpeakers?: boolean | undefined;
}