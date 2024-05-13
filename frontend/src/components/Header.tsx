import { Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#229A16",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2rem",
        padding: "2rem",
      }}
    >
      <Typography color={"#F4F6F8"} variant="h2">
        Checkpoint : frontend
      </Typography>
      <Link style={{ textDecoration: "none", color: "#F4F6F8" }} href="/">
        Pays
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#F4F6F8" }}
        href="/country/add"
      >
        Ajouter
      </Link>
    </header>
  );
}
