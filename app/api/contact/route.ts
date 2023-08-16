import { z } from 'zod'
import { mailInfo, transporter } from '../../lib/nodemailer'

const ReqSchema = z.object({
    email: z.string(),
    name: z.string(),
    message: z.string()
})
export interface messageData {
    name: string
    email: string
    message: string

}


const generateEmailContent = (data: messageData) => {
    const htmlData =
        `<h3 class="form-heading" align="left">name</h3><p class="form-answer" align="left">${data.name}</p>
    <h3 class="form-heading" align="left">email</h3><p class="form-answer" align="left">${data.email}</p>
    <h3 class="form-heading" align="left">message</h3><p class="form-answer" align="left">${data.message}</p>`
    return htmlData
}

export async function POST(req: Request) {
    const body = await req.json()
    const { email, name, message } = ReqSchema.parse(body)
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method Not Allowed !!' }), { status: 405 })
    }
    else if (!email || !name || !message) {
        // console.log(email)
        // console.log(name)
        // console.log(message)
        return new Response(JSON.stringify({ error: 'Parameter Missing !!' }), { status: 404 })
    }
    else {
        try {
            // await transporter.sendMail({
            //     ...mailInfo,
            //     subject: 'Message from Contact form',
            //     text: `message from ${name} from Contact me form`,
            //     html: generateEmailContent({ email, name, message })
            // })
            return new Response(JSON.stringify({ message: 'Message sent' }), { status: 200 })
        } catch (error) {
            console.log('error')
            console.log(error)
            return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
        }
    }
}

