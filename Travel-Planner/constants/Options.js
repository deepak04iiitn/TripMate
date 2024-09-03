export const SelectTravellerList = [
    {
        id : 1,
        title : 'Just Me',
        desc : 'A sole traveller in exploration',
        icon : '✈️',
        people:'1 Person',
    },
    {
        id : 2,
        title : 'Couple',
        desc : 'Perfect for a romantic getaway',
        icon : '👫',
        people:'2 People',
    },
    {
        id : 3,
        title : 'Family',
        desc : 'Have thrills with your loved ones',
        icon : '👨‍👩‍👧‍👦',
        people:'3 to 6 People',
    },
    {
        id : 4,
        title : 'Friends',
        desc : 'A bunch of thrill-seeks',
        icon : '🏄‍♂️',
        people:'5 to 10 People',
    },
]


export const SelectBudgetOptions = [
    {
        id : 1,
        title : 'Cheap',
        desc : 'Stay conscious of costs',
        icon : '🏨',
    },
    {
        id : 2,
        title : 'Moderate',
        desc : 'Keep cost on the average side',
        icon : '🏝️',
    },
    {
        id : 3,
        title : 'Luxury',
        desc : 'Dont worry about cost',
        icon : '🏰',
    }
]


export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveller} with a {budget} budget with a Flight details , Flight Price with Booking url, Hotels opinions list with Hotel Name, Hotel address, Price, Hotel image url , geo coordinates , rating , descriptions and places to visit nearby with Place name , Place details , Place image url , Geo coordinates , ticket pricing , time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'