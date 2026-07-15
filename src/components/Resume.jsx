import Navbar from "../components/Navbar";
import { Download } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function Resume() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0B1120] pt-24 pb-10">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-5">

            <h1 className="text-3xl font-bold text-white">
              Resume
            </h1>

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              <Download size={18} className="inline mr-2" />
              Download Resume
            </a>
            <a
              href="/"
              className="bg-cyan-400 text-black px-7 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition inline-flex items-center"
            >
              <ArrowLeft size={18} className="inline mr-2" />
              Back to Portfolio
            </a>
          </div>

          {/* Resume Viewer */}

          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">

            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
              title="Resume"
              className="w-full h-[88vh]"
            />

          </div>

        </div>

      </div>
    </>
  );
} 