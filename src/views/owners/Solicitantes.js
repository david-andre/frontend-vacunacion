import React, { useEffect, useState } from "react";
import httpCommon from "../../http-common";
import OwnersTable from "../../components/OwnersTable";

const Solicitantes = () => {
  const [solicitante, setSolicitante] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setSolicitante(res.data);
    });
  }, []);

  const getAll = async () => {
    try {
      const res = await httpCommon.get("/solicitante");
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <OwnersTable users={solicitante}></OwnersTable>
    </div>
  );
};

export default Solicitantes;
