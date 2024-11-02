import React from "react";
import { Breadcrumb, SelectPicker} from "rsuite";
import TablePagination from "../components/utils/TablePagination";


const mockData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 34,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 45,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    age: 23,
  },
  {
    id: 5,
    firstName: "Williammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
    lastName: "Brown",
    age: 37,
  },
  {
    id: 6,
    firstName: "Linda",
    lastName: "Taylor",
    age: 31,
    city: "Philadelphia",
    email: "linda.taylor@example.com",
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Anderson",
    age: 29,
    city: "San Antonio",
    email: "david.anderson@example.com",
  },
  {
    id: 8,
    firstName: "Sarah",
    lastName: "Thomas",
    age: 41,
    city: "San Diego",
    email: "sarah.thomas@example.com",
  },
  {
    id: 9,
    firstName: "Robert",
    lastName: "Jackson",
    age: 52,
    city: "Dallas",
    email: "robert.jackson@example.com",
  },
  {
    id: 10,
    firstName: "Patricia",
    lastName: "White",
    age: 27,
    city: "San Jose",
    email: "patricia.white@example.com",
  },
  {
    id: 11,
    firstName: "Patricia",
    lastName: "White",
    age: 27,
    city: "San Jose",
    email: "patricia.white@example.com",
  },
];

const data = ['FII','DII','Indivdual'].map(
  item => ({ label: item, value: item })
);
const BigInvester = () => {

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          height: "50px",
        }}
      >
        <Breadcrumb style={{ fontSize: "1rem", margin: "0" }}>
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard/bulk-deals" active>
            bulk-deals
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SelectPicker
            data={data}
            searchable={false}
            style={{ width: 224 }}
            placeholder="Select without search"
            defaultValue="FII"
          />
        </div>
      </div>
      <TablePagination
        data={mockData}
        pagination={true}
        limit={10}
        count={mockData.length}
        hf={false}
        headerText="Top Buy"
        footerLink="/more-data"
      />
    </div>
  );
};

export default BigInvester;
