import Image from "next/image";
import GetTicketForm from "./components/get-ticket-form";

async function getData(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

const ShowDetailes = async ({
  params,
}: {
  params: { showname: string; showId: string };
}) => {
  const data = await getData(params.showId);
  const htmlContent = data.summary;

  console.log(params.showId);

  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="shadow-[0px_1px_3px_0_rgba(0,0,0,.15)] bg-[#efefe7] h-[60px] w-full flex items-center px-[20px] gap-x-4">
        <span className="text-[#3c948b]">HOME</span> /{" "}
        <span className="text-[#3c948b]">SHOWS</span> /{" "}
        <span>{params.showname.split("-").join(" ")}</span>
      </div>

      <section className="p-[20px] flex gap-x-8">
        <div>
          <h3 className="text-[34px] font-light">
            {params.showname.split("-").join(" ")}
          </h3>
          <div className="flex items-start gap-x-3">
            <div className="h-[295px] w-[210px] relative">
              <Image src={data.image.original} fill alt="showImage" />
            </div>
            <div className="space-y-4">
              <div
                className="w-[400px] text-[14px] text-gray-400"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
              <GetTicketForm show={params.showname.split("-").join(" ")} />
            </div>
          </div>
        </div>
        <div className="shadow-sm w-full p-6">
          <h3 className="text-gray-600 text-[25px]">Show Info</h3>
          <div className="mt-2 space-y-3">
            <p className="text-[14px]">
              <span className="font-semibold">Web channel: </span>
              <span className="text-[#3c948b]">Prime Video</span>{" "}
              <span>2022-now</span>
            </p>
            {data.schedule?.days && (
              <p className="text-[14px]">
                <span className="font-semibold">Schedule: </span>
                <span>{data.scheduled?.days}</span>
              </p>
            )}
            <p className="text-[14px]">
              <span className="font-semibold">Status: </span>
              <span>{data.status}</span>
            </p>
            <p className="text-[14px]">
              <span className="font-semibold">Show Type: </span>
              <span>{data.type}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowDetailes;
