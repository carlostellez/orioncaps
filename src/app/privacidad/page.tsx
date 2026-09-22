import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description: `Cómo ${siteConfig.name} recolecta, usa y protege los datos personales de quienes se registran o cotizan a través de este sitio.`,
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {siteConfig.name}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Política de tratamiento de datos personales
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última actualización: fecha pendiente de publicación oficial del sitio.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              1. Responsable del tratamiento
            </h2>
            <p className="mt-2">
              {siteConfig.name}, con domicilio en {siteConfig.contact.address},
              es responsable del tratamiento de los datos personales que
              recolecta a través de este sitio web, de conformidad con la Ley
              1581 de 2012 y el Decreto 1377 de 2013 de Colombia (régimen de
              protección de datos personales / habeas data).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              2. Datos que recolectamos
            </h2>
            <p className="mt-2">
              A través del formulario de registro de distribuidores/mayoristas
              recolectamos: nombre completo, nombre del negocio o empresa,
              ciudad, producto de interés, cantidad estimada, teléfono de
              contacto y correo electrónico. No recolectamos datos financieros
              ni información sensible a través de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. Finalidad del tratamiento
            </h2>
            <p className="mt-2">
              Usamos estos datos únicamente para: responder tu solicitud de
              cotización o registro como distribuidor/mayorista, contactarte
              por WhatsApp, teléfono o correo con esa misma finalidad
              comercial, y llevar un registro interno de clientes y
              distribuidores. No vendemos ni compartimos tus datos con
              terceros para fines distintos a los aquí descritos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              4. Analítica del sitio
            </h2>
            <p className="mt-2">
              Este sitio puede usar herramientas de analítica web (como
              Google Analytics) y píxeles de publicidad (como Meta Pixel o el
              Insight Tag de LinkedIn) para entender cómo se usa el sitio y
              medir el desempeño de campañas publicitarias. Estas
              herramientas pueden usar cookies o tecnologías similares. Puedes
              controlar o bloquear las cookies desde la configuración de tu
              navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              5. Tus derechos como titular de los datos
            </h2>
            <p className="mt-2">
              De acuerdo con la ley colombiana, tienes derecho a: conocer,
              actualizar y rectificar tus datos; solicitar prueba de la
              autorización otorgada; ser informado sobre el uso dado a tus
              datos; presentar quejas ante la Superintendencia de Industria y
              Comercio; revocar la autorización y/o solicitar la supresión de
              tus datos cuando no exista un deber legal o contractual que
              impida eliminarlos; y acceder de forma gratuita a tus datos
              personales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              6. Cómo ejercer tus derechos
            </h2>
            <p className="mt-2">
              Puedes escribirnos a{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-accent underline underline-offset-2"
              >
                {siteConfig.contact.email}
              </a>{" "}
              o al WhatsApp{" "}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-2"
              >
                +{siteConfig.contact.whatsapp}
              </a>{" "}
              indicando el derecho que deseas ejercer. Responderemos dentro de
              los plazos que establece la ley.
            </p>
          </section>
        </div>

        <p className="mt-12 rounded-2xl border border-border bg-surface/60 p-5 text-xs leading-relaxed text-muted">
          Nota: este texto es una plantilla general de referencia, no
          constituye asesoría legal. Antes de publicar el sitio de forma
          definitiva, te recomendamos que un abogado especializado en
          protección de datos revise y ajuste esta política a la operación
          real del negocio (incluyendo si se implementa la inscripción ante
          el Registro Nacional de Bases de Datos, cuando aplique).
        </p>
      </main>
      <Footer />
    </>
  );
}
