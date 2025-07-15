const ramos = [
  // 1er año - semestre 1
  { nombre: "Química General", id: "quimica", semestre: 1, prerequisitos: [] },
  { nombre: "Biología", id: "biologia", semestre: 1, prerequisitos: [] },
  { nombre: "Anatomía", id: "anatomia", semestre: 1, prerequisitos: [] },
  { nombre: "Introducción a la Enfermería I", id: "intro_enf1", semestre: 1, prerequisitos: [] },
  { nombre: "Taller de Desarrollo Integral", id: "taller_desarro", semestre: 1, prerequisitos: [] },
  { nombre: "Sociología", id: "sociologia", semestre: 1, prerequisitos: [] },
  { nombre: "Inglés I", id: "ingles1", semestre: 1, prerequisitos: [] },

  // 1er año - semestre 2
  { nombre: "Bioquímica", id: "bioquimica", semestre: 2, prerequisitos: ["quimica"] },
  { nombre: "Agentes Biológicos en Salud-Enfermedad", id: "agentes_bio", semestre: 2, prerequisitos: ["biologia"] },
  { nombre: "Fisiología", id: "fisiologia", semestre: 2, prerequisitos: ["biologia", "anatomia"] },
  { nombre: "Introducción a la Enfermería II", id: "intro_enf2", semestre: 2, prerequisitos: ["intro_enf1"] },
  { nombre: "Histología", id: "histologia", semestre: 2, prerequisitos: [] },
  { nombre: "Taller de Relaciones Humanas", id: "taller_rel", semestre: 2, prerequisitos: [] },
  { nombre: "Inglés II", id: "ingles2", semestre: 2, prerequisitos: ["ingles1"] },

  // 2do año - semestre 3
  { nombre: "Farmacología", id: "farmacologia", semestre: 3, prerequisitos: ["bioquimica", "fisiologia"] },
  { nombre: "Fisiopatología", id: "fisiopatologia", semestre: 3, prerequisitos: ["fisiologia"] },
  { nombre: "Proceso de Atención y Cuidados Básicos de Enfermería I", id: "cuidados1", semestre: 3, prerequisitos: ["intro_enf2"] },
  { nombre: "Metodología de la Investigación I", id: "investigacion1", semestre: 3, prerequisitos: [] },
  { nombre: "Educación para la Salud", id: "educacion_salud", semestre: 3, prerequisitos: [] },
  { nombre: "Electivo I", id: "electivo1", semestre: 3, prerequisitos: [] },
  { nombre: "Inglés III", id: "ingles3", semestre: 3, prerequisitos: ["ingles2"] },

  // 2do año - semestre 4
  { nombre: "Introducción a la Enfermería en Salud Mental", id: "enf_mental_intro", semestre: 4, prerequisitos: ["cuidados1"] },
  { nombre: "Salud Pública", id: "salud_publica", semestre: 4, prerequisitos: [] },
  { nombre: "Proceso de Atención y Cuidados Básicos de Enfermería II", id: "cuidados2", semestre: 4, prerequisitos: ["cuidados1"] },
  { nombre: "Introducción a la Enfermería Comunitaria y Salud Familiar", id: "comunitaria_intro", semestre: 4, prerequisitos: ["cuidados1"] },
  { nombre: "Administración en Enfermería", id: "admin_enf", semestre: 4, prerequisitos: [] },
  { nombre: "Metodología de la Investigación II", id: "investigacion2", semestre: 4, prerequisitos: ["investigacion1"] },
  { nombre: "Electivo II", id: "electivo2", semestre: 4, prerequisitos: [] },
  { nombre: "Inglés IV", id: "ingles4", semestre: 4, prerequisitos: ["ingles3"] },

  // 3er año - semestre 5
  { nombre: "Gestión del Cuidado del Adulto y Adulto Mayor I", id: "adulto1", semestre: 5, prerequisitos: ["cuidados2"] },
  { nombre: "Enfermería Comunitaria y Salud Familiar I", id: "comunitaria1", semestre: 5, prerequisitos: ["comunitaria_intro"] },
  { nombre: "Gestión en Enfermería", id: "gestion_enf", semestre: 5, prerequisitos: ["admin_enf"] },
  { nombre: "Investigación en Enfermería I", id: "investigacion_enf1", semestre: 5, prerequisitos: ["investigacion2"] },
  { nombre: "Electivo III", id: "electivo3", semestre: 5, prerequisitos: [] },

  // 3er año - semestre 6
  { nombre: "Gestión del Cuidado del Adulto y Adulto Mayor II", id: "adulto2", semestre: 6, prerequisitos: ["adulto1"] },
  { nombre: "Enfermería Comunitaria y Salud Familiar II", id: "comunitaria2", semestre: 6, prerequisitos: ["comunitaria1"] },
  { nombre: "Gestión del Cuidado en Salud Mental", id: "salud_mental", semestre: 6, prerequisitos: ["enf_mental_intro"] },
  { nombre: "Género, Cultura y Sexualidad", id: "genero", semestre: 6, prerequisitos: [] },
  { nombre: "Investigación en Enfermería II", id: "investigacion_enf2", semestre: 6, prerequisitos: ["investigacion_enf1"] },

  // 4to año - semestre 7
  { nombre: "Gestión del Cuidado del Adulto y Adulto Mayor III", id: "adulto3", semestre: 7, prerequisitos: ["adulto2"] },
  { nombre: "Enfermería Comunitaria y Salud Familiar III", id: "comunitaria3", semestre: 7, prerequisitos: ["comunitaria2"] },
  { nombre: "Gestión del Cuidado en Niños y Adolescentes I", id: "ninos1", semestre: 7, prerequisitos: ["cuidados2"] },
  { nombre: "Gerencia en Enfermería", id: "gerencia", semestre: 7, prerequisitos: ["gestion_enf"] },
  { nombre: "Proyecto de Seminario de Grado", id: "proyecto", semestre: 7, prerequisitos: ["investigacion_enf2"] },

  // 4to año - semestre 8
  { nombre: "Enfermería en Urgencias", id: "urgencias", semestre: 8, prerequisitos: ["cuidados2"] },
  { nombre: "Gestión del Cuidado en Niños y Adolescentes II", id: "ninos2", semestre: 8, prerequisitos: ["ninos1"] },
  { nombre: "Formulación de Proyectos en Gestión y Gerencia", id: "formulacion_proy", semestre: 8, prerequisitos: ["gerencia"] },
  { nombre: "Seminario de Grado", id: "seminario", semestre: 8, prerequisitos: ["proyecto"] },

  // 5to año - semestre 9
  { nombre: "Internado Enfermería del Adulto", id: "internado_adulto", semestre: 9, prerequisitos: ["adulto3"] },
  { nombre: "Internado Enfermería del Niño y Adolescente", id: "internado_nino", semestre: 9, prerequisitos: ["ninos2"] },
  { nombre: "Internado Enfermería Comunitaria", id: "internado_comunitaria", semestre: 9, prerequisitos: ["comunitaria3"] },

  // 5to año - semestre 10
  // (Asumimos que se distribuyen los mismos internados en el semestre 10 si no se completaron antes)
];
