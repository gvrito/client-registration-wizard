export const ROUTES = {
    clientForm: 'client-form',
    client: 'client',
    address: 'address',
    identity: 'identity',
    clientInfo: 'client-info',
};
export const DROPDOWNS = {
    clientGroup: [
        'VIP Clients',
        'Loyal Clients',
        'New Clients'
    ],
    coordinator: [
        'Jhones',
        'Colinwood',
        'Smith'
    ],
    countries: [
        'Germany',
        'Russian Federation',
        'United Kingdom',
        'United States'
    ],
    cities: [
        'City A',
        'City B',
        'City C',
        'City D',
        'City E',
        'City F',
        'City G',
        'City H',
        'City I',
        'City J',
        'City K',
        'City L',
        'City M',
        'City N',
        'City O',
        'City P',
        'City Q',
    ],
    documentType: [
        'Passport',
        'Birth Certificate',
        'Driving License'
    ]
};
export enum WIZARD_STEPS {
    Client = 'client',
    Address = 'address',
    Identity = 'identity'
}
export const LIMITS = {
    phone: 11
};
export const keyToText = {
    name: 'Name:',
    lastName: 'Last Name:',
    middleName: 'Middle Name:',
    dateOfBirth: 'Date of birth:',
    phone: 'Phone:',
    gender: 'Gender:',
    clientGroup: 'Client Group:',
    coordinator: 'Coordinator:',
    noSms: 'Don\'t send me SMS',
    index: 'Index:',
    country: 'Country: ',
    area: 'Area:',
    city: 'City:',
    street: 'Street:',
    house: 'House:',
    documentType: 'Document Type:',
    series: 'Series:',
    number: 'Number:',
    issuedBy: 'Issued By:',
    dateOfIssue: 'Date of issue:',
    fileAttachment: 'File Attachment:'
};
