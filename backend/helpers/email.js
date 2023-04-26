import nodemailer from "nodemailer"
export const registerEmail = async (datos) => {
    const { email, name, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    //Informacion del email

    const info = await transport.sendMail({
        from: 'Proyecto',
        to: email,
        subject: "Comprobar tu cuenta",
        text: "Comprueba tu cuenta en Inv",
        html: `<p>Hola: ${name} comprueba tu cuenta en Inv</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        </p>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `,

    });
}


export const forgetPasswordEmail = async (datos) => {
    const { email, name, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    //Informacion del email

    const info = await transport.sendMail({
        from: 'Proyecto',
        to: email,
        subject: "Restablecer contraseña",
        text: "Restablecer contraseña",
        html: `<p>Hola: ${name} has solicitado restablecer contraseña</p>
        <p>Sigue el siguiente enlace para generar una nueva contraseña:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer contraseña</a>
        </p>

        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        `,

    });
}