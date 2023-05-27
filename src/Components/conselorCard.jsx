import { ClipboardText, StarIcon } from "./Icons";

export const ConselorCard = () => {
  return (
    <div className="inline-block mx-4">
      <div className="p-7 bg-white flex flex-col gap-7 w-[577px] rounded-3xl">
        <div className="flex gap-7">
          <div className="">
            {/* profile pict */}
            <div className="rounded-full bg-red-950 h-[90px] w-[90px] m-4 pointer-events-none"></div>
          </div>
          <div className="flex flex-col gap-4 w-auto min-w-0">
            <h5 className="font-bold text-3xl">dr. Amelia Ratna</h5>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <div className="h-[40px] w-[40px] bg-[#FFE4ED] rounded-full flex justify-center items-center">
                  <ClipboardText />
                </div>
                <p className="text-2xl text-[#3D3F40]">
                  1<span className="text-[#989B9E]"> tahun</span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-[40px] w-[40px] bg-[#FFEFEA] rounded-full flex justify-center items-center">
                  <StarIcon />
                </div>
                <p className="text-2xl font-medium text-[#3D3F40]">5,0</p>
              </div>
            </div>
            <p className="text-[#989B9E] text-xl truncate max-w-full">
              Spesialisasi bipolar disorder, depresi, psikologi Spesialisasi
              bipolar disorder, depresi, psikologi
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#F2994A] font-bold text-2xl">
            Rp 25.000 <span className="text-[#BABEC1] font-normal"> / jam</span>
          </div>
          <a className="bg-[#2E2BA6] py-5 px-12 rounded-2xl text-white font-bold text-2xl">
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export const OtherConselorCard = () => {
  return (
    <div className="w-max">
      <div className="px-16 py-9 bg-white flex flex-col gap-9 items-center rounded-3xl">
        <div className="flex flex-col gap-5 items-center">
          {/* profile pict */}
          <div className="rounded-full bg-red-950 h-[133px] w-[133px] m-4 pointer-events-none"></div>
          <div className="flex flex-col gap-5 items-center">
            <h5 className="font-bold text-3xl">dr. Amelia Ratna</h5>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <div className="h-[40px] w-[40px] bg-[#FFE4ED] rounded-full flex justify-center items-center">
                  <ClipboardText />
                </div>
                <p className="text-2xl text-[#3D3F40]">
                  1<span className="text-[#989B9E]"> tahun</span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-[40px] w-[40px] bg-[#FFEFEA] rounded-full flex justify-center items-center">
                  <StarIcon />
                </div>
                <p className="text-2xl font-medium text-[#3D3F40]">5,0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#F2994A] font-bold text-2xl">
          Rp 25.000 <span className="text-[#BABEC1] font-normal"> / jam</span>
        </div>
      </div>
    </div>
  );
};
