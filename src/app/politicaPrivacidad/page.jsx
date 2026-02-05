"use client"
import Image from "next/image"

const SectionOne = () => {
    return (
        <div className="flex justify-center w-full h-auto text-center select-none py-6 ">
            <div className="max-w-3xl ">
                <h1 className=" font-bold text-emerald-600 text-3xl">
                    Política de Privacidad
                </h1>
                <p className="mt-4">
                    Si estás leyendo esto, es porque quiero explicarte con
                    claridad qué hago con tus datos personales y cómo los
                    protejo.
                </p>

                <h3 className="mt-6 font-black">
                    Mi compromiso con tus datos personales
                </h3>

                <p className="mt-4">
                    En Guatemala, la protección de la privacidad y de los datos
                    personales se encuentra reconocida a través de principios
                    constitucionales y normas relacionadas con los derechos
                    humanos. En 10enconta adopto estos principios y aplico
                    buenas prácticas en materia de protección de datos,
                    inspiradas en el Habeas Data.
                </p>

                <p className="mt-4">
                    Este compromiso se fundamenta en la Constitución Política de
                    la República de Guatemala y en tratados internacionales de
                    derechos humanos, como la Convención Americana sobre
                    Derechos Humanos y el Pacto Internacional de Derechos
                    Civiles y Políticos.
                </p>

                <p className="mt-4">
                    Además, la Ley de Acceso a la Información Pública establece
                    límites para la protección de los datos personales,
                    impidiendo su divulgación sin el consentimiento del titular.
                </p>

                <p className="mt-4">
                    Los datos personales recopilados a través de este sitio web
                    serán tratados de forma confidencial y utilizados únicamente
                    para prestar los servicios de 10conta, atender solicitudes o
                    enviar información relacionada, siempre con tu
                    consentimiento.
                </p>

                <p className="mt-4">
                    En cualquier momento puedes solicitar el acceso,
                    rectificación o eliminación de tus datos personales.
                </p>
            </div>
        </div>
    )
}

const Sectiontwo = () => {
    return (
        <div className="flex justify-center w-full h-auto text-center py-6 select-none">
            <div className="max-w-3xl ">
                <h2 className="text-2xl font-bold text-emerald-600">
                    Responsable del tratamiento de tus datos personales
                </h2>

                <ul className="mt-4 text-left list-disc list-inside">
                    <li>
                        <strong>Nombre comercial:</strong> 10enconta
                    </li>
                    <li>
                        <strong>Responsable:</strong> 10enconta
                    </li>
                    <li>
                        <strong>País:</strong> Guatemala
                    </li>
                    <li>
                        <strong>Correo electrónico:</strong>{" "}
                        <a
                            href="mailto:privacidad@10enconta.com"
                            className="text-emerald-600 underline">
                            privacidad@10enconta.com
                        </a>
                    </li>
                </ul>

                <h3 className="mt-8 font-black">
                    ¿Cómo se obtienen tus datos personales?
                </h3>

                <p className="mt-4">
                    Los datos personales se obtienen únicamente cuando tú los
                    proporcionas de forma voluntaria a través de este sitio web,
                    en los siguientes casos:
                </p>

                <ul className="mt-4 text-left list-disc list-inside">
                    <li>
                        <strong>Formulario de registro:</strong> para crear una
                        cuenta y acceder a las funcionalidades de 10enconta.
                    </li>
                    <li>
                        <strong>Formulario de contacto:</strong> para consultas,
                        soporte o solicitudes de información.
                    </li>
                    <li>
                        <strong>Formulario de contratación o pago:</strong> para
                        gestionar pagos, facturación, comprobantes y
                        comunicaciones relacionadas con el servicio.
                    </li>
                    <li>
                        <strong>Zonas privadas de la plataforma:</strong> para
                        permitir el acceso a servicios y funcionalidades
                        exclusivas para usuarios registrados.
                    </li>
                </ul>

                <p className="mt-4">
                    El usuario garantiza que los datos proporcionados son
                    veraces, completos y actualizados.
                </p>
            </div>
        </div>
    )
}

const SectionThree = () => {
    return (
        <div className="flex justify-center w-full h-auto px-6 py-6 text-center select-none">
            <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-emerald-600">
                    Legitimación para el tratamiento de tus datos personales
                </h2>

                <p className="mt-4">
                    El tratamiento de tus datos personales en 10enconta se
                    realiza conforme a principios de legalidad, transparencia y
                    buena fe, tomando como referencia buenas prácticas
                    internacionales en materia de protección de datos.
                </p>

                <ul className="mt-6 text-left list-disc list-inside space-y-4">
                    <li>
                        <strong>Consentimiento:</strong> cuando te registras,
                        nos contactas o aceptas recibir comunicaciones, otorgas
                        tu consentimiento informado y voluntario para el
                        tratamiento de tus datos personales.
                    </li>

                    <li>
                        <strong>Relación contractual:</strong> el tratamiento de
                        tus datos es necesario para la prestación de los
                        servicios de 10enconta, incluyendo gestión de cuentas,
                        pagos, facturación y soporte.
                    </li>

                    <li>
                        <strong>Interés legítimo:</strong> en determinados
                        casos, el tratamiento de datos puede basarse en el
                        interés legítimo de mejorar el servicio y gestionar
                        aspectos administrativos, siempre respetando tus
                        derechos.
                    </li>
                </ul>

                <h3 className="mt-10 font-black">
                    Categoría de datos que se tratan en esta web
                </h3>

                <ul className="mt-4 text-left list-disc list-inside space-y-2">
                    <li>
                        <strong>Datos identificativos:</strong> nombre, correo
                        electrónico y datos proporcionados voluntariamente.
                    </li>
                    <li>
                        <strong>Datos de contacto:</strong> información enviada
                        a través de formularios o correos electrónicos.
                    </li>
                    <li>
                        <strong>Datos de facturación:</strong> información
                        necesaria para la gestión de pagos y emisión de
                        facturas, en caso de contratación.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default function política() {
    return (
        <div className="flex flex-col ">
            <SectionOne />
            <Sectiontwo />
            <SectionThree />
        </div>
    )
}
