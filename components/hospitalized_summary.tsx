import { parseStandardDate } from "@/lib/utils";
import { ESAS, pacientes } from "@/mock-data";
import Status from "./ui/status";

export default function HospitalizedPacientsSummary() {
  const hospitalizedPacients = pacientes.reduce((pacients, pacient) => {
    if (pacient.alta || pacient.dataObito) return pacients;
    const intervalAllowed = new Date(Date.now());
    intervalAllowed.setDate(intervalAllowed.getDate() - 2);
    const isHospitalized =
      ESAS.findIndex((esa) => esa.pacienteId === pacient.cns) !== -1;

    if (isHospitalized) pacients.push(pacient);

    return pacients;
  }, [] as typeof pacientes);

  return (
    <div>
      <div>
        <h2 className="text-3xl">Internos</h2>
        <Status
          title="Pacientes internados"
          value={hospitalizedPacients.length.toString()}
          description="Nas últimas 48h"
        />
      </div>
    </div>
  );
}
