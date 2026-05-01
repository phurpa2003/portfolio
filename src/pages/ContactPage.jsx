import { useState } from "react"

const ContactPage = ({ isDark }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  return (
    <div className={`min-h-screen py-16 px-8 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2 className={`text-3xl font-bold text-center mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
        Contact Me
      </h2>
      <p className={`text-center mb-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        Have a project in mind? Let's talk!
      </p>

      {submitted ? (
        <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <span className="text-5xl">🎉</span>
          <h3 className="text-xl font-bold text-green-700 mt-4">Message Sent!</h3>
          <p className="text-green-600 mt-2">Thanks {form.name}, I'll get back to you soon!</p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`max-w-md mx-auto rounded-xl shadow-md p-8 flex flex-col gap-4 ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition duration-200 ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 text-gray-800"}`}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition duration-200 ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 text-gray-800"}`}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition duration-200 resize-none ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 text-gray-800"}`}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactPage