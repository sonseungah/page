
const callouts = [
    {
      name: '실전프로젝트',
      description: 'LLM과 번역API를 이용한 공공기관 외국어 챗봇 서비스',
      imageSrc: '/toktalk.png',
      imageAlt: '챗봇 로고',
      href: 'https://github.com/Project-TokTalk/backend.git',
    },
    {
      name: '핵심프로젝트',
      description: '간편한 UI/UX를 이용한 농수산물 전자상거래 C2C 서비스',
      imageSrc: '/harugreen.png',
      imageAlt: '하루그린 로고',
      href: 'https://github.com/2023-SMHRD-IS-AI1/HRGR.git',
    },
    {
      name: '미니프로젝트',
      description: '멜론 TOP100차트를 활용한 데이터 분석 및 시각화',
      imageSrc: '/melon.jpg',
      imageAlt: '멜론 로고',
      href: 'https://adorable-society-1a9.notion.site/788ba4d2221344fab5d400f5c440e827?pvs=4',
    },
  ]
  
  export default function Project() {

    return (
      <section className="bg-white-100 font-my-font" id="project" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-3xl font-bold text-gray-900">프로젝트 이력</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-contain object-center"
                      
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  