import Script from "next/script";

const GoogleAnalytics = ({
  ga_id,
  ga_key,
}: {
  ga_id: string;
  ga_key: string;
}) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
      }}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': '${ga_id}/${ga_key}',
              'event_callback': callback
            });
           return false;
          }
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;
