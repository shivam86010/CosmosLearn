// import React, { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import CosmosLoader from "../../Components/CosmosLoader ";

// // ✅ Lazy imports for all components
// const Layout = lazy(() => import("../Layout"));
// const Main = lazy(() => import("../../Pages/index"));
// const About = lazy(() => import("../../Pages/About"));
// const Explore = lazy(() => import("../../Pages/Explore"));
// const Learning = lazy(() => import("../../Pages/Learning"));
// const Pricing = lazy(() => import("../../Pages/Pricing"));
// const Blog = lazy(() => import("../../Pages/Blog"));
// const Careers = lazy(() => import("../../Pages/Careers"));
// const StudyTools = lazy(() => import("../../Pages/StudyTools"));
// const Trial = lazy(() => import("../../Pages/Trial"));
// const NotFound = lazy(() => import("../../Pages/PageNotFound"));

// function Index() {
//   return (
//     <Suspense fallback={<CosmosLoader />}>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Main />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/learning" element={<Learning />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/study-tools" element={<StudyTools />} />
//           <Route path="/trial" element={<Trial />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default Index;


import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CosmosLoader from "../../Components/CosmosLoader ";

// ✅ Eager-load critical pages
import Layout from "../Layout";
import Main from "../../Pages/index";
import About from "../../Pages/About";
import BlogPost from '../../Pages/BlogPost'
import Subjects from "../../Pages/Subjects";
import SubjectExplorer from "../../Pages/SubjectExplore";
import Module from '../../Pages/Module'
// ✅ Lazy-load secondary/heavy pages
const Explore = lazy(() => import("../../Pages/Explore"));
const Learning = lazy(() => import("../../Pages/Learning"));
const Pricing = lazy(() => import("../../Pages/Pricing"));
const Blog = lazy(() => import("../../Pages/Blog"));
const Careers = lazy(() => import("../../Pages/Careers"));
const StudyTools = lazy(() => import("../../Pages/StudyTools"));
const Trial = lazy(() => import("../../Pages/Trial"));
const NotFound = lazy(() => import("../../Pages/PageNotFound"));

// ✅ Custom Suspense with delayed fallback
function DelayedSuspense({ children }) {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(true), 100); // delay 300ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={showFallback ? <CosmosLoader /> : null}>
      {children}
    </Suspense>
  );
}

function Index() {
  // ✅ Preload likely routes after Home loads
  useEffect(() => {
    import("../../Pages/Blog");
    import("../../Pages/Pricing");
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Eager-loaded routes */}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="/subject/:subject" element={<SubjectExplorer />} />
        <Route path="/module/:subject?" element={<Module />} />
        {/* Lazy-loaded routes wrapped with delayed loader */}
        <Route
          path="/explore"
          element={
            <DelayedSuspense>
              <Explore />
            </DelayedSuspense>
          }
        />
        <Route
          path="/learning"
          element={
            <DelayedSuspense>
              <Learning />
            </DelayedSuspense>
          }
        />
        <Route
          path="/pricing"
          element={
            <DelayedSuspense>
              <Pricing />
            </DelayedSuspense>
          }
        />
        <Route
          path="/blog"
          element={
            <DelayedSuspense>
              <Blog />
            </DelayedSuspense>
          }
        />
        <Route
          path="/careers"
          element={
            <DelayedSuspense>
              <Careers />
            </DelayedSuspense>
          }
        />
        <Route
          path="/study-tools"
          element={
            <DelayedSuspense>
              <StudyTools />
            </DelayedSuspense>
          }
        />
        <Route
          path="/trial"
          element={
            <DelayedSuspense>
              <Trial />
            </DelayedSuspense>
          }
        />

        <Route path="/blog/:id" element={<BlogPost />} />
      </Route>

      {/* Not Found */}
      <Route
        path="*"
        element={
          <DelayedSuspense>
            <NotFound />
          </DelayedSuspense>
        }
      />
    </Routes>
  );
}

export default Index;

