const Queue = require("bull");
const { transporter } = require("./nodemailer");

// Crear la cola Bull para envío de correos electrónicos
const emailQueue = new Queue("email");

// Definir el procesador de trabajos para la cola de correos electrónicos
emailQueue.process(async (job, done) => {
  try {
    // Enviar el correo electrónico utilizando Nodemailer
    await transporter.sendMail(job.data);

    // Marcar el trabajo como completo
    done();
  } catch (error) {
    console.log(error);
    done(error);
  }
});

module.exports = {
  emailQueue,
};
