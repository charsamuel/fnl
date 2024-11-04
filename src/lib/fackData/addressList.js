// Define the address list
export const addressList = [
    {
        id: "01",
        country: "Address KENYA:",
        company: "FNL.",
        address: "Rhaphta road, Westlands",
        phone: "+254 712 557485 ",
        email: "info@fnl.co.ke",
        lat_lng: [35.9588148, -80.0130777]
    },
    // Uncomment these for testing
    // {
    //     id: "02",
    //     country: "Address Spain:",
    //     company: "architronix",
    //     address: "Avda. Valencia, 3, 46891, Palomar (Valencia), SPAIN ",
    //     phone: "336 885 6670  ",
    //     email: "info@fnl.co.ke",
    //     lat_lng: [38.8545732, -0.5016711]
    // },
    // {
    //     id: "03",
    //     country: "Address London:",
    //     company: "architronix LTD.",
    //     address: "Avda. Valencia, 3, 46891, London, England",
    //     phone: "336 885 6670  ",
    //     email: "hello@architronix.com",
    //     lat_lng: [51.5132388, -0.0080891]
    // },
];

// Check for duplicates
const ids = addressList.map(item => item.id);
const hasDuplicates = new Set(ids).size !== ids.length;
console.log('Has duplicates:', hasDuplicates);
