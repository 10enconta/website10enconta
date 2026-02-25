import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {
        const { email } = await req.json()

        if (!email) {
            return Response.json(
                { error: "Email es requerido" },
                { status: 400 },
            )
        }

        await resend.emails.send({
            from: "Landing <contacto@10enconta.com>",
            to: "romeoteni093@gmail.com",
            subject: "Nuevo registro 10enconta oficial",
            html: `
                <h2>Nuevo cliente interesado</h2>
                <p><strong>Email:</strong> ${email}</p>
            `,
        })

        return Response.json({ success: true })
    } catch (error) {
        console.error(error)
        return Response.json(
            { error: "Error enviando correo" },
            { status: 500 },
        )
    }
}
