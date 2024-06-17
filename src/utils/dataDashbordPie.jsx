import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const data1 = [
    {
        id: "javascript",
        label: "javascript",
        value: 40,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 60,
        color: "hsl(22, 90%, 90%)",
    },
];


const data2 = [
    {
        id: "javascript",
        label: "javascript",
        value: 70,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 30,
        color: "hsl(22, 90%, 90%)",
    },
];


const data3 = [
    {
        id: "javascript",
        label: "javascript",
        value: 44,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 66,
        color: "hsl(22, 90%, 90%)",
    },
];


const data4 = [
    {
        id: "javascript",
        label: "javascript",
        value: 77,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 33,
        color: "hsl(22, 90%, 90%)",
    },
];

export const card = [
    { icon: <EmailIcon fontSize="23px" />, number: "12,361", name: "Emails Sent", chart: data1, parent: '+14%', scheme: "nivo" },
    { icon: <PointOfSaleIcon fontSize="23px" />, number: "431,225", name: "Sales obtained", chart: data2, parent: '+21%', scheme: "category10" },
    { icon: <PersonAddIcon fontSize="23px" />, number: "32,441", name: "New Clients", chart: data3, parent: '+5%', scheme: "accent" },
    { icon: <TrafficIcon fontSize="23px" />, number: "1,325,134", name: "Traffic Received", chart: data4, parent: '+43%', scheme: "dark2" },
]

export const Transactions = [
    {
        txId: "01e4dsaewf",
        user: "johndoe",
        date: "2021-09-01",
        cost: "43.91",
    },
    {
        txId: "0315dsaaef",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.45",
    },
    {
        txId: "01e4dsaef",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "51034szvfew",
        user: "goodmanave",
        date: "2022-11-05",
        cost: "200.95",
    },
    {
        txId: "0a123sb",
        user: "stevebower",
        date: "2022-11-02",
        cost: "13.55",
    },
    {
        txId: "01e4dsa",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "120s51a",
        user: "wootzifer",
        date: "2019-04-15",
        cost: "24.20",
    },
    {
        txId: "0315dsaa",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.49",
    },
];