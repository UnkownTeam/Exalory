"use client";

import { redirect } from "next/navigation";

const NotFound = () => {
  redirect("/en");
  return (
    <html>
      <body>
        <h1>Not Found</h1>
      </body>
    </html>
  );
};

export default NotFound;
