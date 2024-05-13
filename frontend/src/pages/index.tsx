import Header from "@/components/Header";
import { useCountriesQuery } from "@/graphql/generated/schema";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data, loading, error } = useCountriesQuery();
  const router = useRouter();
  return (
    <>
      <Header />
      <div
        style={{
          margin: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        {data?.countries?.map((country: any, index: number) => {
          return (
            <Button
              onClick={() => router.push(`/country/${country.code}`)}
              key={index}
            >
              <Typography>
                {country.emoji} {country.name}
              </Typography>
            </Button>
          );
        })}
      </div>
    </>
  );
}
