import Header from "@/components/Header";
import { Country, useCountryQuery } from "@/graphql/generated/schema";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface countryCard {
  __typename?: "Country";
  id: number;
  name: string;
  emoji?: string;
  code: string;
  continent?: {
    __typename?: "Continent";
    name?: string;
  } | null;
}
export default function CountryPage() {
  const router = useRouter();
  const code = router.query.countryID;
  const { data, loading, error } = useCountryQuery({
    variables: { code: code as string },
  });
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CountryCard country={data?.country} />
      </div>
    </>
  );
}

const CountryCard = ({ country }: { country?: countryCard }) => {
  return (
    <Card
      style={{
        width: "15vw",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardHeader
        title={<Typography variant="h3">{country?.emoji}</Typography>}
      />
      <CardContent>
        <Typography>Name : {country?.name}</Typography>
        <Typography>
          Continent :
          {country?.continent
            ? ` ${country?.continent?.name}`
            : "Aucune donnée"}
        </Typography>
      </CardContent>
    </Card>
  );
};
