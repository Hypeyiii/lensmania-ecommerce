import "../Components/Animations.css";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useUsers from "../Hooks/useUsers";

const DashboardProducts = () => {
  const { handleDelete, users, loading } = useUsers();

  return (
    <div className="mt-32 text-black dark:text-white w-[85%] mx-auto">
      <h1 className="text-center text-2xl">Dashboard Products</h1>
      {loading ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
          Loading...
          <AiOutlineLoading3Quarters className="spin size-32 md:size-52" />
        </div>
      ) : (
        <table className="w-full text-center mt-5 border-[0.5px] border-collapse border-white">
          <thead className="bg-black dark:bg-white text-white dark:text-black font-bold border-[0.5px] border-collapse border-black">
            <tr className="border-[0.5px] border-collapse border-white">
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base hidden md:block">
                Id
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Username
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Email
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Rol
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Eliminar
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((userData) => (
                <tr key={userData.id}>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base hidden md:table-cell">
                    {userData.id}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {userData.username}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {userData.email}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {userData.role}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    <button
                      className="bg-red-500 text-white text-xs md:text-base p-1"
                      onClick={() => handleDelete(userData.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    <Link
                      to={`Edit/${userData.id}`}
                      className="bg-blue-500 text-white p-1 text-xs md:text-base"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DashboardProducts;
