import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Services.css";
import { SHOW_WAREHOUSING } from "../siteSettings";

// Item numbers and photo sides shift up by one after item 05 while warehousing is hidden.
const num = (n) => String(!SHOW_WAREHOUSING && n > 5 ? n - 1 : n).padStart(2, "0");
const detailClass = (n) => (Number(num(n)) % 2 === 0 ? "service-detail service-detail--reverse" : "service-detail");

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="services-page">
     <section aria-labelledby="services-heading" className="services-intro">
      <div className="services-shell services-intro__layout">
       <div className="services-intro__copy">
        <p className="services-eyebrow">
         LOGISTICS & PACKING SERVICES
        </p>
        <h1 id="services-heading">
         Support for every stage of your shipment.
        </h1>
        <p className="services-intro__lead">
         Move your goods by air, ocean or road. Bring storage, packing and distribution together with the support your cargo needs along the way.
        </p>
        <div className="services-actions">
         <a className="services-button services-button--primary" href="/contact">
          Request a quote
          <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
           <path d="M7 7h10v10">
           </path>
           <path d="M7 17 17 7">
           </path>
          </svg>
         </a>
         <a className="services-text-link" href="#air-freight">
          Explore our services
          <svg aria-hidden="true" className="lucide lucide-arrow-down" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 5v14">
           </path>
           <path d="m19 12-7 7-7-7">
           </path>
          </svg>
         </a>
        </div>
        <p className="services-intro__coverage">
         <span aria-hidden="true">
         </span>
         Established in 2015. Operating in India and Bahrain.
        </p>
       </div>
       <nav aria-label="Explore services" className="services-index">
        <p className="services-index__label">
         FIND THE SUPPORT YOU NEED
        </p>
        <ol>
         <li>
          <a href="#air-freight">
           <span aria-hidden="true" className="services-index__number">
            01
           </span>
           <span>
            Air Freight
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#ocean-freight">
           <span aria-hidden="true" className="services-index__number">
            02
           </span>
           <span>
            Ocean Freight
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#customs-clearance">
           <span aria-hidden="true" className="services-index__number">
            03
           </span>
           <span>
            Customs Clearance
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#land-transport">
           <span aria-hidden="true" className="services-index__number">
            04
           </span>
           <span>
            Land Transport
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         {SHOW_WAREHOUSING && (
         <li>
          <a href="#warehouse-storage">
           <span aria-hidden="true" className="services-index__number">
            05
           </span>
           <span>
            Warehouse Storage & Distribution
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         )}
         <li>
          <a href="#cargo-handling">
           <span aria-hidden="true" className="services-index__number">
            {num(6)}
           </span>
           <span>
            Cargo Handling
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#packaging-solutions">
           <span aria-hidden="true" className="services-index__number">
            {num(7)}
           </span>
           <span>
            Packing & Copacking Solutions
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#specialist-cargo">
           <span aria-hidden="true" className="services-index__number">
            {num(8)}
           </span>
           <span>
            Specialist cargo
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#value-added-services">
           <span aria-hidden="true" className="services-index__number">
            {num(9)}
           </span>
           <span>
            Value-added services
           </span>
           <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10">
            </path>
            <path d="M7 17 17 7">
            </path>
           </svg>
          </a>
         </li>
         <li>
          <a href="#more-services">
           <span aria-hidden="true" className="services-index__number">{num(10)}</span>
           <span>More ways to ship</span>
           <svg aria-hidden="true" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
           </svg>
          </a>
         </li>
        </ol>
       </nav>
      </div>
     </section>
     <div className="services-shell services-details">
      <section aria-labelledby="air-freight-heading" className="service-detail" id="air-freight">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/air-480.webp 480w, /optimized/service-page/air-960.webp 960w, /service-page/air.webp 1200w" type="image/webp"/>
         <img alt="Air freight cargo transport" decoding="async" height="672" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/air.jpg" srcSet="/optimized/service-page/air-480.jpg 480w, /optimized/service-page/air-960.jpg 960w, /service-page/air.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         01
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         FREIGHT & TRANSPORTATION
        </p>
        <h2 id="air-freight-heading">
         Air Freight
        </h2>
        <p className="service-detail__description">
         Air freight for express, sensitive and high-value shipments. Combine your air cargo movement with booking and pickup support, tracking and shipment updates.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Express shipments
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Sensitive cargo
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            High-value shipments
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Air Freight with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      <section aria-labelledby="ocean-freight-heading" className="service-detail service-detail--reverse" id="ocean-freight">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/ocean-480.webp 480w, /optimized/service-page/ocean-960.webp 960w, /service-page/ocean.webp 1200w" type="image/webp"/>
         <img alt="Container ship carrying ocean freight" decoding="async" height="672" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/ocean.jpg" srcSet="/optimized/service-page/ocean-480.jpg 480w, /optimized/service-page/ocean-960.jpg 960w, /service-page/ocean.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         02
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         FREIGHT & TRANSPORTATION
        </p>
        <h2 id="ocean-freight-heading">
         Ocean Freight
        </h2>
        <p className="service-detail__description">
         Ocean freight options for different cargo volumes and shipment needs. Choose support for part-container shipments, full containers or breakbulk cargo, with customs clearance and documentation services available alongside your transport arrangements.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Less-than-container-load (LCL) shipments
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Full-container-load (FCL) shipments
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Breakbulk cargo
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Ocean Freight with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      <section aria-labelledby="customs-clearance-heading" className="service-detail" id="customs-clearance">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/custom-480.webp 480w, /optimized/service-page/custom-960.webp 960w, /service-page/custom.webp 1200w" type="image/webp"/>
         <img alt="Shipment documents and cargo clearance support" decoding="async" height="800" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/custom.jpg" srcSet="/optimized/service-page/custom-480.jpg 480w, /optimized/service-page/custom-960.jpg 960w, /service-page/custom.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         03
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         DOCUMENTATION & SHIPMENT SUPPORT
        </p>
        <h2 id="customs-clearance-heading">
         Customs Clearance
        </h2>
        <p className="service-detail__description">
         Bring customs clearance and shipment documentation into your logistics plan. Our value-added services include certification and legalization of documents, alongside shipment alerts and confirmations.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Customs clearance support
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Certification and legalization of documents
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Shipment alerts and confirmations
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Customs Clearance with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      <section aria-labelledby="land-transport-heading" className="service-detail service-detail--reverse" id="land-transport">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/land-480.webp 480w, /optimized/service-page/land-960.webp 960w, /service-page/land.webp 1200w" type="image/webp"/>
         <img alt="Truck used for ground transportation" decoding="async" height="672" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/land.jpg" srcSet="/optimized/service-page/land-480.jpg 480w, /optimized/service-page/land-960.jpg 960w, /service-page/land.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         04
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         FREIGHT & TRANSPORTATION
        </p>
        <h2 id="land-transport-heading">
         Land Transport
        </h2>
        <p className="service-detail__description">
         Ground transportation for domestic and international movements, including last-mile delivery. Connect your transport arrangements with cargo pickup, storage or distribution support as needed.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Domestic transportation
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            International ground transportation
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Last-mile delivery
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Land Transport with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      {SHOW_WAREHOUSING && (
      <section aria-labelledby="warehouse-storage-heading" className="service-detail" id="warehouse-storage">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/warehouse-480.webp 480w, /optimized/service-page/warehouse-960.webp 960w, /service-page/warehouse.webp 1200w" type="image/webp"/>
         <img alt="Warehouse storage racks and inventory" decoding="async" height="800" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/warehouse.jpg" srcSet="/optimized/service-page/warehouse-480.jpg 480w, /optimized/service-page/warehouse-960.jpg 960w, /service-page/warehouse.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         05
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         WAREHOUSE MANAGEMENT
        </p>
        <h2 id="warehouse-storage-heading">
         Warehouse Storage & Distribution
        </h2>
        <p className="service-detail__description">
         Storage matched to your shipment needs, with temperature-controlled options. Distribution support covers stock movement, order preparation and dispatch coordination to help prepare goods for their next destination.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Warehouse storage
           </h3>
           <p>
            Storage options matched to shipment needs, including temperature-controlled requirements.
           </p>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Stock movement and local distribution
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Order preparation and dispatch coordination
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Warehouse Storage & Distribution with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      )}
      <section aria-labelledby="cargo-handling-heading" className={detailClass(6)} id="cargo-handling">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/cargo-480.webp 480w, /optimized/service-page/cargo-960.webp 960w, /service-page/cargo.webp 1200w" type="image/webp"/>
         <img alt="Cargo preparation and handling" decoding="async" height="800" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/cargo.jpg" srcSet="/optimized/service-page/cargo-480.jpg 480w, /optimized/service-page/cargo-960.jpg 960w, /service-page/cargo.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         {num(6)}
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         CARGO PREPARATION & MOVEMENT
        </p>
        <h2 id="cargo-handling-heading">
         Cargo Handling
        </h2>
        <p className="service-detail__description">
         Loading, unloading and preparation for onward movement. Coordinate cargo handling with storage, packing and transport support so that your goods are ready for the next stage of their journey.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Loading and unloading
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Preparation for onward movement
           </h3>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Pallet preparation for handling and dispatch
           </h3>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Cargo Handling with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
      <section aria-labelledby="packaging-solutions-heading" className={detailClass(7)} id="packaging-solutions">
       <figure className="service-detail__media">
        <picture>
         <source sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" srcSet="/optimized/service-page/packaging-480.webp 480w, /optimized/service-page/packaging-960.webp 960w, /service-page/packaging.webp 1200w" type="image/webp"/>
         <img alt="Packing and preparing goods for dispatch" decoding="async" height="669" loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 44vw, 520px" src="/service-page/packaging.jpg" srcSet="/optimized/service-page/packaging-480.jpg 480w, /optimized/service-page/packaging-960.jpg 960w, /service-page/packaging.jpg 1200w" width="1200"/>
        </picture>
        <span aria-hidden="true" className="service-detail__number">
         {num(7)}
        </span>
       </figure>
       <div className="service-detail__copy">
        <p className="services-eyebrow">
         PACKING SOLUTIONS
        </p>
        <h2 id="packaging-solutions-heading">
         Packing & Copacking Solutions
        </h2>
        <p className="service-detail__description">
         Prepare products for storage, distribution and dispatch with packing, repacking and copacking support. Services cover protective materials, product combinations, labelling, stock sorting and pallet preparation.
        </p>
        <ul className="service-capabilities">
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Packing and repacking
           </h3>
           <p>
            Carton packing, protective wrapping, cushioning, dividers and pack conversion.
           </p>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Copacking and labelling
           </h3>
           <p>
            Product bundles, multipacks, promotional and seasonal combinations, barcode labels, sleeves, inserts and display-ready packs.
           </p>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Inventory and sorting
           </h3>
           <p>
            Item identification, stock counts and sorting by product, order or destination.
           </p>
          </div>
         </li>
         <li>
          <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 6 9 17l-5-5">
           </path>
          </svg>
          <div>
           <h3>
            Quality checks and pallet preparation
           </h3>
           <p>
            Check pack condition, quantities and labels, then prepare pallets for handling and dispatch.
           </p>
          </div>
         </li>
        </ul>
        <a aria-label="Discuss Packing & Copacking Solutions with our team" className="services-text-link" href="/contact">
         Discuss your shipment
         <svg aria-hidden="true" className="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14">
          </path>
          <path d="m12 5 7 7-7 7">
          </path>
         </svg>
        </a>
       </div>
      </section>
     </div>
     <section aria-labelledby="specialist-heading" className="services-specialist" id="specialist-cargo">
      <div className="services-shell">
       <div className="services-section-heading">
        <p className="services-eyebrow">
         SPECIALIST CARGO
        </p>
        <h2 id="specialist-heading">
         When your cargo needs a different approach.
        </h2>
        <p>
         Support for shipments with specific handling, documentation or transport requirements.
        </p>
       </div>
       <div className="services-specialist__grid">
        <article id="dangerous-goods">
         <svg aria-hidden="true" className="lucide lucide-shield-check" fill="none" height="29" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="29" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
          </path>
          <path d="m9 12 2 2 4-4">
          </path>
         </svg>
         <h3>
          Dangerous Goods Handling
         </h3>
         <p>
          Support for dangerous goods shipments, including documentation and packing requirements appropriate to the cargo.
         </p>
        </article>
        <article id="events-project-cargo">
         <svg aria-hidden="true" className="lucide lucide-package-check" fill="none" height="29" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="29" xmlns="http://www.w3.org/2000/svg">
          <path d="m16 16 2 2 4-4">
          </path>
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14">
          </path>
          <path d="m7.5 4.27 9 5.15">
          </path>
          <polyline points="3.29 7 12 12 20.71 7">
          </polyline>
          <line x1="12" x2="12" y1="22" y2="12">
          </line>
         </svg>
         <h3>
          Industrial Machinery & Project Cargo
         </h3>
         <p>
          Planning and handling for industrial equipment and oversized cargo, taking account of load and road requirements and suitable transport arrangements.
         </p>
        </article>
        <article id="ata-carnet">
         <svg aria-hidden="true" className="lucide lucide-file-check-corner" fill="none" height="29" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="29" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6">
          </path>
          <path d="M14 2v5a1 1 0 0 0 1 1h5">
          </path>
          <path d="m14 20 2 2 4-4">
          </path>
         </svg>
         <h3>
          Carnet Shipments
         </h3>
         <p>
          Coordination of carnet-based temporary shipments and return movements.
         </p>
        </article>
       </div>
      </div>
     </section>
     <section aria-labelledby="value-added-heading" className="services-shell services-value-added" id="value-added-services">
      <div className="services-section-heading">
       <p className="services-eyebrow">
        VALUE-ADDED SERVICES
       </p>
       <h2 id="value-added-heading">
        The support around the shipment.
       </h2>
       <p>
        Coordinate the practical details that connect cargo booking, documentation and onward movement.
       </p>
      </div>
      <ul className="services-value-added__list">
       <li id="customs-support">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Customs clearance
        </span>
       </li>
       <li id="cargo-insurance">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Cargo insurance
        </span>
       </li>
       <li id="cargo-booking">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Cargo booking and pickup
        </span>
       </li>
       <li id="tracking-tracing">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Tracking and tracing
        </span>
       </li>
       <li id="document-support">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Certification and legalization of documents
        </span>
       </li>
       <li id="shipment-alerts">
        <svg aria-hidden="true" className="lucide lucide-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M20 6 9 17l-5-5">
         </path>
        </svg>
        <span>
         Shipment alerts and confirmations
        </span>
       </li>
      </ul>
     </section>
     <section aria-labelledby="services-more-heading" className="services-shell services-more" id="more-services">
      <div className="services-section-heading">
       <p className="services-eyebrow">MORE WAYS TO SHIP</p>
       <h2 id="services-more-heading">Support for parcels and personal shipments.</h2>
      </div>
      <div className="services-more__grid">
       <article id="international-courier">
        <h3>International Courier</h3>
        <p>Send parcels and documents internationally. Share your shipment details with our team to discuss courier options.</p>
        <a className="services-text-link" href="/contact">Discuss your shipment</a>
       </article>
       <article id="excess-baggage">
        <h3>Excess Baggage</h3>
        <p>Arrange a separate shipment for excess baggage. Tell us the origin, destination and timing so we can discuss the next steps.</p>
        <a className="services-text-link" href="/contact">Discuss your shipment</a>
       </article>
      </div>
     </section>
     <section aria-labelledby="services-contact-heading" className="services-shell services-contact">
      <div>
       <p className="services-eyebrow">
        LET’S PLAN YOUR SHIPMENT
       </p>
       <h2 id="services-contact-heading">
        Tell us what you need to move.
       </h2>
       <p>
        Share your cargo details, pickup location, destination and timing. Our team can help you discuss the services you need.
       </p>
      </div>
      <div className="services-contact__actions">
       <a className="services-button services-button--light" href="/contact">
        Contact our team
        <svg aria-hidden="true" className="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </a>
       <a href="mailto:connect@wellreachlogistics.com">
        connect@wellreachlogistics.com
       </a>
      </div>
     </section>
    </div>
  );
}
