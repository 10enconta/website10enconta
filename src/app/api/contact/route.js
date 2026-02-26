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

        const year = new Date().getFullYear()

        //  CORREO PARA TI (NOTIFICACIÓN)
        await resend.emails.send({
            from: "10enConta <contacto@data.10enconta.com>",
            to: "10enconta@gmail.com",
            subject: "Nuevo registro - 10enConta",
            html: `
<div style="margin:0;padding:0;background-color:#f1f5f9;
background-image:
linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
background-size:40px 40px;
font-family: Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:12px;padding:40px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);">

<tr>
<td align="center" style="padding-bottom:20px;">
<h1 style="margin:0;font-size:28px;color:#111827;">
<span style="color:#facc15;">10</span>enConta
</h1>
<p style="margin:5px 0 0 0;font-size:12px;color:#6b7280;letter-spacing:1px;">
LOS NÚMEROS EN TU NEGOCIO
</p>
</td>
</tr>

<tr>
<td>
<div style="height:2px;background:#facc15;width:60px;margin:20px auto;border-radius:4px;"></div>
</td>
</tr>

<tr>
<td style="color:#374151;font-size:16px;line-height:1.6;">
<p><strong>Nuevo cliente interesado</strong></p>

<p>Se ha registrado un nuevo correo en la landing:</p>

<div style="background:#f9fafb;padding:15px;border-radius:8px;margin:20px 0;">
<strong>Email:</strong> ${email}
</div>

<p>Este contacto quiere mejorar la gestión financiera de su negocio.</p>
</td>
</tr>

<tr>
<td style="padding-top:30px;border-top:1px solid #e5e7eb;
text-align:center;font-size:12px;color:#9ca3af;">
© ${year} 10enConta<br/>
Estrategia financiera para negocios que quieren crecer.
</td>
</tr>

</table>

</td>
</tr>
</table>

</div>
`,
        })

        // CORREO AUTOMÁTICO PARA EL USUARIO
        await resend.emails.send({
            from: "10enConta <contacto@data.10enconta.com>",
            to: email,
            subject: "Bienvenido a 10enConta",
            html: `
<div style="margin:0;padding:0;background-color:#f1f5f9;
background-image:
linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
background-size:40px 40px;
font-family: Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:12px;padding:40px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);">

<tr>
<td align="center" style="padding-bottom:20px;">
<h1 style="margin:0;font-size:28px;color:#111827;">
<span style="color:#facc15;">10</span>enConta
</h1>
<p style="margin:5px 0 0 0;font-size:12px;color:#6b7280;letter-spacing:1px;">
LOS NÚMEROS EN TU NEGOCIO
</p>
</td>
</tr>

<tr>
<td>
<div style="height:2px;background:#facc15;width:60px;margin:20px auto;border-radius:4px;"></div>
</td>
</tr>

<tr>
<td style="color:#374151;font-size:16px;line-height:1.6;">
<p><strong>Gracias por registrarte</strong></p>

<p>
Ahora formas parte de 10enConta.
En breve recibirás recursos exclusivos para entender mejor los números de tu negocio.
</p>

<p>
Nuestro objetivo es ayudarte a tomar decisiones financieras con claridad y estrategia.
</p>

<div style="margin-top:25px;text-align:center;">
<a href="#"
style="background:#dc2626;color:white;padding:12px 25px;
text-decoration:none;border-radius:8px;font-weight:bold;
display:inline-block;">
Comenzar ahora
</a>
</div>

</td>
</tr>

<tr>
<td style="padding-top:30px;border-top:1px solid #e5e7eb;
text-align:center;font-size:12px;color:#9ca3af;">
© ${year} 10enConta<br/>
Estrategia financiera para negocios que quieren crecer.
</td>
</tr>

</table>

</td>
</tr>
</table>

</div>
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
