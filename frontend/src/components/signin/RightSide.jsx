import ProtoTypes from "prop-types";
import square from "/public/static/images/shapes/square.svg";
import vline from "/public/static/images/shapes/vline.svg";
import dotted from "/public/static/images/shapes/dotted.svg";
import Image from "next/image";

function RightSide({ img }) {
  return (
    <div className="lg:w-1/2 lg:block hidden bg-[#F6FAFF] dark:bg-darkblack-600 p-20 relative min-h-screen ">
      <ul>
        <li className="absolute top-10 left-8">
          <Image
            priority={true}
            height={square.height}
            width={square.width}
            src={square.src}
            alt=""
          />
        </li>
        <li className="absolute right-12 top-14">
          <Image
            priority={true}
            height={vline.height}
            width={vline.width}
            src={vline.src}
            alt=""
          />
        </li>
        <li className="absolute bottom-1 left-8">
          <Image
            priority={true}
            height={dotted.height}
            width={dotted.width}
            src={dotted.src}
            alt=""
          />
        </li>
      </ul>
      <div className="">
        <Image
          priority={true}
          height={img.height}
          width={img.width}
          src={img.src}
          alt=""
        />
      </div>
      <div>
        <div className="text-center max-w-lg px-1.5 m-auto">
          <h3 className="text-bgray-900 dark:text-white font-semibold font-popins text-4xl mb-4">
            Speady, Easy and Fast
          </h3>
          <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
            Note App help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
          </p>
        </div>
      </div>
    </div>
  );
}

RightSide.propTypes = {
  img: ProtoTypes.string,
};

export default RightSide;
