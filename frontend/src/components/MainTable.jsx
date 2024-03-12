import { Table } from 'flowbite-react';

export default function MainTable({data}) {
  return (
    <div className="mt-4 overflow-x-auto w-full">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Vin Number</Table.HeadCell>
          <Table.HeadCell>Created</Table.HeadCell>
          <Table.HeadCell>Updated</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {data != null ? (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>1</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'00103722100000600'}
            </Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
    </div>
  )
}