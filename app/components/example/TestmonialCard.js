import Image from 'next/image';

function TestmonialCard({
  person = 'something',
  locatoin = 'tokio',
  reason = 'travel',
  message = 'no message stated',
  gender = 'male',
}) {
  return (
    <div className="card-container min-w-lg flex flex-col justify-between rounded-md shadow-lg">
      <div className="top-text p-6">
        <div className="icon-quotes">
          <svg
            width="45"
            height="36"
            className="mb-5 fill-current text-yellow-300"
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
        </div>
        <div className="container-text max-w-lg">
          <p className="text-md py-4 font-semibold text-slate-600">{message}</p>
          <p className="w-fit rounded-full bg-red-700 px-4 text-white">
            売却理由
          </p>
          <p>{reason}</p>
        </div>
      </div>
      <div className="footer-container min-w-lg justify-betwene  flex flex-row flex-nowrap rounded-b-lg bg-gradient-to-r from-red-200 to-red-700 px-8 py-4">
        <div className="avatar-container">
          <div className="footer-img flex flex-row flex-nowrap">
            <Image
              src={gender === 'male' ? '/male.jpg' : '/female.jpg'}
              height={60}
              width={60}
              className="rounded-full border-2 border-gray-200"
              alt="some image alt "
            />
            <div className="footer-text flex flex-col flex-nowrap">
              <p className="ml-6 font-bold text-gray-100">{person}</p>
              <p className="ml-6 text-gray-200">from {locatoin} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestmonialCard;
