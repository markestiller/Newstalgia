import { useState } from "react";
import "./Page.css";
import Articles from "./Articles";
import NewstalgiaTitle from "./NewstalgiaTitle";

function Page() {
  return (
    <>
        <NewstalgiaTitle/>
        <Articles/>
    </>
  );
}

export default Page;
