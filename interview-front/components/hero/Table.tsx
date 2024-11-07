import React from "react";

interface TableProps {
  headers: React.ReactNode[];
  data: Array<Record<string, string | number | React.ReactNode>>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="relative overflow-x-auto rounded-md shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers && headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4">
                  {/* Render HTML content safely */}
                  {typeof cell === 'string' ? (
                    <span dangerouslySetInnerHTML={{ __html: cell }} />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
