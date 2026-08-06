import barangayHome from "../../assets/images/barangay-home.png";

export default function HeroPreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <div className="ml-4 flex-1 rounded-md bg-slate-700 px-4 py-1 text-xs text-slate-300">
          https://barangay-e-services-portal.vercel.app
        </div>
      </div>

      {/* Preview Image */}
      <img
        src={barangayHome}
        alt="Barangay e-Services Portal"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}