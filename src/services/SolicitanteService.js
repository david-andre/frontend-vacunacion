import http from "../http-common";

const getAll = async () => {
  try {
    const res = await http.get("/solicitante");
    return res;
  } catch (err) {
    console.log(err);
  }
};

const SolicitanteService = {
  getAll,
};

export default SolicitanteService;
