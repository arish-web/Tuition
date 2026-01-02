export default function EnquiryForm() {
  return (
    <section id="enquiry" className="py-16 bg-green-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h3 className="text-xl font-bold text-center mb-6">
          Student Admission Enquiry
        </h3>

        <form className="space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Student Name" />
          <input className="w-full border p-3 rounded" placeholder="Class / Grade" />
          <input className="w-full border p-3 rounded" placeholder="Parent Mobile Number" />
          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
