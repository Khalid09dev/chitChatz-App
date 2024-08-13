export const extractTime = (dataString) => {
    const date = new Date(dataString);
    
    // Get local hours and minutes
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());

    // Determine AM/PM suffix
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hour from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight case
    
    return `${hours}:${minutes} ${period}`;
};

const padZero = (number) => {
    return number.toString().padStart(2, '0');
};
