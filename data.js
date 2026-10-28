/* Contenido de práctica. Para agregar el Módulo 2: copia el bloque del Módulo 1 dentro de SECTIONS y cambia id, títulos y temas. */
window.SECTIONS = [
{
  id: "intro", title: "Presentación", sub: "Para abrir y cerrar la reunión", tag: "Inicio",
  topics: [
    { id: "open", title: "Abrir la reunión", items: [
      { en: "Good afternoon, everyone. Welcome to our weekly meeting for MAI 630, Computer Vision.", es: "Buenas tardes a todos. Bienvenidos a nuestra reunión semanal de MAI 630, Computer Vision." },
      { en: "Thank you for being here. I will wait one or two more minutes for others to join.", es: "Gracias por estar aquí. Espero uno o dos minutos más a que entren los demás." },
      { en: "Okay, let's start. Can everyone hear me well?", es: "Bueno, empecemos. ¿Todos me escuchan bien?" },
      { en: "This meeting is for your questions. There are no bad questions, so please ask anything.", es: "Esta reunión es para sus preguntas. No hay preguntas malas, así que pregunten lo que sea." },
      { en: "You can speak, or you can write your question in the chat.", es: "Pueden hablar, o pueden escribir su pregunta en el chat." }
    ]},
    { id: "notice", title: "Aviso de grabación e IA", items: [
      { en: "Before we start, this meeting is recorded, so you can watch it again later.", es: "Antes de empezar, esta reunión se graba, para que puedan verla otra vez después." },
      { en: "I also use Zoom's AI assistant to help me with notes and to keep track of your questions.", es: "También uso el asistente de IA de Zoom para ayudarme con las notas y llevar control de sus preguntas." },
      { en: "If you do not want to appear in the recording, you can turn off your camera and use the chat.", es: "Si no quieren salir en la grabación, pueden apagar su cámara y usar el chat." }
    ]},
    { id: "about", title: "Presentarme", items: [
      { en: "My name is Kevin García, and I am your professor for this course.", es: "Mi nombre es Kevin García y soy su profesor en este curso." },
      { en: "In this course, each of you will build your own object detector, step by step.", es: "En este curso, cada uno de ustedes va a construir su propio detector de objetos, paso a paso." },
      { en: "English is not my first language, so if I say something that is not clear, please tell me.", es: "El inglés no es mi primer idioma, así que si digo algo que no se entiende, por favor díganme." },
      { en: "I will speak slowly, and I will write important things in the chat.", es: "Voy a hablar despacio y voy a escribir lo importante en el chat." }
    ]},
    { id: "agenda", title: "Plan de la reunión", items: [
      { en: "Today I want to do three things. First, a short review. Second, your questions. Third, what comes next.", es: "Hoy quiero hacer tres cosas. Primero, un repaso corto. Segundo, sus preguntas. Tercero, lo que viene." },
      { en: "Let's start with a quick review of this week's class.", es: "Empecemos con un repaso rápido de la clase de esta semana." },
      { en: "How is everyone doing with the assignments? Did anyone start already?", es: "¿Cómo van con las tareas? ¿Alguien ya empezó?" },
      { en: "Who installed the environment already? You can answer in the chat.", es: "¿Quién ya instaló el entorno? Pueden responder en el chat." }
    ]},
    { id: "close", title: "Cerrar la reunión", items: [
      { en: "We are almost out of time. Is there one last question?", es: "Ya casi se nos acaba el tiempo. ¿Hay una última pregunta?" },
      { en: "Remember, both assignments are due on Sunday at 11:59 PM.", es: "Recuerden, las dos tareas cierran el domingo a las 11:59 PM." },
      { en: "If you have more questions, please post them in the course forum. I answer within 48 hours.", es: "Si tienen más preguntas, publíquenlas en el foro del curso. Respondo en menos de 48 horas." },
      { en: "Thank you very much for coming. Have a great week, and see you next time.", es: "Muchas gracias por venir. Que tengan una excelente semana, y nos vemos la próxima." }
    ]}
  ]
},
{
  id: "quick", title: "Frases rápidas", sub: "Para cualquier momento", tag: "Siempre",
  topics: [
    { id: "repeat", title: "No entendí", items: [
      { en: "Sorry, could you repeat that, please?", es: "Perdón, ¿puedes repetirlo, por favor?" },
      { en: "Could you say it a little more slowly, please?", es: "¿Puedes decirlo un poco más despacio, por favor?" },
      { en: "Could you write your question in the chat? That way I can answer it well.", es: "¿Puedes escribir tu pregunta en el chat? Así la puedo responder bien." },
      { en: "Your audio is not very clear. Could you try again?", es: "Tu audio no se escucha muy claro. ¿Puedes intentar otra vez?" },
      { en: "Let me make sure I understand. You are asking about…", es: "Déjame asegurarme de que entiendo. Me preguntas sobre…" },
      { en: "Do you mean Assignment 1.1 or Assignment 1.2?", es: "¿Te refieres a la Tarea 1.1 o a la Tarea 1.2?" }
    ]},
    { id: "time", title: "Ganar tiempo", items: [
      { en: "That is a good question. Let me think for a second.", es: "Buena pregunta. Déjame pensar un segundo." },
      { en: "Give me one moment, I will check that.", es: "Dame un momento, lo reviso." },
      { en: "Let me open the file so we can look at it together.", es: "Déjame abrir el archivo para verlo juntos." },
      { en: "Good point. Let me explain it with an example.", es: "Buen punto. Déjame explicarlo con un ejemplo." }
    ]},
    { id: "check", title: "Confirmar que entendieron", items: [
      { en: "Is that clear? Does it make sense?", es: "¿Está claro? ¿Tiene sentido?" },
      { en: "Did that answer your question?", es: "¿Eso respondió tu pregunta?" },
      { en: "Any other questions about this topic?", es: "¿Alguna otra pregunta sobre este tema?" },
      { en: "If it is still not clear, tell me, and I will explain it in a different way.", es: "Si todavía no está claro, díganme y lo explico de otra forma." }
    ]},
    { id: "later", title: "Lo reviso y te respondo", items: [
      { en: "I am not sure right now. I will check and answer you in the forum.", es: "No estoy seguro ahora mismo. Lo reviso y te respondo en el foro." },
      { en: "Let me confirm that, and I will send you the answer after the meeting.", es: "Déjame confirmarlo y te mando la respuesta después de la reunión." },
      { en: "That is a specific case. Can you send me a screenshot of the error in the forum?", es: "Ese es un caso específico. ¿Me mandas una captura del error en el foro?" },
      { en: "Please also send the output of python check_setup.py. It helps me a lot.", es: "Por favor manda también el resultado de python check_setup.py. Me ayuda mucho.", pron: "check_setup (chek SÉ-tap)" }
    ]},
    { id: "zoom", title: "Problemas en Zoom", items: [
      { en: "I think you are muted. Please turn on your microphone.", es: "Creo que estás en silencio. Por favor activa tu micrófono." },
      { en: "Can you see my screen now?", es: "¿Ya ven mi pantalla?" },
      { en: "I will share my screen to show you.", es: "Voy a compartir mi pantalla para mostrarles." },
      { en: "Sorry, my internet is a little slow today.", es: "Perdón, mi internet está un poco lento hoy." },
      { en: "You can share your screen so I can see the error.", es: "Puedes compartir tu pantalla para que vea el error." }
    ]},
    { id: "cheer", title: "Animar y felicitar", items: [
      { en: "Great question. I am sure other students have the same question.", es: "Excelente pregunta. Seguro otros estudiantes tienen la misma duda." },
      { en: "Very good. That is exactly the idea.", es: "Muy bien. Esa es exactamente la idea." },
      { en: "Don't worry. This error is very common, and it is easy to fix.", es: "No te preocupes. Este error es muy común y es fácil de arreglar." },
      { en: "You are on the right track. Keep going.", es: "Vas por buen camino. Sigue así." }
    ]},
    { id: "redirect", title: "Redirigir", items: [
      { en: "That topic is for Module 2, so we will see it next week.", es: "Ese tema es del Módulo 2, así que lo vemos la próxima semana." },
      { en: "That is a great idea, but it is not required for this assignment.", es: "Es una gran idea, pero no es necesaria para esta tarea." },
      { en: "Let's talk about your case after the meeting, so we have time for everyone.", es: "Hablemos de tu caso después de la reunión, así tenemos tiempo para todos." },
      { en: "Let's move on to the next question.", es: "Pasemos a la siguiente pregunta." }
    ]}
  ]
},
{
  id: "m1", title: "Módulo 1", sub: "Classical Computer Vision", tag: "Módulo",
  topics: [
    { id: "dates", title: "Fechas y entregas", items: [
      { q: "When are the assignments due?", qes: "¿Cuándo vencen las tareas?", en: "Both assignments, 1.1 and 1.2, are due on Sunday, November 1st, at 11:59 PM, in Moodle.", es: "Las dos tareas, 1.1 y 1.2, vencen el domingo 1 de noviembre a las 11:59 PM, en Moodle." },
      { q: "What do I need to upload?", qes: "¿Qué tengo que subir?", en: "Two things. In the online text, the link to your GitHub repository. And one file, the HTML or PDF export of your notebook.", es: "Dos cosas. En el texto en línea, el enlace a tu repositorio de GitHub. Y un archivo, la exportación HTML o PDF de tu notebook." },
      { q: "How do I name the file?", qes: "¿Cómo nombro el archivo?", en: "A1_1, then your last name, your first name, and MAI630. For example: A1_1_Garcia_Kevin_MAI630.html. For the second assignment, use A1_2.", es: "A1_1, luego tu apellido, tu nombre y MAI630. Por ejemplo: A1_1_Garcia_Kevin_MAI630.html. Para la segunda tarea, usa A1_2." },
      { q: "Do I upload the .ipynb or my photos?", qes: "¿Subo el .ipynb o mis fotos?", en: "No. Do not upload the notebook file, your photos, a zip, or screenshots. I read your code and your log from GitHub.", es: "No. No subas el archivo del notebook, ni tus fotos, ni un zip, ni capturas. Tu código y tu log los leo desde GitHub." },
      { q: "What happens if I submit late?", qes: "¿Qué pasa si entrego tarde?", en: "Late work loses 20 percent of the score. And remember, submitting on time is what counts as your attendance.", es: "Lo que se entrega tarde pierde el 20 por ciento de la nota. Y recuerden, entregar a tiempo es lo que cuenta como asistencia." },
      { q: "Is it one notebook or two?", qes: "¿Es un notebook o dos?", en: "It is one notebook. Part A is Assignment 1.1, and Part B is Assignment 1.2. You export it twice, once for each assignment.", es: "Es un solo notebook. La parte A es la Tarea 1.1 y la parte B es la Tarea 1.2. Lo exportas dos veces, una para cada tarea." }
    ]},
    { id: "setup", title: "Instalación", items: [
      { q: "Which Python version do I need?", qes: "¿Qué versión de Python necesito?", en: "Python 3.12. Please do not use 3.13, because PyTorch is not available for it on some computers.", es: "Python 3.12. Por favor no usen la 3.13, porque PyTorch no está disponible para esa versión en algunas computadoras.", pron: "PyTorch (PÁI-torch)" },
      { q: "The installation looks frozen.", qes: "La instalación parece congelada.", en: "You probably installed the libraries one by one. Stop it with Control C, delete the .venv folder, and install again with pip install -r requirements.txt.", es: "Probablemente instalaste las librerías una por una. Detenla con Control C, borra la carpeta .venv e instala otra vez con pip install -r requirements.txt.", pron: "requirements (ri-KUÁIR-ments) · libraries (LÁI-bre-ris)" },
      { q: "How long does it take?", qes: "¿Cuánto tarda?", en: "About 10 minutes. It downloads about 420 megabytes, and you need 2 gigabytes free on your disk. You only do it once.", es: "Unos 10 minutos. Descarga unos 420 megabytes y necesitas 2 gigabytes libres en el disco. Solo se hace una vez." },
      { q: "The notebook says FileNotFoundError.", qes: "El notebook dice FileNotFoundError.", en: "Jupyter is using an old kernel. Run the command that registers the kernel again, and choose Python mai630 at the top right of the notebook.", es: "Jupyter está usando un kernel viejo. Corre otra vez el comando que registra el kernel y elige Python mai630 arriba a la derecha del notebook.", pron: "kernel (KÉR-nel) · Jupyter (YÚ-pi-ter)" },
      { q: "Windows says running scripts is disabled.", qes: "Windows dice que los scripts están deshabilitados.", en: "That is a PowerShell setting. Run the Set-ExecutionPolicy line from the guide, and then activate the environment again.", es: "Es una configuración de PowerShell. Corre la línea Set-ExecutionPolicy de la guía y luego activa el entorno otra vez.", pron: "environment (en-VÁI-ron-ment)" },
      { q: "My computer is old. What can I do?", qes: "Mi computadora es vieja. ¿Qué hago?", en: "You can use Google Colab. It is free. But Colab deletes your files when the session ends, so download your notebook often.", es: "Puedes usar Google Colab. Es gratis. Pero Colab borra tus archivos cuando termina la sesión, así que descarga tu notebook seguido.", pron: "Colab (KÓU-lab)" }
    ]},
    { id: "claude", title: "Claude Code y CLAUDE.md", items: [
      { q: "Can Claude Code write my code?", qes: "¿Claude Code puede escribir mi código?", en: "Yes, that is how we work in this course. But the observations and the sentences in your notebook must be yours, in your own words.", es: "Sí, así trabajamos en este curso. Pero las observaciones y las frases de tu notebook tienen que ser tuyas, con tus propias palabras." },
      { q: "What is the five-step cycle?", qes: "¿Cuál es el ciclo de cinco pasos?", en: "You explain what you need. Claude proposes a plan. You review and approve it. Claude writes and runs the code. And you verify the result.", es: "Tú explicas lo que necesitas. Claude propone un plan. Tú lo revisas y lo apruebas. Claude escribe y corre el código. Y tú verificas el resultado." },
      { q: "What is CLAUDE.md for?", qes: "¿Para qué sirve CLAUDE.md?", en: "It is the memory of the project. Claude reads it at the start of every session, so you do not repeat the same rules every time.", es: "Es la memoria del proyecto. Claude lo lee al inicio de cada sesión, así no repites las mismas reglas cada vez." },
      { q: "How do I check that Claude reads it?", qes: "¿Cómo compruebo que Claude lo lee?", en: "Inside Claude Code, type /context. CLAUDE.md should appear in the list of memory files.", es: "Dentro de Claude Code escribe /context. CLAUDE.md debe aparecer en la lista de archivos de memoria." },
      { q: "Claude is waiting and nothing happens.", qes: "Claude está esperando y no pasa nada.", en: "It is waiting for your approval. Read the plan or the command, and choose Yes if you agree.", es: "Está esperando tu aprobación. Lee el plan o el comando y elige Yes si estás de acuerdo." },
      { q: "What do I write in LOG.md?", qes: "¿Qué escribo en LOG.md?", en: "Three or four lines per session. What you asked Claude, what you checked, and what you changed. Include the requests that did not work.", es: "Tres o cuatro líneas por sesión. Qué le pediste a Claude, qué comprobaste y qué cambiaste. Incluye los pedidos que no funcionaron." }
    ]},
    { id: "git", title: "GitHub y el repositorio", items: [
      { q: "How do I share my repository with you?", qes: "¿Cómo te comparto mi repositorio?", en: "On GitHub, open your repository, go to Settings, then Collaborators, then Add people, and add my user: kevingarciag.", es: "En GitHub, abre tu repositorio, ve a Settings, luego Collaborators, luego Add people, y agrega mi usuario: kevingarciag.", pron: "repository (ri-PÓ-si-to-ri) · collaborators (ko-LÁ-bo-rei-tors)" },
      { q: "Should the repository be public?", qes: "¿El repositorio debe ser público?", en: "No, private. Only you and I can see it.", es: "No, privado. Solo tú y yo podemos verlo." },
      { q: "Do my photos go to GitHub?", qes: "¿Mis fotos se suben a GitHub?", en: "No. The .gitignore file keeps the data folder out of the repository, so your photos stay private.", es: "No. El archivo .gitignore deja la carpeta data fuera del repositorio, así tus fotos quedan privadas." },
      { q: "What is a commit?", qes: "¿Qué es un commit?", en: "A commit is like a photo of your project at one moment, with a message. Your last commit for 1.1 must say: Assignment 1.1: simple filters.", es: "Un commit es como una foto de tu proyecto en un momento, con un mensaje. Tu último commit de la 1.1 debe decir: Assignment 1.1: simple filters." }
    ]},
    { id: "images", title: "Imágenes y color", items: [
      { q: "What is an image for a computer?", qes: "¿Qué es una imagen para la computadora?", en: "It is a table of numbers, a matrix. Each cell is a pixel. In gray, each pixel is a number from 0, black, to 255, white.", es: "Es una tabla de números, una matriz. Cada celda es un píxel. En gris, cada píxel es un número del 0, negro, al 255, blanco.", pron: "matrix (MÉI-triks) · pixel (PÍK-sel)" },
      { q: "Why does my photo look blue?", qes: "¿Por qué mi foto se ve azul?", en: "That is the BGR problem. OpenCV stores the colors as blue, green, red. Convert to RGB before you show the image.", es: "Es el problema del BGR. OpenCV guarda los colores como azul, verde, rojo. Convierte a RGB antes de mostrar la imagen.", pron: "OpenCV (óu-pen-si-VÍ)" },
      { q: "Why is the gray not a simple average?", qes: "¿Por qué el gris no es un promedio simple?", en: "Because our eyes are more sensitive to green. So green weighs almost 60 percent, red 30, and blue only 11.", es: "Porque nuestros ojos son más sensibles al verde. Por eso el verde pesa casi 60 por ciento, el rojo 30 y el azul solo 11.", pron: "average (Á-vrich) · weighs (UÉIS)" },
      { q: "What does shape mean?", qes: "¿Qué significa shape?", en: "It is the size of the table. A color image is height, width, and 3. A gray image is only height and width.", es: "Es el tamaño de la tabla. Una imagen a color es alto, ancho y 3. Una imagen en gris es solo alto y ancho.", pron: "height (JÁIT) · width (UÍDZ)" }
    ]},
    { id: "bright", title: "Brillo y contraste", items: [
      { q: "What is the difference between brightness and contrast?", qes: "¿Diferencia entre brillo y contraste?", en: "Brightness adds the same number to every pixel. Contrast multiplies, so the difference between dark and light grows.", es: "El brillo suma el mismo número a cada píxel. El contraste multiplica, así que crece la diferencia entre oscuro y claro.", pron: "brightness (BRÁIT-nes) · contrast (KÓN-trast)" },
      { q: "What are alpha and beta?", qes: "¿Qué son alfa y beta?", en: "The formula is alpha times the pixel, plus beta. Beta controls brightness, and alpha controls contrast.", es: "La fórmula es alfa por el píxel, más beta. Beta controla el brillo y alfa controla el contraste.", pron: "alpha (ÁL-fa) · beta (BÉI-ta)" },
      { q: "My image has strange spots after adding brightness.", qes: "Mi imagen tiene manchas raras al subir el brillo.", en: "That is uint8 overflow. 200 plus 100 gives 44, because the number wraps around. Use the OpenCV function, which stops at 255.", es: "Es el desbordamiento de uint8. 200 más 100 da 44, porque el número da la vuelta. Usa la función de OpenCV, que se detiene en 255.", pron: "uint8 (iú-int-ÉIT) · overflow (óu-ver-FLÓU)" }
    ]},
    { id: "blur", title: "Suavizado y kernels", items: [
      { q: "What is a kernel?", qes: "¿Qué es un kernel?", en: "A kernel is a small table of weights, for example 3 by 3. It slides over the image and changes each pixel using its neighbors.", es: "Un kernel es una tablita de pesos, por ejemplo de 3 por 3. Se desliza por la imagen y cambia cada píxel usando sus vecinos.", pron: "kernel (KÉR-nel) · neighbors (NÉI-bors)" },
      { q: "Why must the size be odd?", qes: "¿Por qué el tamaño debe ser impar?", en: "So the window has one pixel exactly in the center. That is why we use 3, 5, 7, or 21.", es: "Para que la ventana tenga un píxel justo en el centro. Por eso usamos 3, 5, 7 o 21." },
      { q: "Which blur sizes should I use?", qes: "¿Qué tamaños de suavizado uso?", en: "One small and one large. For example, 5 by 5 and 21 by 21. Then write what is lost when the window grows.", es: "Uno pequeño y uno grande. Por ejemplo, 5 por 5 y 21 por 21. Luego escribe qué se pierde cuando la ventana crece." },
      { q: "What is a Gaussian blur?", qes: "¿Qué es un suavizado gaussiano?", en: "It is an average where the closest neighbors count more. Its shape looks like a bell.", es: "Es un promedio donde los vecinos más cercanos pesan más. Su forma parece una campana.", pron: "Gaussian (GÁU-si-an)" }
    ]},
    { id: "conv", title: "Convolución", items: [
      { q: "What is a convolution?", qes: "¿Qué es una convolución?", en: "You slide the kernel over the image. At each position you multiply and add. Each position gives one number, and together they make the feature map.", es: "Deslizas el kernel por la imagen. En cada posición multiplicas y sumas. Cada posición da un número, y juntos forman el mapa de características.", pron: "convolution (kon-vo-LÚ-shon)" },
      { q: "How do I choose my own kernel?", qes: "¿Cómo elijo mi propio kernel?", en: "Write any nine numbers. If they add up to 1, flat areas stay the same. If they add up to 0, flat areas turn black and you see only changes.", es: "Escribe nueve números cualesquiera. Si suman 1, las zonas parejas quedan igual. Si suman 0, las zonas parejas quedan negras y solo ves los cambios." },
      { q: "Why do I have to predict first?", qes: "¿Por qué tengo que predecir primero?", en: "If you can predict the result, you understand the operation. If it surprises you, you learned something. The order is kernel, prediction, run, and compare.", es: "Si puedes predecir el resultado, entiendes la operación. Si te sorprende, aprendiste algo. El orden es kernel, predicción, ejecución y comparación." },
      { q: "How is this related to neural networks?", qes: "¿Cómo se relaciona con las redes neuronales?", en: "A CNN does exactly the same convolution. The difference is that the network learns the numbers of the kernel by itself. We see it in Module 2.", es: "Una CNN hace exactamente la misma convolución. La diferencia es que la red aprende sola los números del kernel. Lo vemos en el Módulo 2.", pron: "neural (NIÚ-ral)" }
    ]},
    { id: "thresh", title: "Umbralización", items: [
      { q: "What is a threshold?", qes: "¿Qué es un umbral?", en: "It is a number, T. Pixels brighter than T become white, and the rest become black.", es: "Es un número, T. Los píxeles más claros que T quedan blancos y el resto queda negro.", pron: "threshold (ZRÉSH-jould)" },
      { q: "Which threshold should I use?", qes: "¿Qué umbral uso?", en: "Fixed, Otsu, or adaptive. Any of them is fine, but you must report the value of T that you used.", es: "Fijo, Otsu o adaptativo. Cualquiera sirve, pero tienes que reportar el valor de T que usaste.", pron: "Otsu (ÓT-su) · adaptive (a-DÁP-tiv)" },
      { q: "What does Otsu do?", qes: "¿Qué hace Otsu?", en: "Otsu tries every value from 0 to 255 and keeps the one that splits the pixels into two groups in the best way.", es: "Otsu prueba todos los valores del 0 al 255 y se queda con el que mejor separa los píxeles en dos grupos." },
      { q: "My result is almost all black.", qes: "Mi resultado sale casi todo negro.", en: "The threshold is too high. Look at the histogram, or use Otsu.", es: "El umbral está muy alto. Mira el histograma o usa Otsu.", pron: "histogram (JÍS-to-gram)" },
      { q: "When is adaptive better?", qes: "¿Cuándo es mejor el adaptativo?", en: "When the light is uneven, for example a shadow on one side. It uses a different threshold for each small area.", es: "Cuando la luz es desigual, por ejemplo una sombra de un lado. Usa un umbral distinto para cada zona pequeña." }
    ]},
    { id: "edges", title: "Bordes: Sobel y Laplaciano", items: [
      { q: "What is an edge?", qes: "¿Qué es un borde?", en: "An edge is not a color, it is a change. It is where the brightness changes fast, from light to dark or from dark to light.", es: "Un borde no es un color, es un cambio. Es donde el brillo cambia rápido, de claro a oscuro o de oscuro a claro." },
      { q: "What do Gx and Gy show?", qes: "¿Qué muestran Gx y Gy?", en: "Gx is the change from left to right, so it shows vertical edges. Gy is the change from top to bottom, so it shows horizontal edges.", es: "Gx es el cambio de izquierda a derecha, así que muestra bordes verticales. Gy es el cambio de arriba a abajo, así que muestra bordes horizontales.", pron: "Gx (yi-ÉKS) · Gy (yi-UÁI) · vertical (VÉR-ti-kal)" },
      { q: "What is the difference between Sobel and the Laplacian?", qes: "¿Diferencia entre Sobel y el Laplaciano?", en: "Sobel is the first derivative, it measures how strong the change is. The Laplacian is the second derivative, so it reacts a lot to fine texture.", es: "Sobel es la primera derivada, mide qué tan fuerte es el cambio. El Laplaciano es la segunda derivada, por eso reacciona mucho a la textura fina.", pron: "Sobel (SÓU-bel) · Laplacian (la-PLÉI-si-an) · derivative (de-RÍ-va-tiv)" },
      { q: "Why do we blur first?", qes: "¿Por qué suavizamos primero?", en: "Because derivatives also react to noise. In class, the Laplacian went from 73.4 to 29.3 after a 5 by 5 blur.", es: "Porque las derivadas también reaccionan al ruido. En clase, el Laplaciano bajó de 73.4 a 29.3 después de un suavizado de 5 por 5." }
    ]},
    { id: "canny", title: "Canny", items: [
      { q: "What are the four steps of Canny?", qes: "¿Cuáles son los cuatro pasos de Canny?", en: "Blur, measure the change with Sobel, make the edges thin, and decide with two thresholds.", es: "Suavizar, medir el cambio con Sobel, adelgazar los bordes y decidir con dos umbrales.", pron: "Canny (KÁ-ni)" },
      { q: "Why does Canny need two thresholds?", qes: "¿Por qué Canny necesita dos umbrales?", en: "Above the high one is a sure edge. Below the low one is thrown away. In between, it is kept only if it touches a sure edge.", es: "Arriba del alto es un borde seguro. Abajo del bajo se descarta. En medio, se queda solo si toca un borde seguro." },
      { q: "Which three pairs should I use?", qes: "¿Qué tres pares uso?", en: "For example 30 and 90, 100 and 200, and 200 and 400. The low number must be smaller than the high one.", es: "Por ejemplo 30 y 90, 100 y 200, y 200 y 400. El número bajo tiene que ser menor que el alto." },
      { q: "I see edges everywhere.", qes: "Veo bordes por todas partes.", en: "Your thresholds are too low, or you forgot to blur first. Raise both thresholds and blur with 5 by 5.", es: "Tus umbrales están muy bajos o se te olvidó suavizar primero. Sube los dos umbrales y suaviza con 5 por 5." }
    ]},
    { id: "fail", title: "Por qué fallan las reglas", items: [
      { q: "What does 'the operators disagree' mean?", qes: "¿Qué significa que los operadores no coinciden?", en: "Find an image where Sobel, the Laplacian, and Canny show different things. Then explain it with what each one measures.", es: "Busca una imagen donde Sobel, el Laplaciano y Canny muestren cosas distintas. Luego explícalo con lo que mide cada uno.", pron: "operators (Ó-pe-rei-tors)" },
      { q: "What does 'every operator fails' mean?", qes: "¿Qué significa que todos fallan?", en: "Find an image where none of them finds your object. Then name the cause: lighting, texture, scale, or occlusion.", es: "Busca una imagen donde ninguno encuentre tu objeto. Luego nombra la causa: iluminación, textura, escala u oclusión.", pron: "occlusion (o-KLÚ-shon)" },
      { q: "What is occlusion?", qes: "¿Qué es la oclusión?", en: "It is when something covers part of the object. For example, a car on top of the pothole.", es: "Es cuando algo tapa parte del objeto. Por ejemplo, un carro encima del bache." },
      { q: "Why can't we just write better rules?", qes: "¿Por qué no escribimos mejores reglas?", en: "Because the real world has too many cases. These tools do not know what the object is. They only know where the brightness changes.", es: "Porque el mundo real tiene demasiados casos. Estas herramientas no saben qué es el objeto. Solo saben dónde cambia el brillo." }
    ]},
    { id: "a11", title: "Tarea 1.1", items: [
      { q: "What does Assignment 1.1 ask?", qes: "¿Qué pide la Tarea 1.1?", en: "Three photos of your own. To each one: gray, two levels of blur, one threshold, and one kernel that you write. Show the original and the result side by side.", es: "Tres fotos tuyas. A cada una: gris, dos niveles de suavizado, un umbral y un kernel que tú escribas. Muestra el original y el resultado lado a lado." },
      { q: "What should the sentence under each result say?", qes: "¿Qué debe decir la frase debajo de cada resultado?", en: "Say what the operation measured, not how it looks. For example: the average brightness in a 21 by 21 window, which erases the gravel.", es: "Di qué midió la operación, no cómo se ve. Por ejemplo: el brillo promedio en una ventana de 21 por 21, que borra la grava." },
      { q: "Do my photos have to be potholes?", qes: "¿Mis fotos tienen que ser de baches?", en: "No. Use photos of the object you would like to detect in your project. Nothing private, and only photos you have the right to use.", es: "No. Usa fotos del objeto que te gustaría detectar en tu proyecto. Nada privado, y solo fotos que tengas derecho a usar." },
      { q: "What is worth the most points?", qes: "¿Qué vale más puntos?", en: "The sentences under each result, 25 percent. And your own kernel with the prediction, 20 percent.", es: "Las frases debajo de cada resultado, 25 por ciento. Y tu propio kernel con la predicción, 20 por ciento." },
      { q: "The tests do not pass.", qes: "Las pruebas no pasan.", en: "Paste the error to Claude and check the spec. If it still fails, copy the reference file to src/classical.py and write that in LOG.md.", es: "Pégale el error a Claude y revisa la especificación. Si sigue fallando, copia el archivo de referencia a src/classical.py y escríbelo en LOG.md.", pron: "classical (KLÁ-si-kal)" }
    ]},
    { id: "a12", title: "Tarea 1.2", items: [
      { q: "What does Assignment 1.2 ask?", qes: "¿Qué pide la Tarea 1.2?", en: "On the same photos: Sobel, the Laplacian, and Canny with three pairs of thresholds. Then one image where they disagree, and one where they all fail.", es: "En las mismas fotos: Sobel, el Laplaciano y Canny con tres pares de umbrales. Luego una imagen donde no coinciden y una donde todos fallan." },
      { q: "How long is the written comparison?", qes: "¿Qué tan larga es la comparación escrita?", en: "About one page, in the last cell of the notebook. Say what each operator measures, where it works, and where it fails, using your images.", es: "Más o menos una página, en la última celda del notebook. Di qué mide cada operador, dónde funciona y dónde falla, usando tus imágenes." },
      { q: "How should the comparison end?", qes: "¿Cómo debe terminar la comparación?", en: "With what the classical operators could not do for your object. That is the reason your detector will learn its own features.", es: "Con lo que los operadores clásicos no pudieron hacer con tu objeto. Esa es la razón por la que tu detector va a aprender sus propias características.", pron: "features (FÍ-chers)" },
      { q: "What is the last commit message?", qes: "¿Cuál es el mensaje del último commit?", en: "Assignment 1.2: boundary detection.", es: "Assignment 1.2: boundary detection.", pron: "boundary (BÁUN-da-ri) · detection (di-TÉK-shon)" }
    ]}
  ]
},
{ id: "m2", title: "Módulo 2", sub: "CNNs y tu proyecto", tag: "Pronto", soon: true, topics: [] },
{ id: "m3", title: "Módulo 3", sub: "Entrenar el detector", tag: "Pronto", soon: true, topics: [] },
{ id: "m4", title: "Módulo 4", sub: "El sistema completo", tag: "Pronto", soon: true, topics: [] }
];
