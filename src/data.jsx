import {
  FaWifi,
  FaNetworkWired,
  FaVideo,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { MdFiberManualRecord } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export const navTabs = [
  { id: "header", name: "Start" },
  { id: "services", name: "Leistungen" },
  { id: "about", name: "Über Uns" },
  { id: "gallery", name: "Galerie" },
  { id: "contact", name: "Kontakt" },
];

export const services = [
  {
    name: "Glasfaser",
    icon: <MdFiberManualRecord />,
    description:
      "Installation und Wartung moderner Glasfaserlösungen für schnelle und stabile Verbindungen.",
  },
  {
    name: "WiFi Lösungen",
    icon: <FaWifi />,
    description:
      "Leistungsstarke WLAN-Netze für Wohnungen, Häuser, Büros und Gewerbeflächen.",
  },
  {
    name: "Alarmsysteme",
    icon: <GiAlarmClock />,
    description:
      "Zuverlässige Sicherheitslösungen für den Schutz von Privat- und Geschäftsobjekten.",
  },
  {
    name: "Kameraüberwachung",
    icon: <FaVideo />,
    description:
      "Moderne Videoüberwachungssysteme mit klarer Bildqualität und sicherem Zugriff.",
  },
  {
    name: "Netzwerkkabel",
    icon: <FaNetworkWired />,
    description:
      "Saubere und strukturierte Netzwerkverkabelung für langlebige technische Infrastruktur.",
  },
];

export const contacts = [
  {
    name: "Telefon",
    value: "+41 XXX XXX XXX",
    href: "tel:+41XXXXXXXX",
    buttonTitle: "Anrufen",
    icon: <FaPhoneAlt />,
  },
  {
    name: "E-Mail",
    value: "info@ip-connect.ch",
    href: "mailto:info@ip-connect.ch",
    buttonTitle: "E-Mail senden",
    icon: <FaEnvelope />,
  },
  {
    name: "Standort",
    value: "Schweiz",
    href: "#",
    buttonTitle: "Standort ansehen",
    icon: <FaMapMarkerAlt />,
  },
];

export const aboutHighlights = [
  {
    icon: <MdFiberManualRecord />,
    label: "Glasfaser",
    title: "Schnelle Verbindungen",
  },
  {
    icon: <FaWifi />,
    label: "WiFi",
    title: "Stabiles Netzwerk",
  },
  {
    icon: <HiOutlineShieldCheck />,
    label: "Sicherheit",
    title: "Alarm & Kamera",
  },
  {
    icon: <FaNetworkWired />,
    label: "Netzwerk",
    title: "Saubere Verkabelung",
  },
];