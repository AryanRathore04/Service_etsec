const React = require("react");

module.exports = {
  MemoryRouter: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  BrowserRouter: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  Link: ({ to, children, ...rest }) =>
    React.createElement("a", { href: to, ...rest }, children),
  Outlet: () => React.createElement(React.Fragment, null, null),
  ScrollRestoration: () => React.createElement(React.Fragment, null, null),
  useNavigate: () => () => {},
};
