import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './../../firebase';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";


export default function ContactsData() {
    const [DataFireBase, setDataFireBase] = useState(null)

    const handleDeleteClick = (id) => async () => {
        let IdDelete = ''
        DataFireBase.map((docs) => {
            if (docs.id == id) {
                IdDelete = docs.IdDoc
            }
        })
        console.log(IdDelete)
        try {
            await deleteDoc(doc(db, "Users", IdDelete))
            setDataFireBase(DataFireBase.filter((DataFireBase) => DataFireBase.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetData()
    }, [])


    async function GetData() {
        const allDocs = [];
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
            allDocs.push({ ...doc.data(), IdDoc: doc.id });
        });
        setDataFireBase(allDocs);
        console.log(allDocs)
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "firstName",
            headerName: "Name",
            width: 120,
            cellClassName: "name-column--cell",
        },
        {
            field: "Age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            width: 44
        },
        {
            field: "contactNumber",
            headerName: "Phone Number",
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "Adress1",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "password",
            headerName: "Password",
            flex: 1,
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            width: 100,
            cellClassName: "actions",
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />
                ];
            }
        }
    ];

    return (
        columns = [
            {
                field: "id",
                headerName: "ID",
                flex: 1,
            },
            {
                field: "firstName",
                headerName: "Name",
                width: 120,
                cellClassName: "name-column--cell",
            },
            {
                field: "Age",
                headerName: "Age",
                type: "number",
                headerAlign: "left",
                align: "left",
                width: 44
            },
            {
                field: "contactNumber",
                headerName: "Phone Number",
                headerAlign: "center",
                align: "center",
                flex: 1,
            },
            {
                field: "email",
                headerName: "Email",
                flex: 1,
            },
            {
                field: "Adress1",
                headerName: "Address",
                flex: 1,
            },
            {
                field: "password",
                headerName: "Password",
                flex: 1,
            },
            {
                field: "actions",
                type: "actions",
                headerName: "Actions",
                width: 100,
                cellClassName: "actions",
                getActions: ({ id }) => {
                    return [
                        <GridActionsCellItem
                            icon={<DeleteIcon />}
                            label="Delete"
                            onClick={handleDeleteClick(id)}
                            color="inherit"
                        />
                    ];
                }
            }
        ]
    )
}




// export const rows = [
//     {
//         name: "Jon Snow",
//         email: "jonsnow@gmail.com",
//         age: 35,
//         phone: "(665)121-5454",
//         address: "0912 Won Street, Alabama, SY 10001",
//         city: "New York",
//         zipCode: "10001",
//     },
//     {
//         name: "Cersei Lannister",
//         email: "cerseilannister@gmail.com",
//         age: 42,
//         phone: "(421)314-2288",
//         address: "1234 Main Street, New York, NY 10001",
//         city: "New York",
//         zipCode: "13151",
//     },
//     {
//         name: "Jaime Lannister",
//         email: "jaimelannister@gmail.com",
//         age: 45,
//         phone: "(422)982-6739",
//         address: "3333 Want Blvd, Estanza, NAY 42125",
//         city: "New York",
//         zipCode: "87281",
//     },
//     {
//         name: "Anya Stark",
//         email: "anyastark@gmail.com",
//         age: 16,
//         phone: "(921)425-6742",
//         address: "1514 Main Street, New York, NY 22298",
//         city: "New York",
//         zipCode: "15551",
//     },
//     {
//         name: "Daenerys Targaryen",
//         email: "daenerystargaryen@gmail.com",
//         age: 31,
//         phone: "(421)445-1189",
//         address: "11122 Welping Ave, Tenting, CD 21321",
//         city: "Tenting",
//         zipCode: "14215",
//     },
//     {
//         name: "Ever Melisandre",
//         email: "evermelisandre@gmail.com",
//         age: 150,
//         phone: "(232)545-6483",
//         address: "1234 Canvile Street, Esvazark, NY 10001",
//         city: "Esvazark",
//         zipCode: "10001",
//     },
//     {
//         name: "Ferrara Clifford",
//         email: "ferraraclifford@gmail.com",
//         age: 44,
//         phone: "(543)124-0123",
//         address: "22215 Super Street, Everting, ZO 515234",
//         city: "Evertin",
//         zipCode: "51523",
//     },
//     {
//         name: "Rossini Frances",
//         email: "rossinifrances@gmail.com",
//         age: 36,
//         phone: "(222)444-5555",
//         address: "4123 Ever Blvd, Wentington, AD 142213",
//         city: "Esteras",
//         zipCode: "44215",
//     },
//     {
//         name: "Harvey Roxie",
//         email: "harveyroxie@gmail.com",
//         age: 65,
//         phone: "(444)555-6239",
//         address: "51234 Avery Street, Cantory, ND 212412",
//         city: "Colunza",
//         zipCode: "111234",
//     },
//     {
//         name: "Enteri Redack",
//         email: "enteriredack@gmail.com",
//         age: 42,
//         phone: "(222)444-5555",
//         address: "4123 Easer Blvd, Wentington, AD 142213",
//         city: "Esteras",
//         zipCode: "44215",
//     },
//     {
//         name: "Steve Goodman",
//         email: "stevegoodmane@gmail.com",
//         age: 11,
//         phone: "(444)555-6239",
//         address: "51234 Fiveton Street, CunFory, ND 212412",
//         city: "Colunza",
//         zipCode: "1234",
//     },
// ];