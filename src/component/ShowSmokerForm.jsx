import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSmokers } from "../redux/slices/formSmokerSlice";

function ShowSmokerForm() {
  const smokersState = useSelector((state) => state.smokers);
  const dispatch = useDispatch();
  return (
    <section className="flex-1 p-5 border-2 border-solid border-white">
      <table className="border-2 border-solid border-blue-300 w-full">
        <caption className="text-2xl font-bold mb-2">Data Survey</caption>
        <thead className="border-2 border-solid border-blue-300">
          <tr className="border-2 border-solid border-blue-300">
            <th className="border-2 border-solid border-blue-300" scope="col">
              Nama
            </th>
            <th className="border-2 border-solid border-blue-300" scope="col">
              Umur
            </th>
            <th className="border-2 border-solid border-blue-300" scope="col">
              Gender
            </th>
            <th className="border-2 border-solid border-blue-300" scope="col">
              Kategori
            </th>
            <th className="border-2 border-solid border-blue-300" scope="col">
              Brand Rokok
            </th>
            <th className="border-2 border-solid border-blue-300" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-blue-300">
          {smokersState.smokers.map((smoker) => {
            return (
              <tr key={smoker.id} className="text-center border-2 border-solid border-blue-300">
                <td className="border-2 border-solid border-blue-300">
                  {smoker.nama}
                </td>
                <td className="border-2 border-solid border-blue-300">
                  {smoker.umur}
                </td>
                <td className="border-2 border-solid border-blue-300">
                  {smoker.gender}
                </td>
                <td className="border-2 border-solid border-blue-300">
                  {smoker.kategori}
                </td>
                <td className="border-2 border-solid border-blue-300">
                  {smoker.brand}
                </td>
                <td className="border-2 border-solid border-blue-300">
                  <button
                    className=" text-red-500"
                    onClick={() => {
                      dispatch(deleteSmokers(smoker.id));
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default ShowSmokerForm;
