import ShowCard from "@/components/shared/show-card";

async function getData() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=all", {
    method: "GET",
    cache: "no-cache",
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const data: any[] = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
      <div className="z-10 max-w-5xl w-full  font-mono text-smlg:flex">
        <h3 className="text-[44px]">Shows</h3>
        <div className="grid grid-cols-4 gap-5">
          {data.map((item) => {
            console.log(item.show);
            return (
              <ShowCard
                key={item.show.id}
                image={item.show.image?.medium}
                id={item.show.id}
                name={item.show.name}
                type={item.show.type}
                runtime={item.show.runtime}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
