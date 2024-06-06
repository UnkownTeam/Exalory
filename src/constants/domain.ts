export let domainUrl = "https://exalory.vercel.app/api";

if (process.env.NODE_ENV !== "production") {
  domainUrl = "http://localhost:3000/api";
}
