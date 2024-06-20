import { useTranslations } from "next-intl";

export default function Home() {
  const translation = useTranslations("Index");
  return <>{translation("title")}</>;
}
