interface Paciente {
  alta: boolean;
  categoria: string;
  cns: string;
  createdAt: string;
  dataNascimento: string;
  dataObito: string | null;
  excluido: boolean;
  nome: string;
  nomeMae: string;
  numeroProntuario: string;
  sexo: string;
  tipoPaciente: string;
  updatedAt: string;
}

interface Usuario {
  admin: boolean;
  ativo: boolean;
  email: string;
  nome: string;
}

interface ESAS {
  data: string;
  pacienteId: string;
  respondido: string;
  sintomas: {
    apetite: number;
    "bem-estar": number;
    cansaco: number;
    dor: number;
    "falta-ar": string;
    nausea: number;
    preocupacao: string;
    sonolencia: string;
    tristeza: number;
  };
}

interface PPS {
  data: string;
  pacienteId: string;
  valor: number;
}

export const pacientes: Paciente[] = [
  {
    alta: false,
    categoria: "PRECOCE",
    cns: "100200300400500",
    createdAt: "20 de dezembro de 2022 18:22:38 UTC-3",
    dataNascimento: "1998-12-23",
    dataObito: null,
    excluido: false,
    nome: "ANA MARIA FERREIRA DOS SANTOS",
    nomeMae: "JOANA GOLÇALVES FERREIRA",
    numeroProntuario: "1",
    sexo: "F",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "20 de dezembro de 2022 23:11:18 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "200300400500600",
    createdAt: "21 de dezembro de 2022 10:30:45 UTC-3",
    dataNascimento: "1985-05-10",
    dataObito: null,
    excluido: false,
    nome: "JOSE CARLOS SILVA",
    nomeMae: "MARIA DA CONCEICAO SILVA",
    numeroProntuario: "2",
    sexo: "M",
    tipoPaciente: "CRONICO",
    updatedAt: "21 de dezembro de 2022 15:20:22 UTC-3",
  },
  {
    alta: false,
    categoria: "INICIAL",
    cns: "300400500600700",
    createdAt: "22 de dezembro de 2022 14:05:12 UTC-3",
    dataNascimento: "1972-09-18",
    dataObito: null,
    excluido: false,
    nome: "LUCIA FERREIRA",
    nomeMae: "ANA MARIA FERREIRA",
    numeroProntuario: "3",
    sexo: "F",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "22 de dezembro de 2022 19:40:30 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "400500600700800",
    createdAt: "23 de dezembro de 2022 08:15:59 UTC-3",
    dataNascimento: "1990-03-05",
    dataObito: null,
    excluido: false,
    nome: "PEDRO ALVES",
    nomeMae: "MARIA ALVES",
    numeroProntuario: "4",
    sexo: "M",
    tipoPaciente: "CRONICO",
    updatedAt: "23 de dezembro de 2022 13:50:42 UTC-3",
  },
  {
    alta: false,
    categoria: "PRECOCE",
    cns: "500600700800900",
    createdAt: "24 de dezembro de 2022 20:40:30 UTC-3",
    dataNascimento: "1982-11-12",
    dataObito: null,
    excluido: false,
    nome: "MARIA SOUZA",
    nomeMae: "ANA SOUZA",
    numeroProntuario: "5",
    sexo: "F",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "24 de dezembro de 2022 23:55:18 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "6007008009001000",
    createdAt: "25 de dezembro de 2022 12:10:20 UTC-3",
    dataNascimento: "1975-07-30",
    dataObito: null,
    excluido: false,
    nome: "ANTONIO RODRIGUES",
    nomeMae: "MARIA RODRIGUES",
    numeroProntuario: "6",
    sexo: "M",
    tipoPaciente: "CRONICO",
    updatedAt: "25 de dezembro de 2022 17:30:15 UTC-3",
  },
  {
    alta: false,
    categoria: "PRECOCE",
    cns: "8009001002003000",
    createdAt: "27 de dezembro de 2022 18:20:10 UTC-3",
    dataNascimento: "1979-04-02",
    dataObito: null,
    excluido: false,
    nome: "FERNANDA SANTOS",
    nomeMae: "ANA SANTOS",
    numeroProntuario: "8",
    sexo: "F",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "27 de dezembro de 2022 23:05:45 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "7008009001002000",
    createdAt: "26 de dezembro de 2022 09:45:33 UTC-3",
    dataNascimento: "1988-08-15",
    dataObito: null,
    excluido: false,
    nome: "CARLOS EDUARDO OLIVEIRA",
    nomeMae: "MARIA OLIVEIRA",
    numeroProntuario: "7",
    sexo: "M",
    tipoPaciente: "CRONICO",
    updatedAt: "26 de dezembro de 2022 14:30:20 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "9001002003004000",
    createdAt: "28 de dezembro de 2022 11:55:28 UTC-3",
    dataNascimento: "1995-01-20",
    dataObito: null,
    excluido: false,
    nome: "RAFAEL SILVEIRA",
    nomeMae: "MARIA SILVEIRA",
    numeroProntuario: "9",
    sexo: "M",
    tipoPaciente: "CRONICO",
    updatedAt: "28 de dezembro de 2022 16:40:15 UTC-3",
  },
  {
    alta: false,
    categoria: "PRECOCE",
    cns: "1002003004005000",
    createdAt: "29 de dezembro de 2022 22:10:05 UTC-3",
    dataNascimento: "1987-06-08",
    dataObito: null,
    excluido: false,
    nome: "LUIZ FERREIRA",
    nomeMae: "ANA FERREIRA",
    numeroProntuario: "10",
    sexo: "M",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "29 de dezembro de 2022 23:45:50 UTC-3",
  },
  {
    alta: true,
    categoria: "AVANCADO",
    cns: "2003004005006000",
    createdAt: "30 de dezembro de 2022 14:40:18 UTC-3",
    dataNascimento: "1983-03-12",
    dataObito: null,
    excluido: false,
    nome: "ANA CARVALHO",
    nomeMae: "MARIA CARVALHO",
    numeroProntuario: "11",
    sexo: "F",
    tipoPaciente: "CRONICO",
    updatedAt: "30 de dezembro de 2022 19:25:05 UTC-3",
  },
  {
    alta: false,
    categoria: "PRECOCE",
    cns: "3004005006007000",
    createdAt: "31 de dezembro de 2022 08:05:40 UTC-3",
    dataNascimento: "1993-09-28",
    dataObito: null,
    excluido: false,
    nome: "JOAO PEREIRA",
    nomeMae: "MARIA PEREIRA",
    numeroProntuario: "12",
    sexo: "M",
    tipoPaciente: "ELEGIVEL",
    updatedAt: "31 de dezembro de 2022 12:50:27 UTC-3",
  },
];

