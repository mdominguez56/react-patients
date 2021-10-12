import React, { Fragment, useState } from "react";

const Formulario = () => {
  // State de las citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, dueno, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    // Validaciones
    if (
      mascota.trim() === "" ||
      dueno.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    // Asignar ID

    // Crear la cita

    // Reiniciar el form
  };
  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del dueno</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueno mascota"
          onChange={actualizarState}
          value={dueno}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
