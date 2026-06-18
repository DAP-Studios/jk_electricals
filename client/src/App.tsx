import * as React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import WhatsappBubble from "./components/WhatsappBubble";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const LocationPage = React.lazy(() => import("./pages/LocationPage"));
const CategoryAuthorityPage = React.lazy(() => import("./pages/CategoryAuthorityPage"));
const BrandAuthorityPage = React.lazy(() => import("./pages/BrandAuthorityPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const ResourceGuidePage = React.lazy(() => import("./pages/ResourceGuidePage"));
const HeroButtonExpendableDemo = React.lazy(
  () => import("./components/ui/hero-button-expendable-demo"),
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/category/:category" component={ProductsPage} />
      <Route path="/products/brand/:brand" component={ProductsPage} />
      <Route path="/products/:category" component={CategoryAuthorityPage} />
      <Route path="/brands/:brand" component={BrandAuthorityPage} />
      <Route path="/electrical-supplier-:location" component={LocationPage} />
      <Route path="/resources/:guide" component={ResourceGuidePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
      <Route
        path="/demo/hero-button-expendable"
        component={HeroButtonExpendableDemo}
      />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <React.Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-white text-sm font-medium text-slate-500">
                Loading site...
              </div>
            }
          >
            <Router />
            <WhatsappBubble />
          </React.Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
