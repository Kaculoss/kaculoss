import Script from "next/script";

const GoogleAnalytics = ({
  ga_id,
  ga_key,
}: {
  ga_id?: string;
  ga_key?: string;
}) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
    <Script
      id="google-analytics"
      // dangerouslySetInnerHTML={{
      //   __html: `
      //     window.dataLayer = window.dataLayer || [];
      //     function gtag(){dataLayer.push(arguments);}
      //     gtag('js', new Date());

      //     gtag('config', '${ga_id || "AW-11360768460"}');
      //   `,
      // }}
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${ga_id || "AW-11360768460"}');
      `}
    </Script>
    <Script
      id="google-analytics"
      // dangerouslySetInnerHTML={{
      //   __html: `
      //     gtag('event', 'conversion', {
      //       'send_to': '${ga_id || "AW-11360768460"}/${
      //     ga_key || "W0CoCNvIoOgYEMyjnqkq"
      //   }'
      //     });
      //   `,
      // }}
    >
      {`
        gtag('event', 'conversion', {'send_to': '${ga_id || "AW-11360768460"}/${
        ga_key || "W0CoCNvIoOgYEMyjnqkq"
      }'});
      `}
    </Script>
  </>
);
export default GoogleAnalytics;
