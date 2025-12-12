import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSmokers } from "../redux/slices/formSmokerSlice";

function AddSmokerForm() {
  const smokersState = useSelector((state) => {
    return state.smokers;
  });

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    gender: "",
    category: "",
    brand: [],
  });

  const [error, setError] = useState({
    nama: false,
    umur: false,
    gender: false,
    category: false,
  });

  const onChangeHandler = (e) => {
    if (e.target.id === "nama") {
      if (e.target.value.length < 0) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }

    if (e.target.id === "umur") {
      if (e.target.value.length < 0) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }

    if (e.target.id === "gender") {
      if (e.target.value == null) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }

    if (e.target.id === "category") {
      if (e.target.value == null) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }

    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };

  const onChangeHandlerRadio = (e) => {
    // validasi

    if (e.target.name === "gender") {
      if (e.target.value == null) {
        setError({
          [e.target.name]: true,
        });
      } else {
        setError({
          [e.target.name]: false,
        });
      }
    }

    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const [brandSmoke, setBrand] = useState([]);

  const onChangeHandlerCheckBox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setBrand((brandSmoke) => [...brandSmoke, value]);
    } else {
      setBrand((brandSmoke) => brandSmoke.filter((item) => item !== value));
    }
    console.log(brandSmoke);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newSmoker = { id: smokersState.nextId };
    Object.assign(newSmoker, { nama: form.nama });
    Object.assign(newSmoker, { umur: form.umur });
    Object.assign(newSmoker, { gender: form.gender });
    Object.assign(newSmoker, { kategori: form.category });
    Object.assign(newSmoker, { brand: brandSmoke });
    dispatch(addSmokers(newSmoker));
    setForm({
      nama: "",
      umur: "",
      gender: "",
      category: "0",
      brand: [],
    });
  };

  return (
    <section className="flex justify-center p-5 md:p-10">
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 md:p-8 border-2 border-blue-500 rounded-3xl shadow-2xl w-full max-w-2xl">
        <div className="mb-8">
          <p className="text-center font-bold text-3xl md:text-4xl text-white border-b-2 border-blue-400 pb-4">
            Form Survey Perokok
          </p>
        </div>

        <div>
          <form noValidate onSubmit={submitHandler} id="surveyForm">
            <div className="mb-6">
              <label
                className="text-xl md:text-2xl font-semibold text-white mb-2 block"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                className="w-full p-3 border-2 border-blue-400 rounded-lg bg-blue-800/50 text-white placeholder-blue-300 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-500/50 transition-all"
                type="text"
                name="nama"
                id="nama"
                value={form.nama}
                onChange={onChangeHandler}
                placeholder="Masukan Nama"
              />
              <p className="min-h-12 font-bold text-red-300 mt-1">
                {error.nama && "❌ Input cannot be empty"}
              </p>
            </div>

            <div className="mb-6">
              <label
                className="text-xl md:text-2xl font-semibold text-white mb-2 block"
                htmlFor="umur"
              >
                Umur
              </label>
              <input
                className="w-full p-3 border-2 border-blue-400 rounded-lg bg-blue-800/50 text-white focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-500/50 transition-all"
                type="number"
                name="umur"
                id="umur"
                value={form.umur}
                onChange={onChangeHandler}
                placeholder="Masukan Umur"
              />
              <p className="min-h-12 font-bold text-red-300 mt-1">
                {error.umur && "❌ Input cannot be empty"}
              </p>
            </div>

            <div className="mb-6">
              <label className="text-xl md:text-2xl font-semibold text-white mb-3 block">
                Jenis Kelamin
              </label>
              <div className="flex justify-center space-x-6">
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 focus:ring-blue-500 focus:ring-2"
                    type="radio"
                    name="gender"
                    id="lk"
                    value="Laki-Laki"
                    defaultChecked={form.gender === "Laki-laki"}
                    onChange={onChangeHandlerRadio}
                  />
                  <label htmlFor="lk" className="ml-2 text-lg text-white">
                    Laki-laki
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 focus:ring-blue-500 focus:ring-2"
                    type="radio"
                    name="gender"
                    id="pr"
                    value="Perempuan"
                    defaultChecked={form.gender === "Perempuan"}
                    onChange={onChangeHandlerRadio}
                  />
                  <label htmlFor="pr" className="ml-2 text-lg text-white">
                    Perempuan
                  </label>
                </div>
              </div>
              <p className="min-h-12 font-bold text-red-300 mt-1">
                {error.gender && "❌ Input cannot be empty"}
              </p>
            </div>

            <div className="mb-6">
              <label
                className="text-xl md:text-2xl font-semibold text-white mb-2 block"
                htmlFor="category"
              >
                Apakah anda perokok?
              </label>
              <select
                className="w-full p-3 border-2 border-blue-400 rounded-lg bg-blue-800/50 text-white focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                name="category"
                id="category"
                value={form.category}
                onChange={onChangeHandler}
              >
                <option value="0" disabled defaultValue={"0"}>
                  Pilihan anda
                </option>
                <option value="Perokok">Ya</option>
                <option value="Bukan Perokok">Tidak</option>
              </select>
              <p className="min-h-12 font-bold text-red-300 mt-1">
                {error.category && "❌ Input cannot be empty"}
              </p>
            </div>

            <fieldset className="mb-8 p-4 border-2 border-blue-400 rounded-lg bg-blue-800/30">
              <legend className="text-xl md:text-2xl font-semibold text-white px-2">
                Brand Rokok Anda?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 rounded focus:ring-blue-500 focus:ring-2"
                    type="checkbox"
                    name="djarum"
                    id="djarum"
                    value="Djarum, "
                    defaultChecked={form.brand.includes("Djarum, ")}
                    onChange={onChangeHandlerCheckBox}
                  />
                  <label htmlFor="djarum" className="ml-2 text-lg text-white">
                    Djarum
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 rounded focus:ring-blue-500 focus:ring-2"
                    type="checkbox"
                    name="sampoerna"
                    id="sampoerna"
                    value="Sampoerna, "
                    defaultChecked={form.brand.includes("Sampoerna, ")}
                    onChange={onChangeHandlerCheckBox}
                  />
                  <label
                    htmlFor="sampoerna"
                    className="ml-2 text-lg text-white"
                  >
                    Sampoerna
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 rounded focus:ring-blue-500 focus:ring-2"
                    type="checkbox"
                    name="gudangGaram"
                    id="gudangGaram"
                    value="Gudang Garam, "
                    defaultChecked={form.brand.includes("Gudang Garam, ")}
                    onChange={onChangeHandlerCheckBox}
                  />
                  <label
                    htmlFor="gudangGaram"
                    className="ml-2 text-lg text-white"
                  >
                    Gudang Garam
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-5 h-5 text-blue-600 bg-blue-800 border-blue-400 rounded focus:ring-blue-500 focus:ring-2"
                    type="checkbox"
                    name="marlboro"
                    id="marlboro"
                    value="Marlboro, "
                    defaultChecked={form.brand.includes("Marlboro, ")}
                    onChange={onChangeHandlerCheckBox}
                  />
                  <label htmlFor="marlboro" className="ml-2 text-lg text-white">
                    Marlboro
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddSmokerForm;
