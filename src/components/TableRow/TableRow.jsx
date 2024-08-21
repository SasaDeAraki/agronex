import React from "react";

const TableRow = ({ id, title, lastUpdate, status }) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{lastUpdate}</td>
            <td>{status}</td>
        </tr>
    );
};

export default TableRow;