export const usuarios: Usuario[] = [
  {
    admin: true,
    ativo: true,
    email: "reinaldoalbernaz@example.com",
    nome: "Reinaldo",
  },
  {
    admin: false,
    ativo: true,
    email: "maria.rodrigues@example.com",
    nome: "Maria Rodrigues",
  },
  {
    admin: true,
    ativo: false,
    email: "joao.silva@example.com",
    nome: "João Silva",
  },
  {
    admin: false,
    ativo: true,
    email: "ana.carvalho@example.com",
    nome: "Ana Carvalho",
  },
  {
    admin: true,
    ativo: true,
    email: "pedro.alves@example.com",
    nome: "Pedro Alves",
  },
  {
    admin: false,
    ativo: false,
    email: "lucia.ferreira@example.com",
    nome: "Lúcia Ferreira",
  },
];

export const ESAS: ESAS[] = [
  {
    data: "10 de maio de 2024 14:30:00 UTC-3",
    pacienteId: "100200300400500",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 3,
      "bem-estar": 7,
      cansaco: 5,
      dor: 4,
      "falta-ar": "2",
      nausea: 1,
      preocupacao: "6",
      sonolencia: "5",
      tristeza: 2,
    },
  },
  {
    data: "11 de maio de 2024 15:30:00 UTC-3",
    pacienteId: "200300400500600",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 2,
      "bem-estar": 6,
      cansaco: 4,
      dor: 3,
      "falta-ar": "1",
      nausea: 0,
      preocupacao: "5",
      sonolencia: "4",
      tristeza: 1,
    },
  },
  {
    data: "12 de maio de 2024 16:30:00 UTC-3",
    pacienteId: "300400500600700",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 1,
      "bem-estar": 5,
      cansaco: 3,
      dor: 2,
      "falta-ar": "0",
      nausea: 1,
      preocupacao: "4",
      sonolencia: "3",
      tristeza: 0,
    },
  },
  {
    data: "13 de maio de 2024 17:30:00 UTC-3",
    pacienteId: "400500600700800",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 0,
      "bem-estar": 4,
      cansaco: 2,
      dor: 1,
      "falta-ar": "1",
      nausea: 2,
      preocupacao: "3",
      sonolencia: "2",
      tristeza: 1,
    },
  },
  {
    data: "14 de maio de 2024 18:30:00 UTC-3",
    pacienteId: "500600700800900",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 1,
      "bem-estar": 3,
      cansaco: 1,
      dor: 0,
      "falta-ar": "2",
      nausea: 3,
      preocupacao: "2",
      sonolencia: "1",
      tristeza: 0,
    },
  },
  {
    data: "15 de maio de 2024 19:30:00 UTC-3",
    pacienteId: "6007008009001000",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 2,
      "bem-estar": 2,
      cansaco: 0,
      dor: 1,
      "falta-ar": "3",
      nausea: 4,
      preocupacao: "1",
      sonolencia: "0",
      tristeza: 1,
    },
  },
  {
    data: "16 de maio de 2024 20:30:00 UTC-3",
    pacienteId: "100200300400500",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 3,
      "bem-estar": 7,
      cansaco: 5,
      dor: 4,
      "falta-ar": "2",
      nausea: 1,
      preocupacao: "6",
      sonolencia: "5",
      tristeza: 2,
    },
  },
  {
    data: "17 de maio de 2024 21:30:00 UTC-3",
    pacienteId: "100200300400500",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 2,
      "bem-estar": 6,
      cansaco: 4,
      dor: 3,
      "falta-ar": "1",
      nausea: 0,
      preocupacao: "5",
      sonolencia: "4",
      tristeza: 1,
    },
  },
  {
    data: "18 de maio de 2024 22:30:00 UTC-3",
    pacienteId: "200300400500600",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 1,
      "bem-estar": 5,
      cansaco: 3,
      dor: 2,
      "falta-ar": "0",
      nausea: 1,
      preocupacao: "4",
      sonolencia: "3",
      tristeza: 0,
    },
  },
  {
    data: "19 de maio de 2024 23:30:00 UTC-3",
    pacienteId: "200300400500600",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 0,
      "bem-estar": 4,
      cansaco: 2,
      dor: 1,
      "falta-ar": "1",
      nausea: 2,
      preocupacao: "3",
      sonolencia: "2",
      tristeza: 1,
    },
  },
  {
    data: "20 de maio de 2024 00:30:00 UTC-3",
    pacienteId: "300400500600700",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 1,
      "bem-estar": 3,
      cansaco: 1,
      dor: 0,
      "falta-ar": "2",
      nausea: 3,
      preocupacao: "2",
      sonolencia: "1",
      tristeza: 0,
    },
  },
  {
    data: "21 de maio de 2024 01:30:00 UTC-3",
    pacienteId: "300400500600700",
    respondido: "PACIENTE",
    sintomas: {
      apetite: 2,
      "bem-estar": 2,
      cansaco: 0,
      dor: 1,
      "falta-ar": "3",
      nausea: 4,
      preocupacao: "1",
      sonolencia: "0",
      tristeza: 1,
    },
  },
];

