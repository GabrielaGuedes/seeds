import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { BrowserRouter } from "react-router-dom";

const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <App />
        </ApolloHooksProvider>
      </ApolloProvider>
    </BrowserRouter>,
    document.body.appendChild(document.createElement("div"))
  );
});
