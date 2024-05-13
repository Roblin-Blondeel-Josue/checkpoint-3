import Header from "@/components/Header";
import {
  CountriesDocument,
  useAddCountryMutation,
} from "@/graphql/generated/schema";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function addCountry() {
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
        <AddCountryForm />
      </div>
    </>
  );
}
interface countryForm {
  name: string | null;
  code: string | null;
  emoji: string | null;
}
const AddCountryForm = () => {
  const [state, setState] = useState<countryForm>({
    name: null,
    code: null,
    emoji: null,
  });
  const router = useRouter();
  const [createCountry] = useAddCountryMutation({
    refetchQueries: [
      {
        query: CountriesDocument,
      },
    ],
  });
  return (
    <Card sx={{ display: "flex", flexDirection: "column", width: "20vw" }}>
      <CardHeader title="Ajouter un pays" />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          required
          id="outlined-required"
          label="Nom du Pays"
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e?.target?.value })}
        />
        <TextField
          required
          id="outlined-required"
          label="Code du Pays"
          value={state?.code}
          onChange={(e) => setState({ ...state, code: e?.target?.value })}
        />
        <TextField
          required
          id="outlined-required"
          label="Drapeau du Pays"
          value={state?.emoji}
          onChange={(e) => setState({ ...state, emoji: e?.target?.value })}
        />

        <Button
          onClick={() => {
            if (
              state.name !== null &&
              state.code !== null &&
              state.emoji !== null
            ) {
              createCountry({
                variables: {
                  data: {
                    name: state?.name,
                    code: state?.code,
                    emoji: state?.emoji,
                  },
                },
              });
              toast.success("Le pays a bien été créer");
              router.push(`/`);
            }
          }}
        >
          Envoyer
        </Button>
      </CardContent>
    </Card>
  );
};
