import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Introduction() {

    return (
      <section id='introduction' className="relative isolate overflow-hidden bg-white font-my-font px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “성실하고 호기심이 많으며 넘치는 도전정신으로<br/>끊임없는 발전을 추구하는 개발자입니다.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-22 w-22 rounded-full"
                src="/CORAL 1.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">              
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
      {/* 자기소개 상세 */}
      <div className="flex justify-center mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">이름</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">손 승 아</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">희망직종</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend 개발자</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">이메일 주소</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">disket0882@gmail.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">자격증</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">1종 보통 면허<br/>정보처리기사(필기)<br/>리눅스마스터2급(1차합격)</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">학력</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              2023.09 ~ 2024.04 | 스마트인재개발원 언어지능기반 분석서비스모델 개발자 과정 이수
              <br />
              <br />
              2016.03 ~ 2021.02 | 조선대학교 기계공학과 졸업
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">참고자료</dt>
            <dd className="mt-2 text-m text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-m leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">손승아_개발자_이력서.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">495kb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="/download/손승아_이력서.pdf" download="손승아_개발자_이력서" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-m leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">손승아_개발자_포트폴리오.docx</span>
                      <span className="flex-shrink-0 text-gray-400">200kb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="/download/손승아_포트폴리오.docx" download="손승아_개발자_포트폴리오" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
      </section>
    )
  }
  