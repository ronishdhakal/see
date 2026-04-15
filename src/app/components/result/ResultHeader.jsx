import Image from "next/image";
import Script from "next/script";

export default function ResultHeader() {
  return (
    <section className="w-full bg-white pt-2 pb-10 sm:pt-3 sm:pb-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Ad Image */}
          <div className="mb-4 flex justify-center">
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
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            SEE RESULT 2082
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12">
            Check your examination results securely and instantly
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              disabled
              placeholder="eg: 01234567A"
              className="w-full px-4 sm:px-5 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 outline-none placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-60 text-sm sm:text-base"
            />

            <button
              disabled
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
            >
              Submit
            </button>
          </div>

          <p className="mt-6 sm:mt-8 text-sm font-medium text-red-600">
            Result not published yet
          </p>

          {/* GPA Calculator Link */}
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

          {/* Facebook Embed Title */}
          <p className="mt-6 text-base font-semibold text-gray-900">
            Follow us on Facebook for Latest SEE Result Updates
          </p>

          {/* Facebook Embed */}
          <div className="mt-3 flex justify-center">
            <div
              className="iframely-embed w-full max-w-xl"
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="iframely-responsive" style="height: 140px; padding-bottom: 0;">
                    <a href="https://www.facebook.com/collegeinfonepal/" data-iframely-url="https://iframely.net/ra3xe0uA?theme=dark"></a>
                  </div>
                `,
              }}
            />
          </div>

          {/* Iframely Script */}
          <Script
            src="https://iframely.net/embed.js"
            strategy="lazyOnload"
          />

          <div className="mt-4 sm:mt-6 text-sm text-gray-700">
            <p className="mb-2">
              We will post the result update on our Facebook page once it is published.
            </p>

            <p className="mb-3">
              Follow us on Facebook to get the update first.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-blue-600">
              <a
                href="https://www.facebook.com/collegeinfonepal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Follow us on Facebook
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

            <p className="mt-4">
              SEE Result is likely to be published in the last week of Baisakh 2083.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}