// Portfolio content. Every entry is rendered by script.js, in the order listed here.
//
// Text fields accept either a plain string (same in both languages)
// or an object { es: "...", en: "..." }.
//
// Project entry:
//   { image, featured?, ribbon?, title, description: [paragraphs], tags: [...], note?, link? }
// Experience entry:
//   { date, title, description, tags }
// Education entry:
//   { title, detail }
// Skill group entry:
//   { title, tags }

window.PORTFOLIO = {

  // Label of the repository button shown on projects with a link
  linkLabel: { es: "Ver código en GitHub →", en: "View code on GitHub →" },

  // Featured and main projects
  projects: [
    {
      image: "assets/img/unir.svg",
      featured: true,
      ribbon: { es: "Proyecto actual", en: "Current project" },
      title: {
        es: "Pacientes virtuales con IA generativa para sesiones médicas simuladas (UNIR)",
        en: "Virtual patients with generative AI for simulated medical sessions (UNIR)"
      },
      description: [
        {
          es: "En los últimos meses he trabajado en asistentes virtuales basados en IA generativa que sirven para realizar sesiones médicas simuladas para la UNIR. El alumno se enfrenta a un paciente virtual con una patología concreta, conduce la consulta, hace las preguntas oportunas y debe llegar a un diagnóstico.",
          en: "In recent months I have worked on virtual assistants based on generative AI that run simulated medical sessions for UNIR. The student faces a virtual patient with a specific condition, conducts the consultation, asks the right questions and must reach a diagnosis."
        },
        {
          es: "El objetivo es que los estudiantes practiquen el trato con pacientes y el razonamiento clínico en un entorno seguro y repetible, con distintas patologías y casos.",
          en: "The goal is for students to practise patient interaction and clinical reasoning in a safe, repeatable environment, with different conditions and cases."
        }
      ],
      tags: ["LLMs", { es: "IA generativa", en: "Generative AI" }, "Python", "Django REST", "Docker"]
    },
    {
      image: "assets/img/tfm.svg",
      title: {
        es: "TFM: aumento de datos con GANs para la detección de cáncer de mama en imágenes térmicas",
        en: "Master's thesis: data augmentation with GANs for breast cancer detection in thermal images"
      },
      description: [
        {
          es: "Trabajo Fin de Máster (UNED, 2025) que estudia si una StyleGAN entrenada con solo 260 imágenes térmicas puede generar muestras útiles para mejorar un clasificador de cáncer de mama. El diseño experimental, pensado para evitar sesgos, incluyó 400 StyleGAN entrenadas, 5 configuraciones de aumento y validación cruzada 5-fold repetida 10 veces, con unos 16 días de cómputo en GPU.",
          en: "Master's thesis (UNED, 2025) studying whether a StyleGAN trained on just 260 thermal images can generate samples good enough to improve a breast cancer classifier. The experimental design, built to avoid bias, included 400 trained StyleGANs, 5 augmentation settings and 5-fold cross-validation repeated 10 times, with about 16 days of GPU compute."
        },
        {
          es: "Añadir en torno a un 50 % de imágenes sintéticas dio el mejor equilibrio (más recall y menos falsos negativos), aunque las mejoras son pequeñas y no bastan para afirmar que el método mejore la detección.",
          en: "Adding around 50 % synthetic images gave the best trade-off (higher recall and fewer false negatives), although the improvements are small and not enough to claim the method improves detection."
        }
      ],
      tags: ["StyleGAN", "PyTorch", "Deep Learning", { es: "Imagen médica", en: "Medical imaging" }, "Grad-CAM"],
      link: "https://github.com/rafaroman18/BreastCancerDL"
    },
    {
      image: "assets/img/estres.svg",
      title: {
        es: "Detección de estrés térmico con pulsera inteligente en entornos laborales extremos (FIDESOL)",
        en: "Heat stress detection with a smart wristband for extreme work environments (FIDESOL)"
      },
      description: [
        {
          es: "Prototipo desarrollado en FIDESOL de un sistema que detecta cuándo un trabajador sufre un golpe de calor. Entrené un modelo de Machine Learning basado en árboles de decisión para identificar el estrés térmico a partir de los datos de una pulsera inteligente.",
          en: "Prototype developed at FIDESOL of a system that detects when a worker is suffering heatstroke. I trained a Machine Learning model based on decision trees to identify heat stress from the data of a smart wristband."
        },
        {
          es: "Al detectarlo, se envía una alerta a una centralita que registra todas las incidencias, y la pulsera avisa de forma sonora y visual de que el trabajador debe descansar y avisar a su supervisor para que revise su estado.",
          en: "When it is detected, an alert is sent to a control center that logs every incident, and the wristband signals with sound and light that the worker must rest and notify their supervisor so that their condition can be checked."
        }
      ],
      tags: ["Machine Learning", { es: "Árboles de decisión", en: "Decision trees" }, "Wearables", { es: "Alertas en tiempo real", en: "Real-time alerts" }],
      note: "FIDESOL · 2025"
    },
    {
      image: "assets/img/fuego.svg",
      title: {
        es: "Predicción de incendios con Deep Learning y visualización en realidad virtual",
        en: "Fire prediction with Deep Learning and virtual reality visualization"
      },
      description: [
        {
          es: "Construcción de un modelo de Deep Learning con PyTorch capaz de predecir incendios y asignar un índice de riesgo a cada zona, que después puede visualizarse mediante un casco de realidad virtual. Para ello preparé y traté los datos con Python, Pandas y NumPy, trabajando con datos geográficos e históricos en formatos como .shp y .geoJSON.",
          en: "Built a Deep Learning model with PyTorch able to predict fires and assign a risk index to each zone, which can then be visualized with a virtual reality headset. The data was prepared and processed with Python, Pandas and NumPy, working with geographic and historical data in formats such as .shp and .geoJSON."
        }
      ],
      tags: ["PyTorch", "Pandas", "NumPy", { es: "Datos geoespaciales", en: "Geospatial data" }],
      note: "NASSAT · 2022"
    },
    {
      image: "assets/img/airbnb.svg",
      title: {
        es: "Clasificación y regresión de apartamentos Airbnb en Madrid",
        en: "Classification and regression of Airbnb apartments in Madrid"
      },
      description: [
        {
          es: "Con un conjunto de datos de Airbnb de la Comunidad de Madrid, clasifiqué el tipo de habitación de cada apartamento y predije su precio mediante regresión. El proyecto recorre todo el análisis y procesado de datos y compara el desempeño de distintos modelos: Naive Bayes, KNN, árboles de decisión y Support Vector Machines.",
          en: "Using an Airbnb dataset from the Community of Madrid, I classified the room type of each apartment and predicted its price through regression. The project covers the whole data analysis and processing workflow and compares the performance of several models: Naive Bayes, KNN, decision trees and Support Vector Machines."
        }
      ],
      tags: ["Scikit-Learn", "Pandas", "Matplotlib", "SVM", "KNN"],
      link: "https://github.com/rafaroman18/AIRBNB_ML"
    },
    {
      image: "assets/img/fidesol.svg",
      title: {
        es: "Investigación y despliegue de modelos de IA (FIDESOL)",
        en: "AI model research and deployment (FIDESOL)"
      },
      description: [
        {
          es: "Desarrollo de investigaciones en inteligencia artificial y diseño de modelos, incluyendo su evaluación y validación. Definición de arquitecturas de soluciones de IA y despliegue de modelos en backend con Python y Django REST Framework.",
          en: "AI research and model design, including evaluation and validation. Definition of AI solution architectures and model deployment in backend with Python and Django REST Framework."
        }
      ],
      tags: ["TensorFlow", "PyTorch", "Django", "Docker", "LLMs"]
    }
  ],

  // Secondary projects
  otherProjects: [
    {
      image: "assets/img/leapvr.svg",
      title: {
        es: "LeapVR: entorno virtual con fines didácticos para empresas",
        en: "LeapVR: virtual training environment for companies"
      },
      description: [
        {
          es: "Prototipo de realidad virtual para acciones didácticas, visualizable con Oculus Rift e interactivo sin mandos gracias a Leap Motion. Con Alexa se podían iniciar simulaciones e incluso añadir al momento objetos de una colección de modelos 3D de Internet.",
          en: "Virtual reality prototype for training activities, viewable with Oculus Rift and interactive without controllers thanks to Leap Motion. With Alexa, simulations could be started and objects from a collection of 3D models found online could even be added on the fly."
        }
      ],
      tags: [{ es: "Realidad virtual", en: "Virtual reality" }, "Leap Motion", "Alexa"],
      link: "https://github.com/rafaroman18/LeapVR"
    },
    {
      image: "assets/img/bot.svg",
      title: {
        es: "TorrentRaspBot: bot de Telegram en una Raspberry",
        en: "TorrentRaspBot: Telegram bot on a Raspberry Pi"
      },
      description: [
        {
          es: "Bot que descarga cualquier enlace o torrent (enlaces magnéticos o archivos .torrent) enviado por Telegram con un comando como /download, muestra el progreso de la descarga y sube los archivos a Google Drive. Nació para uso personal, pero varios usuarios mostraron interés.",
          en: "Bot that downloads any link or torrent (magnet links or .torrent files) sent through Telegram with a command such as /download, shows the download progress and uploads the files to Google Drive. It started as a personal tool, but several users showed interest."
        }
      ],
      tags: ["Python", "Telegram", "Raspberry Pi", "Google Drive"],
      link: "https://github.com/rafaroman18/TorrentRaspBot"
    }
  ],

  // Professional experience, most recent first
  experience: [
    {
      date: { es: "Dic. 2024 – actualidad · Granada", en: "Dec. 2024 – present · Granada" },
      title: "Data Scientist · FIDESOL",
      description: {
        es: "Investigación en IA, diseño y validación de modelos, y despliegue en backend con Python y Django REST Framework.",
        en: "AI research, model design and validation, and backend deployment with Python and Django REST Framework."
      },
      tags: ["Python", "Django", "Docker", "TensorFlow", "PyTorch", "LLMs"]
    },
    {
      date: { es: "Ago. 2022 – dic. 2024 · Sevilla", en: "Aug. 2022 – Dec. 2024 · Seville" },
      title: "PLSQL Developer · Minsait",
      description: {
        es: "Mantenimiento y desarrollo de los procesos que alimentan las bases de datos de un cliente bancario, con grandes volúmenes de datos, y corrección de incidencias.",
        en: "Maintenance and development of the processes that feed the databases of a banking client, with large data volumes, and incident resolution."
      },
      tags: ["Powercenter", "QLIK", "OBIEE", "SQL Server", "Oracle", "Teradata"]
    },
    {
      date: { es: "Mar. 2022 – abr. 2022 · Mijas", en: "Mar. 2022 – Apr. 2022 · Mijas" },
      title: "Data Scientist · NASSAT",
      description: {
        es: "Modelo de Deep Learning para la predicción de incendios con visualización en realidad virtual.",
        en: "Deep Learning model for fire prediction with virtual reality visualization."
      },
      tags: ["Python", "PyTorch", "Pandas", "NumPy"]
    },
    {
      date: { es: "Abr. 2021 – mar. 2022 · Sevilla", en: "Apr. 2021 – Mar. 2022 · Seville" },
      title: "DevOps Developer · Sopra Steria",
      description: {
        es: "Gestión de bases de datos, despliegue de webs con Docker y monitorización de scripts con OpenShift para un cliente andaluz.",
        en: "Database management, website deployment with Docker and script monitoring with OpenShift for an Andalusian client."
      },
      tags: ["Java", "Python", "Docker", "ElasticSearch"]
    }
  ],

  // Education and certifications
  education: [
    {
      title: { es: "Máster en Ingeniería y Ciencia de Datos", en: "Master's in Data Engineering and Science" },
      detail: "UNED (2022 – 2026)"
    },
    {
      title: {
        es: "Grado en Ingeniería Informática, rama de Computación",
        en: "Bachelor's in Computer Engineering, Computing track"
      },
      detail: {
        es: "Universidad de Cádiz (2016 – 2021), nota media 7,1",
        en: "University of Cádiz (2016 – 2021), average grade 7.1"
      }
    },
    { title: "UiPath RPA Associate", detail: "2021" },
    { title: "B2 First (FCE)", detail: "Cambridge" }
  ],

  // Skill groups
  skills: [
    {
      title: { es: "IA y ML", en: "AI and ML" },
      tags: ["Deep Learning", "Machine Learning", "LLMs", "GANs", "PyTorch", "TensorFlow", "Keras", "Scikit-Learn"]
    },
    {
      title: { es: "Datos", en: "Data" },
      tags: ["Python", "Pandas", "Matplotlib", "ETL", "Spark", "Hadoop", { es: "Visualización", en: "Visualization" }]
    },
    {
      title: { es: "Bases de datos", en: "Databases" },
      tags: ["SQL", "Oracle", "Teradata", "SQL Server", "MongoDB", "ElasticSearch"]
    },
    {
      title: { es: "Cloud y herramientas", en: "Cloud and tools" },
      tags: ["AWS", "GCP", "Azure", "Docker", "Git", "Agile"]
    },
    {
      title: { es: "Otros", en: "Other" },
      tags: ["C#", "Java", { es: "Español nativo", en: "Native Spanish" }, { es: "Inglés B2", en: "English B2" }]
    }
  ]
};
