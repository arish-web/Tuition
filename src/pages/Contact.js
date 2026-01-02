export default function Contact() {
  return (
    <div className="px-6 py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded"
          rows="4"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
