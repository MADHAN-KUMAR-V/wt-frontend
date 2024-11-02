import React, { useState } from "react";
import { Table, Pagination } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const TablePagination = ({
  data,
  pagination,
  count,
  hf,
  headerText,
  footerLink,
  limit,
}) => {
  const [activePage, setActivePage] = useState(1);

  const getPageData = () => {
    const start = (activePage - 1) * limit;
    return data.slice(start, start + limit);
  };

  const renderColumns = () => {
    if (data.length === 0) return null;
    const keys = Object.keys(data[0]);

    return keys.map((key) => (
      <Column key={key} flexGrow resizable>
        <HeaderCell>{key.charAt(0).toUpperCase() + key.slice(1)}</HeaderCell>
        <Cell dataKey={key} />
      </Column>
    ));
  };

  return (
    <div
      style={{ backgroundColor: "white", borderRadius: "4px", padding: "1rem" }}
    >
      {hf && (
        <div
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            fontWeight: "bold",
            borderBottom: "1px solid gray",
            paddingBottom: "0.5rem",
          }}
        >
          {headerText}
        </div>
      )}
      <Table height={420} data={getPageData()} autoHeight>
        {renderColumns()}
      </Table>
      <br />
      {pagination && (
        <Pagination
          total={count}
          limit={limit}
          activePage={activePage}
          onChangePage={setActivePage}
          layout={["total", "-", "|", "pager"]}
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
        />
      )}
      {hf && (
        <div style={{ marginTop: "1rem", textAlign: "end" }}>
          <a
            href={footerLink}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            View More
          </a>
        </div>
      )}
    </div>
  );
};

export default TablePagination;
