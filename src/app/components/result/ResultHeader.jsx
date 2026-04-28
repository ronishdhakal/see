import Image from "next/image";

export default function ResultHeader() {
  return (
    <section className="w-full bg-white pt-2 pb-10 sm:pt-3 sm:pb-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* ✅ SIMPLE TOP LINK */}
          <p className="mb-3 text-sm sm:text-base text-blue-600 font-medium">
            <a
              href="https://see.nebexam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SEE Result 2082
            </a>
          </p>

          {/* <div className="mb-4 flex justify-center">
            <a
              href="https://www.nebexam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/nebexam-wide.jpg"
                alt="NEB Exam Preparation"
                width={600}
                height={144}
                className="w-full max-w-2xl h-auto rounded-lg cursor-pointer"
                priority
              />
            </a>
          </div> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            SEE RESULT 2082
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Check your examination results securely and instantly
          </p>

          <div className="max-w-2xl mx-auto mb-4 rounded-lg bg-blue-600 px-4 py-3 text-white text-sm sm:text-base font-medium">
            Result not published yet. Follow our Facebook page to get the update first.
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

          <p className="mt-4 text-sm font-medium text-red-600">
            The result will be published here once officially released.
          </p>

          <p className="mt-2 text-sm text-blue-600 font-medium">
            <a
              href="https://www.abroadadvise.com/featured/best-consultancy-in-nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Top Consultancy in Nepal (10 Best Options for 2026)
            </a>
          </p>

          <div className="max-w-2xl mx-auto mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6 shadow-sm">
            <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Follow Facebook for instant SEE result updates
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-5">
              We will post the official SEE result update on our Facebook page as soon as it is published.
            </p>

            <a
              href="https://www.facebook.com/collegeinfonepal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Follow on Facebook
            </a>
          </div>

          <p className="mt-4 text-sm text-blue-600 font-medium">
            <a
              href="https://gpa.collegeinfonepal.com/see"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Check: SEE GPA Calculator
            </a>
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-600">
            <a
              href="https://www.facebook.com/collegeinfonepal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Facebook
            </a>

            <a
              href="https://www.tiktok.com/@collegeinfonepal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TikTok
            </a>

            <a
              href="https://www.instagram.com/collegeinfonp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            SEE Result is likely to be published in the last week of Baisakh 2083.
          </p>
        </div>
      </div>
    </section>
  );
}