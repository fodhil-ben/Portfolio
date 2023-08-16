"use client"
import React, { FormEvent, useState } from 'react'
import { messageData } from "../api/contact/route";
import { FaSpinner } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';

const MessageForm = () => {
    const sendMessage = async (data: messageData) => {
        try {
            setIsLoading(true)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            setIsLoading(false)

            if (!response.ok) {
                console.log(error)
            }
            setSuccess(json.message)
        } catch (error) {
            setIsLoading(false)
            setError('Failed to send message')
        }
    }

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setSuccess('')
        e.preventDefault()
        const data = { name, email, message }
        sendMessage(data)
    }
    return (
        <>
            <form className="grid gap-10" onSubmit={(e) => handleSubmit(e)}>
                <input required value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Your name" className="outline-0 bg-gray-100 dark:bg-zinc-800 p-5 rounded-md shadow-md " />
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" name='email' className="outline-0 bg-gray-100 dark:bg-zinc-800 p-5 rounded-md shadow-md " />
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="text" placeholder="How can i help you" cols={10} rows={8} className="outline-0 bg-gray-100 dark:bg-zinc-800 p-5 rounded-md shadow-md " ></textarea>
                {!isLoading
                    ? success
                        ? <div onClick={() => setSuccess('')} className={`p-5 shadow-md font-bold w-fit rounded-md text-green-300 border border-green-300 flex gap-3 m-auto items-center`}>{success}<AiFillCheckCircle></AiFillCheckCircle></div>
                        : <button className="font-bold w-fit m-auto outline-0 p-5 rounded-md bg-zinc-900 text-white shadow-md">Send Message</button>
                    : <div className="font-bold w-fit m-auto outline-0 p-5 rounded-md bg-zinc-900 text-white shadow-md">
                        <div><FaSpinner className="animate-spin h-5 w-5"></FaSpinner></div>
                    </div>
                }
            </form>
        </>
    )
}

export default MessageForm