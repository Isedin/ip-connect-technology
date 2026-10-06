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

import { MdOutlineSettingsInputAntenna } from "react-icons/md";

import {
  FiberVerlegen,
  KameraUeberwachung,
  AlarmSysteme,
  WifiAvatar,
  Netzwerkinfrastruktur,
  Gegensprechanlagen,
} from "./assets";

export const navTabs = [
  { id: "header", name: "Start" },
  { id: "project", name: "Projekte" },
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

  {
    name: "Gegensprechanlagen",
    icon: <MdOutlineSettingsInputAntenna />,
    description:
      "Moderne Türkommunikation und Gegensprechanlagen für Wohn- und Geschäftsobjekte.",
  },
];

export const contacts = [
  {
    name: "Telefon",
    value: "+41766022334",
    href: "tel:+41766022334",
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
    href: "https://www.google.com/maps/place/IP-Connect+Technology/@46.9564663,6.6505632,9z/data=!4m10!1m2!2m1!1sip-connect+tecnology+schweiz!3m6!1s0x479015ff6cd26ff5:0xb4b04f9f8986871c!8m2!3d47.4390596!4d8.2096543!15sChxpcC1jb25uZWN0IHRlY25vbG9neSBzY2h3ZWl6kgEbcHJvcGVydHlfbWFuYWdlbWVudF9jb21wYW554AEA!16s%2Fg%2F11zgfm2005?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
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

export const projects = [
  {
    title: "Glasfaser",
    image: FiberVerlegen,
    description:
      "Professionelle Verlegung moderner Glasfaserleitungen für schnelle und stabile Verbindungen.",
    details:
      "Wir realisieren professionelle Glasfaserinstallationen für Privatkunden, Unternehmen und Gewerbeobjekte. Von der fachgerechten Leitungsverlegung und Vorbereitung der Anschlüsse bis zur sauberen Installation sorgen wir für eine leistungsfähige und zukunftssichere Infrastruktur.",
  },

  {
    title: "Kameraüberwachung",
    image: KameraUeberwachung,
    description:
      "Moderne CCTV- und Sicherheitslösungen mit sicherem Fernzugriff.",
    details:
      "Wir installieren moderne Videoüberwachungssysteme für private und gewerbliche Objekte. Dazu gehören die fachgerechte Positionierung der Kameras, Verkabelung, Einrichtung der Aufzeichnung sowie der sichere Fernzugriff über Smartphone, Tablet oder Computer.",
  },

  {
    title: "Alarmsysteme",
    image: AlarmSysteme,
    description:
      "Zuverlässige Sicherheitslösungen für Privat- und Geschäftsobjekte.",
    details:
      "Unsere Alarmsysteme bieten zuverlässigen Schutz für Wohnungen, Häuser, Büros und Gewerbeobjekte. Wir übernehmen die Installation und Einrichtung moderner Komponenten und passen das System individuell an die Anforderungen des jeweiligen Objekts an.",
  },

  {
    title: "Smarthome",
    image: WifiAvatar,
    description:
      "Intelligente Smarthome-Lösungen für Wohnungen, Büros und Gewerbeflächen.",
    details:
      "Wir vernetzen moderne Smarthome-Komponenten zu einer komfortablen und zuverlässigen Gesamtlösung. Je nach Bedarf können verschiedene Geräte und Systeme zentral gesteuert und sinnvoll miteinander verbunden werden.",
  },

  {
    title: "Netzwerkinfrastruktur",
    image: Netzwerkinfrastruktur,
    description:
      "Saubere strukturierte Verkabelung und moderne Netzwerktechnik.",
    details:
      "Wir planen und installieren strukturierte Netzwerkinfrastrukturen für Wohnungen, Büros und Gewerbeobjekte. Dazu gehören Netzwerkverkabelung, Anschlussdosen, Verteilerschränke und weitere Komponenten für eine stabile, übersichtliche und langfristig zuverlässige Verbindung.",
  },

  {
    title: "Gegensprechanlagen",
    image: Gegensprechanlagen,
    description:
      "Moderne Türkommunikation und Gegensprechanlagen für Wohn- und Geschäftsobjekte.",
    details:
      "Wir installieren moderne Gegensprech- und Türkommunikationssysteme für Einfamilienhäuser, Mehrfamilienhäuser und Geschäftsobjekte. Je nach System ermöglichen sie eine komfortable Kommunikation und eine zuverlässige Kontrolle des Zugangs.",
  },
];