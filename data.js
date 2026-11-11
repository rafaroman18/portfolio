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
      tags: ["LLMs", { es: "IA generativa", en: "Generative AI" }, "Python", "Django REST", "Docker", "Azure Machine Learning"]
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
      image: "assets/img/autobus.svg",
      title: {
        es: "Predicción de afluencia de viajeros para una empresa de autobuses (FIDESOL)",
        en: "Passenger demand forecasting for a bus company (FIDESOL)"
      },
      description: [
        {
          es: "Proyecto en FIDESOL cuyo objetivo era construir un modelo predictivo de la afluencia de personas según el día, para que una empresa de autobuses supiera de antemano qué días debía poner autobuses de refuerzo. Se desarrollaron dos modelos, una red LSTM y una regresión, siendo la LSTM la que arrojó claramente mejores resultados.",
          en: "FIDESOL project aimed at building a predictive model of passenger volume by day, so that a bus company would know in advance which days it needed to run extra buses. Two models were developed, an LSTM network and a regression, with the LSTM clearly delivering the better results."
        },
        {
          es: "Además se montó un sistema que almacena en una base de datos la información de los autobuses y las predicciones, y que permite al cliente reentrenar los modelos para afinar su conocimiento. Mis tareas fueron el estudio y la limpieza de los datos y el diseño de los modelos.",
          en: "A system was also set up to store the bus data and the predictions in a database, letting the client retrain the models to refine them. My tasks were the study and cleaning of the data and the design of the models."
        }
      ],
      tags: ["LSTM", { es: "Regresión", en: "Regression" }, { es: "Series temporales", en: "Time series" }, "Python", { es: "Base de datos", en: "Database" }],
      note: "FIDESOL"
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
        },
        {
          es: "Con la perspectiva actual, un modelo espaciotemporal como ConvLSTM, que combina la información geográfica de cada zona con su evolución en el tiempo, habría sido más apropiado, con un modelo de gradient boosting (XGBoost) como línea base.",
          en: "In hindsight, a spatiotemporal model such as ConvLSTM, which combines the geographic information of each zone with its evolution over time, would have been more appropriate, with a gradient boosting model (XGBoost) as a baseline."
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
          es: "Proyecto personal para estudiar el mercado de la vivienda. Con un conjunto de datos de Airbnb de la Comunidad de Madrid, clasifiqué el tipo de habitación de cada apartamento y predije su precio mediante regresión. El proyecto recorre todo el análisis y procesado de datos y compara el desempeño de distintos modelos: Naive Bayes, KNN, árboles de decisión y Support Vector Machines.",
          en: "Personal project to study the housing market. Using an Airbnb dataset from the Community of Madrid, I classified the room type of each apartment and predicted its price through regression. The project covers the whole data analysis and processing workflow and compares the performance of several models: Naive Bayes, KNN, decision trees and Support Vector Machines."
        }
      ],
      tags: ["Scikit-Learn", "Pandas", "Matplotlib", "SVM", "KNN", "Python"],
      link: "https://github.com/rafaroman18/AIRBNB_ML"
    },
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
    {
      title: { es: "ChatGPT e Inteligencia Artificial", en: "ChatGPT and Artificial Intelligence" },
      detail: { es: "Fundae (sept. 2026) · LangChain y desarrollo de IA generativa", en: "Fundae (Sep. 2026) · LangChain and generative AI development" }
    },
    {
      title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
      detail: { es: "Udemy (mar. 2026) · Ciencia de datos y Python", en: "Udemy (Mar. 2026) · Data science and Python" }
    },
    { title: "UiPath RPA Associate", detail: "2021" },
    { title: "B2 First (FCE)", detail: "Cambridge" }
  ],

  // Skill groups
  skills: [
    {
      title: { es: "IA y ML", en: "AI and ML" },
      tags: ["Deep Learning", "Machine Learning", "LLMs", "LangChain", "GANs", "PyTorch", "TensorFlow", "Keras", "Scikit-Learn"]
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
