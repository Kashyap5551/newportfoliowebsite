{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Popup
      </div> */
}

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 100 }}
      >
        <Suspense fallback={<Loader />}>
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
