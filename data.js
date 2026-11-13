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
// Publication entry:
//   { title, authors: [names], venue, description?, link?, linkLabel? }

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
          es: "Asistentes virtuales con IA generativa para sesiones médicas simuladas de la UNIR: el alumno conduce la consulta con un paciente virtual con una patología concreta y debe llegar a un diagnóstico. Los pacientes son avatares 3D en Unity con voz realista de ElevenLabs, para practicar el trato con pacientes y el razonamiento clínico en un entorno seguro y repetible.",
          en: "Generative AI virtual assistants for simulated medical sessions at UNIR: the student conducts the consultation with a virtual patient with a specific condition and must reach a diagnosis. The patients are 3D avatars built in Unity with realistic ElevenLabs voices, to practise patient interaction and clinical reasoning in a safe, repeatable environment."
        }
      ],
      tags: [{ es: "IA generativa", en: "Generative AI" }, { es: "Avatares 3D", en: "3D avatars" }, "ElevenLabs", "Python", "Azure DevOps"],
      note: "FIDESOL · 2026"
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
      tags: ["StyleGAN", "PyTorch", "Python", "Deep Learning", { es: "Aumento de datos", en: "Data augmentation" }, "Grad-CAM"],
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
        },
        {
          es: "Dentro del mismo prototipo se desarrolló además un modelo text-to-SQL para que los trabajadores de la empresa consulten información de forma fluida y sencilla sin necesidad de conocer SQL.",
          en: "The same prototype also included a text-to-SQL model so the company's workers can query information smoothly and easily without knowing SQL."
        }
      ],
      tags: [{ es: "Árboles de decisión", en: "Decision trees" }, "Python", "Wearables", "Text-to-SQL", "LLMs"],
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
      tags: ["LSTM", { es: "Regresión", en: "Regression" }, { es: "Series temporales", en: "Time series" }, "Python", { es: "Limpieza de datos", en: "Data cleaning" }],
      note: "FIDESOL · 2025"
    },
    {
      image: "assets/img/smartcrops.svg",
      title: {
        es: "SmartCrops: portal de agricultura inteligente con gemelo digital y detección de plagas (FIDESOL)",
        en: "SmartCrops: smart farming portal with a digital twin and pest detection (FIDESOL)"
      },
      description: [
        {
          es: "Portal en el que los usuarios consultan información sobre su parcela. A partir de imágenes de satélite y datos meteorológicos, de suelo y de agua, genera alertas ante posibles situaciones, predice la producción de oliva y las zonas más fértiles, e incorpora un gemelo digital de la parcela.",
          en: "Portal where users consult information about their plot of land. Using satellite imagery and weather, soil and water data, it generates alerts for potential situations, predicts olive production and the most fertile zones, and includes a digital twin of the plot."
        },
        {
          es: "Un apartado de plagas utiliza un modelo YOLO de visión por computador para revisar el nivel de insectos y parásitos en los cultivos y alertar cuando se supera un umbral crítico. Mi trabajo se centró en la investigación de datos satelitales (sobre todo infrarrojos) junto con índices de suelo y erosión, y en el entrenamiento y test del modelo YOLO.",
          en: "A pest section uses a YOLO computer vision model to check the level of insects and parasites in the crops and alert when a critical threshold is exceeded. My work focused on researching satellite data (mainly infrared) together with soil and erosion indices, and on training and testing the YOLO model."
        }
      ],
      tags: ["YOLO", "Python", { es: "Visión artificial", en: "Computer vision" }, { es: "Datos satelitales", en: "Satellite imagery" }, { es: "Gemelo digital", en: "Digital twin" }],
      note: "FIDESOL · 2024"
    }
  ],

  // Secondary projects
  otherProjects: [
    {
      image: "assets/img/fuego.svg",
      title: {
        es: "Predicción de incendios con Deep Learning y realidad virtual",
        en: "Fire prediction with Deep Learning and virtual reality"
      },
      description: [
        {
          es: "Modelo de Deep Learning con PyTorch que predice incendios y asigna un índice de riesgo a cada zona, visualizable en un casco de realidad virtual. Se contemplaba un modelo espaciotemporal como ConvLSTM.",
          en: "Deep Learning model built with PyTorch that predicts fires and assigns a risk index to each zone, viewable in a virtual reality headset. A spatiotemporal model such as ConvLSTM was under consideration."
        }
      ],
      tags: ["Deep Learning", "PyTorch", "Python", "Pandas", { es: "Datos geoespaciales", en: "Geospatial data" }],
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
          es: "Proyecto personal para estudiar el mercado de la vivienda: clasificación del tipo de habitación y predicción del precio, comparando Naive Bayes, KNN, árboles de decisión y SVM.",
          en: "Personal project to study the housing market: room type classification and price prediction, comparing Naive Bayes, KNN, decision trees and SVM."
        }
      ],
      tags: ["Machine Learning", { es: "Clasificación", en: "Classification" }, { es: "Regresión", en: "Regression" }, "Scikit-Learn", "Python"],
      link: "https://github.com/rafaroman18/AIRBNB_ML"
    },
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
      tags: [{ es: "Realidad virtual", en: "Virtual reality" }, "Unity", "C#", "Leap Motion", "Alexa"],
      link: "https://github.com/rafaroman18/LeapVR"
    },
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

  // Name highlighted in bold inside author lists
  authorName: "Rafael Román",

  // Publications, most recent first
  publications: [
    {
      title: {
        es: "RITA: Metodología para evaluación de respuestas inteligentes aplicando taxonomías de alucinaciones",
        en: "RITA: A methodology for evaluating intelligent responses using hallucination taxonomies"
      },
      authors: ["Laura Vigoya", "Celia Fernández Rosales", "Carmen Alba Jiménez", "Rafael Román", "Rubén Morillas"],
      venue: {
        es: "Actas de las X Jornadas Nacionales de Investigación en Ciberseguridad (JNIC), Universidad de Zaragoza, pp. 591–595, 2025",
        en: "Proceedings of the X National Cybersecurity Research Conference (JNIC), University of Zaragoza, pp. 591–595, 2025"
      },
      description: {
        es: "Trabajo de investigación original realizado en FIDESOL: una metodología para evaluar las respuestas de los LLMs mediante una taxonomía de alucinaciones (de hecho y de fidelidad), validada con GPT-4o-mini, Gemini y DeepSeek. GPT-4o-mini fue el más consistente, con menos de un 39 % de alucinaciones.",
        en: "Original research carried out at FIDESOL: a methodology to evaluate LLM responses through a hallucination taxonomy (factuality and faithfulness), validated with GPT-4o-mini, Gemini and DeepSeek. GPT-4o-mini was the most consistent, with under 39 % hallucinations."
      },
      link: "https://zaguan.unizar.es/record/161724/files/BOOK-2025-377.pdf#page=613",
      linkLabel: { es: "Ver artículo (PDF) →", en: "View paper (PDF) →" }
    }
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
