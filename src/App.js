import React from "react";
import { Card, Navbar } from "./views/components";

const App = () => {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navbar />
      <section className="mx-auto container my-8 w-full flex justify-center">
        <Card />
      </section>
    </main>
  );
};

export default App;
