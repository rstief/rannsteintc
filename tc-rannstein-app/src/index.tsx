import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IntroPage from './components/pages/IntroPage';
import InfoPage from './components/pages/InfoPage';
import AssessmentPage from './components/pages/AssessmentPage';
import SeekHelpPage from './components/pages/SeekHelpPage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import ImageIntroPage from './components/pages/ImageIntroPage';
import CommunityPage from './components/pages/CommunityPage';
import './i18n/i18n';
import CommunityOrgPage from './components/pages/CommunityOrgPage';
import LegalResourcesPage from './components/pages/LegalResources';
import LegalResourcesLawyerPage from './components/pages/LegalResourcesLawyer';
import LegalResourcesCrimePage from './components/pages/LegalResourcesCrimePage';
import ReportingCrime from './components/pages/ReportingCrime';
import ProceduresPage from './components/pages/ProceduresPage';
import NotImplementedPage from './components/pages/NotImplemented';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#2D5E6E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Raleway'
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageIntroPage />,
  },
  {
    path: "intro/",
    element: <IntroPage />,
  },
  {
    path: "lilo/",
    element: <App />,
    children: [
      {
        path: "assessment",
        element: <AssessmentPage />,
      },
      {
        path: "seekhelp",
        element: <SeekHelpPage />,
      },
      {
        path: "infopage",
        element: <InfoPage />,
      },
      {
        path: "communityresources",
        element: <CommunityPage/>
      },
      {
        path: "communityorg/:orgId",
        element: <CommunityOrgPage />,
      },
      {
        path: "legalresources",
        element: <LegalResourcesPage />,
      },
      {
        path: "legalcrimeresources/:crime",
        element: <LegalResourcesCrimePage/>
      },
      {
        path: "legalresourceslawyer",
        element: <LegalResourcesLawyerPage />,
      },
      {
        path: "reportcrime",
        element: <ReportingCrime/>
      },
      {
        path: "procedures/:key",
        element: <ProceduresPage/>
      },
      {
        path: "notimplemented",
        element: <NotImplementedPage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//strict mode does not work with the chabot: https://github.com/LucasBassetti/react-simple-chatbot/issues/346
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