export const PPS: PPS[] = [
  {
    data: "22 de maio de 2024 02:30:00 UTC-3",
    pacienteId: "100200300400500",
    valor: 60,
  },
  {
    data: "23 de maio de 2024 03:30:00 UTC-3",
    pacienteId: "100200300400500",
    valor: 65,
  },
  {
    data: "24 de maio de 2024 04:30:00 UTC-3",
    pacienteId: "200300400500600",
    valor: 70,
  },
  {
    data: "25 de maio de 2024 05:30:00 UTC-3",
    pacienteId: "200300400500600",
    valor: 75,
  },
  {
    data: "26 de maio de 2024 06:30:00 UTC-3",
    pacienteId: "300400500600700",
    valor: 80,
  },
  {
    data: "27 de maio de 2024 07:30:00 UTC-3",
    pacienteId: "300400500600700",
    valor: 85,
  },
  {
    data: "28 de maio de 2024 08:30:00 UTC-3",
    pacienteId: "400500600700800",
    valor: 100,
  },
  {
    data: "29 de maio de 2024 09:30:00 UTC-3",
    pacienteId: "400500600700800",
    valor: 90,
  },
  {
    data: "30 de maio de 2024 10:30:00 UTC-3",
    pacienteId: "500600700800900",
    valor: 80,
  },
  {
    data: "31 de maio de 2024 11:30:00 UTC-3",
    pacienteId: "500600700800900",
    valor: 70,
  },
  {
    data: "1 de junho de 2024 12:30:00 UTC-3",
    pacienteId: "6007008009001000",
    valor: 60,
  },
  {
    data: "2 de junho de 2024 13:30:00 UTC-3",
    pacienteId: "6007008009001000",
    valor: 50,
  },
];
