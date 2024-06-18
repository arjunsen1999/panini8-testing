import React from "react";
import Tab from "@/components/Progress/Tab";
export default function History({ data }: any) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[90%]  bg-white">
          <h1 className="border-b-grey-400 text-xl p-2 font-semibold border-2 border-dotted">
            History
          </h1>
          <p className="m-5">
            Hint: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
            massa mi. Aliquam in hendrerit. Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
            et massa mi. Aliquam in hendrerit. Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.{" "}
          </p>
          <Tab
            data={data}
            date={""}
            minute={0}
            success={0}
            total={0}
            skip={0}
            wrong={0}
          />
        </div>
      </div>
    </div>
  );
}
