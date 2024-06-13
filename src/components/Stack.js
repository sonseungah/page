
export default function Stack() {

    return (
      <section className="bg-white font-my-font py-24 sm:py-32" id="stack">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold leading-8 text-gray-900">
            사용하는 주요 기술스택
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://img.icons8.com/color/96/spring-logo.png"
              alt="spring-logo"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://img.icons8.com/color/96/javascript--v1.png"
              alt="javascript--v1"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-shadow-tal-revivo.png"
              alt="external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-shadow-tal-revivo"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://img.icons8.com/color/96/linux--v1.png"
              alt="linux--v1"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://img.icons8.com/color/96/python--v1.png"
              alt="python--v1"
              width={158}
              height={48}
            />
          </div>
        </div>
      </section>
    )
  }
  