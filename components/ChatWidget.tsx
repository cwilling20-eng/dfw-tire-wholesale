'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/getDictionary'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, locale }),
      })

      if (!res.ok) throw new Error('Chat request failed')

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No reader')

      const decoder = new TextDecoder()
      let assistantContent = ''
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        assistantContent += chunk
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: 'assistant',
            content: assistantContent,
          }
          return updated
        })
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            locale === 'es'
              ? 'Lo siento, algo salió mal. Por favor llame al (817) 633-7500.'
              : "Sorry, something went wrong. Please call us at (817) 633-7500.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-red rounded-sm flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-red-800 transition-all"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] h-[100dvh] sm:h-[520px] bg-white sm:shadow-2xl flex flex-col overflow-hidden rounded-sm border border-border">
          {/* Header — RED */}
          <div className="bg-brand-red text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <h3 className="font-body font-bold text-sm tracking-wide">{dict.chat.title}</h3>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/20 rounded-sm transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="space-y-2 pt-2">
                <p className="font-body text-muted text-sm mb-4">
                  {locale === 'es'
                    ? '¡Hola! ¿En qué podemos ayudarle?'
                    : 'Hi there! How can we help you?'}
                </p>
                {dict.chat.starters.map((starter, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(starter)}
                    className="block w-full text-left font-body text-sm border border-border hover:border-brand-red hover:text-brand-red px-4 py-2.5 rounded-sm transition-colors text-heading"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 font-body text-sm leading-relaxed rounded-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-red text-white'
                      : 'bg-bg-alt text-heading'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className="flex justify-start">
                <div className="bg-bg-alt px-4 py-3 rounded-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex-shrink-0 border-t border-border p-3 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={dict.chat.placeholder}
              className="flex-1 px-4 py-2.5 bg-bg-alt text-heading font-body text-sm outline-none focus:ring-2 focus:ring-brand-red/20 rounded-sm transition-shadow"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-brand-red text-white p-2.5 rounded-sm hover:bg-red-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
