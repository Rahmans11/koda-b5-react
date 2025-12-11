import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";

export default function ShowProfile() {
  const { state } = useContext(userContext);
  return (
    <div className="flex justify-end gap-3 pb-4">
      <img
        className="w-[20%] border-2 border-blue-950 rounded-[50%]"
        src={state.user.profile || "photo-profile"}
        alt="photo profile"
      />
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold">
          {state.user.username || "username"}
        </p>
      </div>
    </div>
  );
}
