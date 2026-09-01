const galleryModules = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  },
);

const getFileName = (path) => {
  return (
    path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") || ""
  );
};

const createImage = (path, src) => ({
  path,
  src,
  fileName: getFileName(path),
});

const allImages = Object.entries(galleryModules)
  .map(([path, src]) => createImage(path, src))
  .sort((a, b) =>
    a.path.localeCompare(b.path, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );

const getImagesFromFolder = (folder) =>
  allImages.filter(({ path }) => path.includes(`/gallery/${folder}/`));

const getImagesFromSubfolder = (folder, subfolder) =>
  allImages.filter(({ path }) =>
    path.includes(`/gallery/${folder}/${subfolder}/`),
  );

export const glasfaserSubcategories = [
  {
    id: "all",
    title: "Alle",
  },
  {
    id: "oto",
    title: "OTO",
    images: getImagesFromSubfolder("glasfaser", "oto"),
  },
  {
    id: "lwl-patchpanel",
    title: "LWL-Patchpanel",
    images: getImagesFromSubfolder("glasfaser", "lwl-patchpanel"),
  },
  {
    id: "bep",
    title: "BEP",
    images: getImagesFromSubfolder("glasfaser", "bep"),
  },
];

export const galleryCategories = [
  {
    id: "all",
    title: "Alle",
    images: allImages,
  },
  {
    id: "glasfaser",
    title: "Glasfaser",
    images: getImagesFromFolder("glasfaser"),
    subcategories: glasfaserSubcategories,
  },
  {
    id: "ueberwachung",
    title: "Überwachung",
    images: getImagesFromFolder("ueberwachung"),
  },
  {
    id: "wifi",
    title: "WiFi",
    images: getImagesFromFolder("wifi"),
  },
  {
    id: "netzwerk",
    title: "Netzwerk",
    images: getImagesFromFolder("netzwerk"),
  },
  {
    id: "alarmsystem",
    title: "Alarmsystem",
    images: getImagesFromFolder("alarmsystem"),
  },
  {
    id: "gegensechanlage",
    title: "Gegensprechanlage",
    images: getImagesFromFolder("gegensechanlage"),
  },
  {
    id: "smart-home",
    title: "Smart Home",
    images: getImagesFromFolder("smart-home"),
  },
];
