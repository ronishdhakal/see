import Image from "next/image";

export default function ResultHeader() {
  return (
    <section className="w-full bg-white pt-2 pb-10 sm:pt-3 sm:pb-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Top Banner Ad - New Summit College */}
          <div className="flex justify-center mb-4">
            <a
              href="https://www.collegeinfonepal.com/college/new-summit-college"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ads/New-Summit-College-Ad.jpg"
                alt="New Summit College"
                width={510}
                height={100}
                className="rounded-md"
                style={{ width: '510px', height: '100px' }}
              />
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            SEE RESULT <span className="text-blue-500">2082/2083</span>
          </h1>

          <div className="w-full mb-6 rounded-xl px-6 py-5 text-white shadow-lg border-l-4 border-blue-400" style={{ backgroundColor: '#1ca3fd' }}>
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">
                Result not published yet. Likely to be published on Baisakh 30.
              </p>
              <p className="text-sm sm:text-base">
                Follow our{" "}
                <a
                  href="https://www.facebook.com/collegeinfonepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-blue-100 transition-colors"
                >
                  Facebook Page
                </a>{" "}
                to get the update first. &nbsp;
                <a
                  href="https://www.facebook.com/collegeinfonepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              disabled
              placeholder="eg: 01234567A"
              className="w-full px-4 sm:px-5 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 outline-none placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-70 text-sm sm:text-base"
            />
            <button
              disabled
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
            >
              Submit
            </button>
          </div>

          

          {/* Scholarship Link */}
          <p className="mt-4 text-sm text-blue-600 font-medium">
            <a
              href="https://forms.gle/CrQC5siLcQuuVGdJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Apply for College Info Nepal +2 Scholarship (Click Here)
            </a>
          </p>

          {/* Scholarship Exam Banner */}
          <div className="flex justify-center mt-2">
            <a
              href="https://forms.gle/CrQC5siLcQuuVGdJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ads/Scholarship-Exam-Website.jpg"
                alt="+2 Scholarship Exam"
                width={510}
                height={100}
                className="rounded-md"
                style={{ width: '510px', height: '100px' }}
              />
            </a>
          </div>

          {/* Bottom Ads - NEB Exam & Abroad Advise */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
            <a
              href="https://www.nebexam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Image
                src="/ads/NEB-Exam.jpg"
                alt="NEB Exam - Prepare for Board Exam"
                width={510}
                height={100}
                className="rounded-md"
                style={{ width: '510px', height: '100px' }}
              />
            </a>
            <a
              href="https://www.abroadadvise.com/featured/best-consultancy-in-nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Image
                src="/ads/Abroad-Advise.jpg"
                alt="Abroad Advise - Study Abroad"
                width={510}
                height={100}
                className="rounded-md"
                style={{ width: '510px', height: '100px' }}
              />
            </a>
          </div>

          <p className="mt-3 text-sm text-blue-600 font-medium">
            <a
              href="https://gpa.collegeinfonepal.com/see"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Check: SEE GPA Calculator
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}