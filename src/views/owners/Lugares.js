import React, { useEffect, useState } from "react";
import LugaresTable from "../../components/LugaresTable";
import httpCommon from "../../http-common";

const Lugares = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    getLugar().then((res) => {
      setLugares(res);
    });
  }, []);

  const getLugar = async () => {
    try {
      let aux = [];
      const res = await httpCommon.get("/lugar");
      const res2 = await httpCommon.get("/lote");
      const res3 = await httpCommon.get("/vacuna");
      res.data.forEach((element, index) => {
        aux[index] = {
          nombre: res.data[index].nombre,
          lote: res2.data[index].id,
          num_vacunas: res2.data[index].num_vacunas,
          vac_disponibles: res2.data[index].vac_disponibles,
          vacuna: res3.data[index].nombre,
        };
      });
      return aux;
    } catch (err) {
      console.log(err);
    }
  };
  const getLote = async () => {
    try {
      const res = await httpCommon.get("/lote");
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <LugaresTable users={lugares}></LugaresTable>
    </div>
  );
};

export default Lugares;
