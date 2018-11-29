import App, { Container } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import React from "react";
import NProgress from "next-nprogress/component";
import { ThemeProvider } from "styled-components";

const theme = {
  greyColor: "#545e5f",
  whiteColor: "white",
  yellowColor: "#FEF48B",
  redColor: "#E8674A",
  lightBlueColor: "#F2FEFE",
  darkBlueColor: "#DBE9F1",
  blackColor: "#34495e",
  maxWidth: "1400px",
  borderRadius: "5px",
  cardShadow: "box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);"
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <>
          <NProgress
            color={theme.blackColor}
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner={false}
          />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      </Container>
    );
  }
}

export default withGA("XXXX", Router)(MyApp);
