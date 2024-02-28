import Link from "next/link";
import { getUsers } from "../lib/adminData";
import {DeleteUserButton} from "./buttons";

export default async function UserTable() {
  const users = await getUsers();

  return (
    <table className="w-full hidden md:table bg-gray-50 shadow-md shadow-gray-100 rounded-md">
      <thead>
        <tr>
          <th className="pt-4 pb-2 text-left px-4">Name</th>
          <th className="pt-4 pb-2 text-left px-4">Email</th>
          <th className="pt-4 pb-2 text-left px-4">City</th>
          <th className="pt-4 pb-2 text-left px-4">Mobile No</th>
          <th className="pt-4 pb-2 text-left px-4"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {users?.map((user: any) => {
          return (
            <tr className="w-full border-b" key={user.id}>
              <td className="px-3 py-3">
                {user.name.firstname} {user.name.lastname}
              </td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td className="">{user.phone}</td>
              <td>
                <div className="flex gap-4">
                  <Link href={`/dash/users/${user.id}/edit`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Link>
                  <DeleteUserButton id={user.id} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
