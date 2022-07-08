import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="icon" href="../public/favicon.ico" />
          <title>CRMi - Dashboard</title>
          <link rel="stylesheet" href="vendor_components/bootstrap/dist/css/bootstrap.css" />

          <link rel="stylesheet" href="css/vendors_css.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/skin_color.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="../public/js/vendors.min.js"></Script>
          <Script src="../public/js/pages/chat-popup.js"></Script>
          <Script src="../public/icons/feather-icons/feather.min.js"></Script>
          <Script src="../public/vendor_components/apexcharts-bundle/dist/apexcharts.js"></Script>
          <Script src="../public/vendor_components/raphael/raphael.min.js"></Script>
          <Script src="../public/vendor_components/morris.js/morris.min.js"></Script>
          <Script src="../public/js/template.js"></Script>
          <Script src="../public/js/pages/dashboard.js"></Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument